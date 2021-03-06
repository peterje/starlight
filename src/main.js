import Vue from 'vue'
import App from './App.vue'

// VUEX - https://vuex.vuejs.org/
import store from './store'

// VUE-ROUTER - https://router.vuejs.org/
import router from './router'

// PLUGINS
import vuetify from './plugins/vuetify'
import './plugins/vue-head'
import './plugins/vue-gtag'

// FILTERS
import './filters/capitalize'
import './filters/lowercase'
import './filters/uppercase'

// STYLES
// Main Theme SCSS
import './assets/scss/theme.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false

/*
|---------------------------------------------------------------------
| Main Vue Instance
|---------------------------------------------------------------------
|
| Render the vue application on the <div id="app"></div> in index.html
|
| https://vuejs.org/v2/guide/instance.html
|
*/
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDViPxwogRgPjtWNb52kzuTbDENC4Lku6Y",
  authDomain: "starlight-c1dff.firebaseapp.com",
  projectId: "starlight-c1dff",
  storageBucket: "starlight-c1dff.appspot.com",
  messagingSenderId: "548899986970",
  appId: "1:548899986970:web:03ae04c4b4076ef5d07ba3",
  measurementId: "G-5RRCGYCH1P"
};
firebase.initializeApp(firebaseConfig);
export default new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
