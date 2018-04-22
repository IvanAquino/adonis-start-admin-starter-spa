window.basePath = document.head.querySelector("[name=baseUrl]").content + "/api/v1";
import Vue from 'vue'
import VueRouter from 'vue-router'

import VueAuth from './packages/auth'
import VueHttp from './packages/axios'

import store from './store'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueAuth)
Vue.use(VueHttp)

import Base from './components/Base'

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(Base)
})