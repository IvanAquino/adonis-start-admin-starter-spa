
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

## Captures

![login](https://lh6.googleusercontent.com/fo_GQbnlBGHdV0Vk9n-IaHBoaBzA_eR2XXu3GP9JxKEgZbj8I4xOTzE6rqf8WsVC_SdH686k8SJ2hWv7m0SE=w2213-h895-rw)

![dashboard](https://lh3.googleusercontent.com/gIEd6tFvepRrN9eaDlHUkALmN1VGjh4i6MhIesj1uRAS7K3WV2CCq2O6StthQqP4xMSU5OosCeuLTv2tXISf=w2213-h895-rw)