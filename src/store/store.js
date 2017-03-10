import Vue from 'vue'
import Vuex from 'vuex'
import menuTab from './module/menuTab.js'
import createLogger from 'vuex/dist/logger'


Vue.use(Vuex);


const store = new Vuex.Store({
	modules:{
		menuTab:menuTab
	},
	plugins: [createLogger()],
 	strict: process.env.NODE_ENV !== 'production'
});
export default store