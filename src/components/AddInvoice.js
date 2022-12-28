import React from "react";
import Select from "react-select"
import { Link, useNavigate, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import invoiceService from "../services/invoice.service";
import customerService from "../services/customer.service";
import "bootstrap/dist/css/bootstrap.min.css";
import itemService from "../services/item.service";
import { t } from "i18next";


const AddInvoice = () => {
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [myDate, setDate] = useState('');
    const [customer, setCustomer] = useState([]);
    const [invoiceItems, setInvoiceItems] = useState([{ item: "", quantity: "", price: ""}]);
    const navigate = useNavigate();
    const {id} = useParams();
    const [customerId, setCustomers] = useState([]);
    const [items, setItems] = useState([]);

    const init = () => {
        customerService
            .getAll()
            .then((response) => {
                console.log("Printing Customer data", response.data);////
                setCustomer(response.data);
            })
            .catch((error) => {
                console.log("Ups", error);
            });

        itemService
            .getAll()
            .then((response) => {
                console.log("Printing Items data", response.data);/////
                setItems(response.data);
            })
            .catch((error) => {
                console.log("Ups", error);
            });  
    };

    const saveInvoice = (e) => {
        e.preventDefault();
        const invoice = {invoiceNumber, myDate, invoiceItems, customerId ,id } ;

        if (id) {
            invoiceService.update(invoice)
                .then(response => {
                    console.log('Invoice data updated successfully', response.data);////
                    navigate('/invoices'); 
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })}
        else {
            invoiceService.create(invoice)
                .then(response => {
                    console.log('Invoice added successfully',  response.data);
                    navigate('/invoices');
                })
                .catch(error => {
                    console.log('Something went wrong555', error);
                })
            }
        }

  
    useEffect(() => {
        init();
       
        if (id) {
          invoiceService.get(id)
            .then(invoice => {
                setInvoiceNumber(invoice.data.invoiceNumber);
                setDate(invoice.data.myDate);
                setCustomers(invoice.data.customerId);
                setInvoiceItems(invoice.data.invoiceItems);     
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
        }
    },[])


    let addFormFields = () => {  
        setInvoiceItems([...invoiceItems, { item: "", quantity: "", price: "" }])
      }
    
    let removeFormFields = (i) => {
        let newInvoiceItems = [...invoiceItems];
        newInvoiceItems.splice(i, 1);
        setInvoiceItems(newInvoiceItems)
    }

    let handleChange = (option, index, name) => {
        const value = option;
        const list = [...invoiceItems];
        list[index][name] = value;

        if(option.bazineKaina != null) {
            list[index]["price"] = option.bazineKaina;
       }
        if (name === "price" && value > 0) { 
            list[index][name] = value;
        }
        
        setInvoiceItems(list);
     }

     const filteredCustomerList = customer.filter((product) => {

        return product.klientoStatusas === 'Aktyvus'; 
      }); 

    const filteredItemList = items.filter((product) => {
          return product.statusas === 'Aktyvus';
  
    });
   
    return(
        <div className="container">
            <h3>{t('addInvoice')}</h3>
            <hr/>
            <form>
                <div className="form-group ml-3">
                    <input
                       type="date"
                       className="form-control col-3"
                       id="date"
                       value={myDate}
                       onChange={(e) => setDate(e.target.value)}
                       placeholder="Įveskite datą"
                    /> 
                </div>
                
                <div className="form-group">
                    <Select     
                        placeholder={t('select')}
                        value={customerId}             
                        options={filteredCustomerList}
                        getOptionLabel = {a => a.vardas + " " + a.pavarde}
                        getOptionValue={a => a}  
                        className=" col-4"
                        id="customer"
                        onChange={(e) => setCustomers(e)} 
                        > 
                    </Select>
                </div>
                
                <div className="form-group ml-3">
                    <input
                       type="text"
                       className="form-control col-3"
                       id="Invoice number"
                       value={invoiceNumber}
                       onChange={(e) => setInvoiceNumber(e.target.value)}
                       placeholder={t('enterInvoiceNumber')}
                    />
                </div>
                <hr/>
                <div className="form-block "> 
                    {invoiceItems.map((element, index) => { 
                        return(
                            <div className="form-inline mt-2" key={index}>
                                <Select 
                                    placeholder={t('select')}
                                    className="col-4"
                                    name="item"
                                    options={filteredItemList}
                                    getOptionLabel = {a => a.pavadinimas}
                                    getOptionValue = {a => a}
                                    value={element.item}
                                    onChange={e => handleChange(e, index, "item")}
                                />
                            
                                <input 
                                    // type="number"
                                    inputMode="numeric"
                                    min="10" 
                                    name="quantity"
                                    className="form-control col-4" 
                                    placeholder={t('enterQuantity')} 
                                    value={element.quantity}     
                                    onChange = {e => handleChange(e.target.value, index, "quantity")}
                                                                 
                                />
                                <input 
                                    type="text"
                                    name="price"
                                    className="form-control col-2 ml-2" 
                                    //placeholder="Iveskite kainą" 
                                    options={items}
                                    getOptionLabel = {a => a.bazinekaina}
                                    getOptionValue = {a => a}
                                    placeholder={element.item.bazineKaina}
                                    value={element.price}     
                                    onChange = {e => handleChange(e.target.value, index, "price")}                              
                                />
                                 
                                 {invoiceItems.length > 1 &&(
                                    <button type="button"  className="btn btn-outline-success ml-2 " onClick={() => removeFormFields(index)}>{t('btnDelete')}</button> 
                                )}
                            </div>
                        )})
                    }
                <hr/>
                    <button 
                        className="btn btn-outline-danger mt-2" 
                        type="button" 
                        onClick={() => addFormFields()}>{t('btnAdd')}
                    </button>
                    
                    <button onClick={(e) => saveInvoice(e)}
                    className="btn btn-outline-primary ml-2 mt-2">{t('btnSave')}
                    </button>
                    <button onClick={() => navigate('/invoices')} className="btn btn-outline-info ml-2 mt-2">
                    {t('btnBack')}
                    </button>

                </div>

                <br />
                <div>
                    {/* <button onClick={(e) => saveInvoice(e)}
                    className="btn btn-primary">Save</button> */}
                </div>
            </form>
            <hr/>
            {/* <Link to="/invoices">{t('btnBack')}</Link> */}
        </div>
    )
};

export default AddInvoice;