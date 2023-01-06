# Programa sąskaitų išrašymui

Programos kūrime dalyvavo:
Andrius Adomaitis
Augustinas Paukštė
Deimis Čekanauskas
Kristupas Markauskas
Laurynas Bukys
Linas Mackevičius
Mindaugas Špukas

## Programos pagrindinės funkcijos

    1. Prekių pridėjimas/redagavimas/ištrynimas
    2. Klientų pridėjimas/redagavimas/ištrynimas
    3. Sąskaitų išrašymas/redagavimas/ištrynimas 
    4. Sąskaitų spausdinimas PDF formate
    5. Dvi kalbos - lietuvių ir anglų
    6. JWT autentikacija ir autorizacija
    
![Title](https://user-images.githubusercontent.com/111871226/210971494-af94aa8d-63f4-4b6b-a02a-eab046bce911.PNG)

### Prekių sąrašas

    Galima:
            matyti prekių sąrašą
            filtruoti pagal aktyvumo kriterijų
            ieškoti pagal pavadinimą
            
![Items](https://user-images.githubusercontent.com/111871226/210973472-64e23ab8-dea9-4534-8b5f-f90535f4f65e.PNG)

            
### Pridėti prekę

    Galima:
            pridėti/redaguoti/ištrinti naują prekę (tik turint administratoriaus/vadybininko roles)

![Add Item](https://user-images.githubusercontent.com/111871226/210973656-36957629-3925-4c72-9804-5bc4c8128f08.PNG)


### Klientų sąrašas

    Galima:
            matyti klientų sąrašą
            filtruoti pagal aktyvumo kriterijų
            ieškoti pagal vardą/pavardę
            
![Clients](https://user-images.githubusercontent.com/111871226/210973831-2a7b6fae-2480-4520-af9d-dec2117c5b03.PNG)

### Pridėti klientą

    Galima:
            pridėti/redaguoti/ištrinti naują klientą (tik turint administratoriaus/vadybininko roles)
            
![Add Client](https://user-images.githubusercontent.com/111871226/210974060-ebc28589-fa21-424d-914b-271a4ccfa66e.PNG)
            
### Sąskaitų sąrašas

    Galima:
            matyti sąskaitų sąrašą
            ieškoti pagal vardą/pavardę
            
![Invoices](https://user-images.githubusercontent.com/111871226/210974281-02e59d80-93e2-4adf-a59c-9b04dccb4474.PNG)

### Pridėti sąskaitą
    Galima: 
            pridėti/peržiūrėti/spausdinti
            redaguoti/ištrinti naują klientą (tik turint administratoriaus/vadybininko roles)
            Kuriant naują sąskaitą bus rodomi tik aktyvūs klientai ir aktyvios prekės
            
![Add Invoice](https://user-images.githubusercontent.com/111871226/210974545-36868a09-c382-47b8-8f3a-9c154827e24d.PNG)


### Peržiūrėti sąskaitas

![Invoice Preview](https://user-images.githubusercontent.com/111871226/210974771-cdc875bc-a785-45af-9ea2-2f34c3262ede.PNG)

### Atsispausdinti sąskaitą PDF

![Print PDF Invoice](https://user-images.githubusercontent.com/111871226/210974940-ff8813cb-1eb0-413c-ae8d-38e16db9fac3.PNG)

### Vartotojų sąrašas

    Sąrašą (ir meniu) mato tik admionistratoriaus rolę turintys vartotojai
    Galima:
            matyti vartotojų sąrašą
            pridėti/atnaujinti/ištrinti vartotojus
            
![Users](https://user-images.githubusercontent.com/111871226/210975269-8c719745-92d1-4029-a18f-8d3ff3605628.PNG)
            
### Vartotojo redagavimas, rolės keitimas

![Add User](https://user-images.githubusercontent.com/111871226/210975186-975e304c-9ebc-4848-b59e-ca61de2cfbe6.PNG)
ubusercontent.com/111871226/210975116-bac58552-5732-434d-ae34-8934bd8c56dc.PNG)
    
### Vartotojo paskyros savarankiškas sukūrimas

    Vartotojas gali susikurti savo paskyra. Sukūrus pagal nutylėjimą priskiriama "ROLE_USER"
    Jei reikia, vartotojas turintis administratoriaus rolę, gali vartotojui priskirti vadybininko arba administratoriaus rolę
    
![Registration](https://user-images.githubusercontent.com/111871226/210975479-3534a423-5a86-404e-99af-fe9ab9401103.PNG)

### Vartotojo prisijungimas

![Login](https://user-images.githubusercontent.com/111871226/210975537-cf35ce3c-0d12-43ff-9ef4-e22f099bdee2.PNG)

### Rolės

    1. Admin, gali suvesti naujus/redaguoti/ištrinti informaciją apie klientus, prekes, sąskaitas. Pridėti/atnaujinti/ištrinti vartotojus, priskirti jiems roles
    2. Manager, gali suvesti naujus/redaguoti/ištrinti informaciją apie klientus, prekes, sąskaitas.
    3. User, gali tik peržiūrėti informaciją apie klientus, prekes, jau išrašytas sąskaitas, bei suvesti naujas sąskaitas.

### Kalbos keitimas

Galima pasirinkti lietuvių arba anglų kalbą. 

![Multi Language EN](https://user-images.githubusercontent.com/111871226/210975889-ca584df4-5ad2-4963-8504-8a2ab3c26d3a.PNG)

### MySQL Invoice schema

![MySQL Invoice schema view](https://user-images.githubusercontent.com/111871226/210976158-bde1245f-584c-40a0-94d8-2dd787494645.PNG)

### Table connection scheme in MySQL

![Table Connection scheme MySQL](https://user-images.githubusercontent.com/111871226/210977401-227da838-ace0-4394-90b9-b9088f77ecb4.PNG)

### BackEnd
    JWT Security
    prieš paleidžiant BackEnd'ą reikia sukurti duomenų bazę "invoice"
    username: "root" pasword: "java" standartinis port:3306
    pirmą kartą startavus BackEnd'ą automatiškai sukuriamos rolės ir
    pagrindinis vartotojas: "Admin", slaptažodis: "123456", vartotojui
    priskiriama rolė "ROLE_ADMIN"
    
![Invoice-backend](https://user-images.githubusercontent.com/111871226/210977596-74a42ca8-e701-4aff-809e-86f22d18dac9.PNG)

