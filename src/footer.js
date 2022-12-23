import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return(
    <div  >
       <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              <span className="me-3 py-2 text-dark">
                <select className="form-select form-select-sm language-switcher" onClick={changeLanguage}>
                    <option  value="en">English</option>
                    <option  value="lt">Lietuvių</option>
                </select>
              </span>
            </nav>
    </div>
  )
}

export default Footer;