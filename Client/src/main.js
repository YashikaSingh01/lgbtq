import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import GlobalMixins from '@/utils/GlobalMixins.vue'
import AppConstants from '@/utils/AppConstants'
import { initializeApp } from "firebase/app";

Vue.mixin(GlobalMixins)
Vue.prototype.$const = AppConstants

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWmCh9bhG-c2cFqwlTUizbSjUiRBlDFS4",
  authDomain: "lgbtq-1a81b.firebaseapp.com",
  projectId: "lgbtq-1a81b",
  storageBucket: "lgbtq-1a81b.appspot.com",
  messagingSenderId: "969959530127",
  appId: "1:969959530127:web:881998d3270d7636bb1afa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
