import { MENU_TAB_ADD,CHANGE_CURR_PATH } from '../types/types.js'


export const menuTabMutation = {
    [MENU_TAB_ADD](state, menuTab) {

        let menuTabs = state.menuTabs;
        state.currentPath = menuTab.path;
        let isExist = false;
        (menuTabs).forEach(function(item, index) {
            if (item.id == menuTab.id) {
                isExist = false;
                return;
            }
        })
        if (!isExist) {
            menuTabs.push(menuTab);
        }
        console.log(state);
    },
    [CHANGE_CURR_PATH](state,path){
        state.currentPath = path;
        console.log("currentPath======="+state.currentPath);
    }

}
