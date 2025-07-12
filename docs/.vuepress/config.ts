import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
import path from "node:path";
export default defineUserConfig({
  head: [
    ["meta", { name: "referrer", content: "no-referrer" }],
    [
      "script",
      { type: "text/javascript" },
      `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "qnwy9r0rp7");
      `,
    ],
  ],
  base: "/",
  lang: "zh-CN",
  title: "呆虫仙尊的逆流河",
  description: "PinkDopeyBug blog.",
  bundler: viteBundler(),
  theme: plumeTheme({
    hostname: "https://w20241204.dpdns.org/",
    contributors: {
      mode: "block",
    },
    plugins: {
      // 如果您在此处直接声明为 true，则表示开发环境和生产环境都启用该功能
      git: true,
      seo: {
        author: {
          name: "PinkDopeyBug",
          url: "https://github.com/PinkDopeyBug",
          email: "pinkdopeybug@163.com",
        },
        autoDescription: true,
      },
      sitemap:{
        devServer:true,
      }
    },
    // markdown 增强
    markdown: {
      imageSize: true, // 图片优化
      demo: true, // 启用新的代码演示功能
      markmap: true, // 启用 Markmap 图表嵌入语法
      codeTree: true, // 启用代码树
    },

    // 代码高亮
    codeHighlighter: {
      themes: { light: "vitesse-light", dark: "vitesse-dark" },
      notationDiff: true,
      notationErrorLevel: true,
      notationFocus: true, // 启用代码块聚焦
      notationHighlight: true,
      notationWordHighlight: true, // 词高亮
      highlightLines: true, // 启用行高亮
      collapsedLines: true, // 全局启用 代码折叠
      lineNumbers: true, // 启用行号
    },
    // 评论
    comment: {
      // 服务提供商
      provider: "Giscus",
      // 是否默认启用评论
      comment: true,
      repo: "PinkDopeyBug/blog",
      repoId: "R_kgDOO_55TA",
      category: "Announcements",
      categoryId: "DIC_kwDOO_55TM4Cs2LW",
    },
    // 公告
    bulletin: {
      layout: "top-right",
      title: "公告",
      lifetime: "once",
      contentType: "markdown",
      contentFile: path.resolve(__dirname, "../notes/more/bulletin.md"),
    },
    // 版权
    copyright: {
      license: "CC-BY-4.0",
      author: "PinkDopeyBug",
    },
    // 水印
    watermark: {
      watermarkOptions: {
        content: "pinkdopeybug",
        fontColor: "#fff", // 文字颜色
      },
    },
  }),
});
