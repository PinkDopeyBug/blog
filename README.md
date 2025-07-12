# 个人博客

博客主题为 [vuepress-theme-plume](https://theme-plume.vuejs.press/)
本项目fork自：https://github.com/zhenghaoyang24/hoey-blog-plume 并在其上做了修改。

博客主页为自定义页面，若你也在使用这个博客主题并想参考本博客主页，可查看以下详细说明：

### 配置

1. 自定义主页 组件代码位置为：`docs/.vuepress/theme/components` 下的所有除 `AllFriendContent.vue` 的 `.vue` 文件。
`AllFriendContent.vue` 为自定义友情链接页面所需文件，具体可参考下文 [组件说明](#组件说明)。
样式文件位置为 `docs/.vuepress/theme/styles/custom.css`。

2. 在 `docs/.vuepress/client.js` 中，导入 `Custom.vue` 与 `docs/.vuepress/theme/styles/custom.css`：

``` js
import './theme/styles/custom.css'
import Custom from './theme/components/Custom.vue'
import Custom from './theme/components/AllFriendContent.vue'  // 友情链接页面所需组件
  export default defineClientConfig({
    enhance({ app }) {
    app.component('Custom', Custom)
    app.component('AllFriendContent', AllFriendContent)  
  },
})
```

3. 在 `docs/README.md` 修改主页配置：

```markdown
---
pageLayout: home
externalLinkIcon: false
config:
  - type: Custom
---
```

4. AboutMeCharacter.vue 中的图表使用了 [echarts.js](https://echarts.apache.org/zh/index.html) ,因此需要安装此依赖：

```shell
npm install echarts
```

### 组件说明

#### `Custom.vue` 为主页组件，主页内容即为以下卡片组件的组合。

#### `AboutMeName.vue` 为主页中 **自我介绍卡片**：

#### `AboutMeSkill.vue` 为主页中 **技能卡片**：

你可以在 `AboutMeSkill.vue` 的 `script` 中修改 `technology` 与 `tools` 数组来更改卡片内容。其中 `type` 为 值，
`icon` 为 [iconify](https://icon-sets.iconify.design/) 中的 **Icon name** 。


#### `AboutMeCharacter.vue` 为主页中 **性格卡片**：


#### `AboutMeLife.vue` 为主页中 **我的日常卡片**：


#### `AboutMeFriendLink.vue` 为主页中 **友情链接卡片**：

若你的友情链接较多，你可以将链接信息写在 例如 `docs/.vuepress/theme/data/friends.json`中，
同时在 `AboutMeFriendLink.vue` 中的 `script` 将 `friends.json` 导入。

卡片右上角 **所有好友** 按钮的友情链接页面跳转路径位置在  `AboutMeFriendLink.vue` 中 的 `<router-link to="（相对路径）">` 进行更改。

若你也想自定义友情链接页面，可以参考 `docs/notes/more/friends.md`，并在 `client.js` 中导入 `AllFriendContent.vue`。

#### `AboutMeText.vue` 为主页中 **文本卡片**：

文本卡片使用了插槽，可以在 `Custom.vue` 中自定义内容，满足多种文本需求。


### 自定义卡片宽度

卡片宽度在卡片组件的父 `div` 中使用 `class` 进行更改，`grid-row-1` 为一个卡片铺满一行，`grid-row-1-1` 为两个卡片 1:1 行排, `grid-row-3-2` 为两个卡片 3:2 行排,你可以在 `Custom.vue` 的 `style` 中写更多的布局方式，随意组合卡片。
