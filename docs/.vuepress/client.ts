import { defineClientConfig } from "vuepress/client";
import "./theme/styles/index.css";
import RepoCard from "vuepress-theme-plume/features/RepoCard.vue";
import AllFriendContent from "./components/AllFriendContent.vue";
import "./theme/styles/custom.css";
import Custom from "./components/Custom.vue";
import { getPV } from "./api/dataStatistics";

declare global {
  interface Window {
    _hmt?: Array<any>;
  }
}

export default defineClientConfig({
  enhance({ app, router }) {
    // 注册组件
    app.component("RepoCard", RepoCard);
    app.component("Custom", Custom);
    app.component("AllFriendContent", AllFriendContent);

    // 路由切换事件处理
    router.beforeEach((to, from, next) => {
      //触发百度的pv统计
      if (window._hmt) {
        window._hmt.push(["_trackPageview", to.fullPath]);
      }
      next();
    });
  },
});
