# Cookies & local storage

## 0. Create basic cookie
**Install your development environment:**
* Install ```webpack-dev-server``` by running ```npm install webpack-dev-server --save-dev``` (if you have some errors of missing dependencies, install these packages: ```npm i -D webpack``` and ```npm i -D webpack-cli```)
* Create an empty file ```src/index.js```
* Run your server with ```node_modules/.bin/webpack-dev-server```
**In a file ```0-index.html```, create a basic html template:**
* Add two text inputs, with the id ```firstname``` and ```email```
* Add one button with the text “Log me in” that will call the function ```setCookies```
* Add one button with the text “Show the cookies” that will call the function ```showCookies```
* Create a function ```setCookies```:
    * It should set the cookie ```firstname``` with the value in the ```firstname``` input
    * It should set the cookie ```email``` with the value in the ```email``` input
* Create a function ```showCookies```:
    * It should create a DOM element ```p```
    * It should set the inner html with ```Cookies```: and the value of the cookie
    * It should append the paragraph at the bottom of the page
