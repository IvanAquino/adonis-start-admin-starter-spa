
# Adonis StarAdmin SPA Starter
## Prebuilt auth pages

## Features
* Sigle page application
* Vue and Vue Router configured with auth restricted pages
* Basic example login and register with JWT Auth
* UI with [Start Admin Template Free](https://github.com/BootstrapDash/StarAdmin-Free-Bootstrap-Admin-Template)
* Powered by [AdonisJS](https://adonisjs.com)

## Installation
adonis new myapp --blueprint=IvanAquino/adonis-start-admin-starter-spa

## Vue App

Vue app it's in the folder __/resources/assets/vue__, you can modify the different components and compile

Watch changes on components
```
npm run watch
```

Compile production version
```
npm run production
```

_Vue-router is configured in_ ___history mode___ _by default_


## Run adonis serve dev mode

```
adonis serve --dev
```

### Http Request
You can use ___this.$http___ to access all methos of Axios

### Headers on authorized routes
Use ___this.$auth.getToken()___ to access Bearer Token

```
let headers = { 'Authorization': this.$auth.getToken() }

this.$http.get(`${window.basePath}/auth/user`, {headers})
```

### Donations
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/IvnAqn)

## Captures

![login](https://image.ibb.co/i7kHPH/sa_0.png)

![dashboard](https://image.ibb.co/eFCmJc/sa_1.png)