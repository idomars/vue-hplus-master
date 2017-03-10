import {MENU_TAB_ADD,CHANGE_CURR_PATH} from '../types/types.js'

export const menuTabAction = {
	addMenuTab({commit,state},menutab){
		commit(MENU_TAB_ADD,menutab);
	},
	changeCurrPath({commit,state},path){
		commit(CHANGE_CURR_PATH,path);
	}
} 