import { menuTabMutation } from '../mutations/menuTabMutation.js'
import { menuTabAction } from '../actions/menuTabAction.js'
import { menuTabGetter } from '../getters/menuTabGetter.js'

const state = {
	//字符串数组，存放path或者name都可以
	menuTabs : [],
	currentPath:""
}

export default{
	state,
    actions: menuTabAction,
    getters: menuTabGetter,
    mutations: menuTabMutation
}