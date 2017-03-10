<template>
    <div class="row content-tabs">
        <button class="roll-nav roll-left J_tabLeft"><i class="fa fa-backward" @click="moveLeft"></i>
        </button>
        <nav class="page-tabs J_menuTabs">
            <div class="page-tabs-content">
                <router-link to='/index_v1' class=" J_menuTab" :class="{active:currPath=='/index_v1'}">首页</router-link>
                <router-link v-for="item in menuTabs" :to=item.path :dataId=item.id class=" J_menuTab" :class="{active:currPath==item.path}">{{item.text}} <i class="fa fa-times-circle"></i></router-link>
            </div>
        </nav>
        <button class="roll-nav roll-right J_tabRight"><i class="fa fa-forward"></i>
        </button>
        <div class="btn-group roll-nav roll-right">
            <button class="dropdown J_tabClose" data-toggle="dropdown">关闭操作<span class="caret"></span>
            </button>
            <ul role="menu" class="dropdown-menu dropdown-menu-right">
                <li class="J_tabShowActive"><a>定位当前选项卡</a>
                </li>
                <li class="divider"></li>
                <li class="J_tabCloseAll"><a>关闭全部选项卡</a>
                </li>
                <li class="J_tabCloseOther"><a>关闭其他选项卡</a>
                </li>
            </ul>
        </div>
        <a href="login.html" class="roll-nav roll-right J_tabExit"><i class="fa fa fa-sign-out"></i> 退出</a>
    </div>
</template>
<script>
import {
    mapState,
    mapActions,
    mapGetters
} from 'vuex'
export default {
    data() {
            return {

            }
        },
        methods: {
            moveLeft() {
                var o = Math.abs(parseInt($(".page-tabs-content").css("margin-left")));
                var l = countWidth($(".content-tabs").children().not(".J_menuTabs"));
                var k = $(".content-tabs").outerWidth(true) - l;
                var p = 0;
                if ($(".page-tabs-content").width() < k) {
                    return false
                } else {
                    var m = $(".J_menuTab:first");
                    var n = 0;
                    while ((n + $(m).outerWidth(true)) <= o) {
                        n += $(m).outerWidth(true);
                        m = $(m).next()
                    }
                    n = 0;
                    if (countWidth($(m).prevAll()) > k) {
                        while ((n + $(m).outerWidth(true)) < (k) && m.length > 0) {
                            n += $(m).outerWidth(true);
                            m = $(m).prev()
                        }
                        p = countWidth($(m).prevAll())
                    }
                }
                $(".page-tabs-content").animate({
                    marginLeft: 0 - p + "px"
                }, "fast")
            },
            countWidth(array) {
                var k = 0;
                $(array).each(function() {
                    k += $(this).outerWidth(true)
                });
                return k
            }
        },
        computed: mapState({
            menuTabs: state => state.menuTab.menuTabs,
            currPath: state => state.menuTab.currentPath
        })

}
</script>
