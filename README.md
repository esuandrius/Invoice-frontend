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

## BackEnd 
    prieš paleidžiant BackEnd'ą reikia sukurti duomenų bazę "invoice"
    username: "root" pasword: "java" standartinis port:3306
    pirmą kartą startavus BackEnd'ą automatiškai sukuriamos rolės ir 
    pagrindinis vartotojas: "Admin", slaptažodis: "123456", vartotojui
    priskiriama rolė "ROLE_ADMIN"

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
