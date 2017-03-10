<template>
  
    <div id="wrapper" > 
        <!--左侧导航开始-->
        <leftMenu></leftMenu>
        <!--左侧导航结束-->
        <!--右侧部分开始-->
        <div id="page-wrapper" class="gray-bg dashbard-1">
            <borderTop></borderTop>
            <menuTaps></menuTaps>
            <div class="row J_mainContent" id="content-main">
               <router-view></router-view>

            </div>
            <div class="footer">
                <div class="pull-right">&copy; 2017-2017 <a href="http://www.re0.me/" target="_blank">zihan's blog</a>
                </div>
            </div>
        </div>
        <!--右侧部分结束-->
        <!--右侧边栏开始-->
        <rightSidebar></rightSidebar>
        <!--右侧边栏结束-->
        <!--mini聊天窗口开始-->
        <chat></chat>
    </div>
 
</template>

<script>
import leftMenu from './components/index/LeftMenu.vue'
import borderTop from './components/index/BorderTop.vue'
import menuTaps from './components/index/menuTaps.vue'
import rightSidebar from './components/index/RightSidebar.vue'
import chat from './components/index/Chat.vue'
export default {
  name: 'app',
  components:{
    leftMenu,
    borderTop,
    menuTaps,
    rightSidebar,
    chat
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
 
}
</style>
