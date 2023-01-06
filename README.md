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
    2. Klientų pridėjimas/redagavimas/ištrynimasdėjimas
    3. Sąskaitų išrašymas/redagavimas/ištrynimasdėjimas
    4. Sąskaitų spausdinimas PDF formate
    5. Dvi kalbos - lietuvių ir anglų
    6. JWT autentikacija ir autorizacija

### Rolės

    1. Admin, gali suvesti naujus/redaguoti/ištrinti informaciją apie klientus, prekes, sąskaitas. Pridėti/atnaujinti/ištrinti vartotojus, priskirti jiems roles
    2. Manager, gali suvesti naujus/redaguoti/ištrinti informaciją apie klientus, prekes, sąskaitas.
    3. User, gali tik peržiūrėti informaciją apie klientus, prekes, jau išrašytas sąskaitas, bei suvesti naujas sąskaitas.

### Vartotojo paskyros savarankiškas sukūrimas

    Vartotojas gali susikurti savo paskyra. Sukūrus pagal nutylėjimą priskiriama "ROLE_USER"
    Jei reikia, vartotojas turintis administratoriaus rolę, gali vartotojui priskirti vadybininko arba administratoriaus rolę

### Prekių sąrašas

Galima:
matyti prekių sąrašą
filtruoti pagal aktyvumo kriterijų
ieškoti pagal pavadinimą
pridėti/redaguoti/ištrinti naują prekę (tik turint administratoriaus/vadybininko roles)

### Klientų sąrašas

    Galima:
            matyti klientų sąrašą
            filtruoti pagal aktyvumo kriterijų
            ieškoti pagal vardą/pavardę
            pridėti/redaguoti/ištrinti naują klientą (tik turint administratoriaus/vadybininko roles)

### Sąskaitų sąrašas

    Galima:
            matyti sąskaitų sąrašą
            ieškoti pagal vardą/pavardę
            pridėti/peržiūrėti/spausdinti
            redaguoti/ištrinti naują klientą (tik turint administratoriaus/vadybininko roles)
    Kuriant naują sąskaitą bus rodomi tik aktyvūs klientai ir aktyvios prekės

### Vartotojų sąrašas

    Sąrašą (ir meniu) mato tik admionistratoriaus rolę turintys vartotojai
    Galima:
            matyti vartotojų sąrašą
            pridėti/atnaujinti/ištrinti vartotojus

### BackEnd

    prieš paleidžiant BackEnd'ą reikia sukurti duomenų bazę "invoice"
    username: "root" pasword: "java" standartinis port:3306
    pirmą kartą startavus BackEnd'ą automatiškai sukuriamos rolės ir
    pagrindinis vartotojas: "Admin", slaptažodis: "123456", vartotojui
    priskiriama rolė "ROLE_ADMIN"
