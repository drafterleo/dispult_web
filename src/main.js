import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';

//import ElementUI from 'element-ui';
//Vue.use(ElementUI);

import {Container,
        Header,
        Aside,
        Main,
        Footer,
        Menu,
        Submenu,
        MenuItem,
        MenuItemGroup} from 'element-ui';

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});
