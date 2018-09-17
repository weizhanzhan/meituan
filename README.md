# :mortar_board: 美团外卖APP

👉 项目演示地址：<a href="http://111.231.59.56/meituan/meituan.html">meituan</a>

基于 **Vue 全家桶 (2.x)** 制作的美团外卖APP

【前端】

- **Vue**：构建用户界面的 MVVM 框架，核心是响应的数据绑定和组系统件
- **vue-router**：为单页面应用提供的路由系统，项目上线前使用了路由懒加载技术，来异步加载路由优化性能
- **vuex**：Vue 集中状态管理，在多个组件共享某些状态时非常便捷
- **vue-resource**：服务端通讯，项目后期改用 `axios`
- **axios**：服务端通讯。基于 `Promise` 的网络请求插件
- **better-scroll**：iscroll 的优化版，使移动端滑动体验更加流畅
- **ES6**：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用

【后端及数据库】

- **Node.js**：利用 Express 起一个本地测试服务器
- **Express**：一个自身功能极简，完全是由路由和中间件构成一个的WEB开发框架
- **MongoDB**：是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案

## :closed_book: 收获

1. 对 vue 的组件、指令、选项、模版渲染、事件绑定、计算属性等有了进一步的了解
2. 了解了 vue 组件之间的交互、传值
3. 熟悉了在 vue 项目中使用第三方插件（组件）
4. 熟悉了组件化、模块化的开发思维
5. 熟悉了 vue-router 控制路由和子路由的方式
6. 再次熟悉项目开发流程：项目分析设计 -> 项目环境搭建 -> 依赖安装 -> 页面架构设计 -> 组件开发 -> 测试联调 -> 发布上线
7. 学会利用过渡效果及动画效果制作良好的用户交互体验

### 首页

首页数据：本地mock json

### 商家模块

该页面主要实现了点餐、商品评价、商家信息预览等功能，内置购物车

数据通过 `axios` 异步请求获取


下面三个部分使用嵌套子路由实现：

**点餐**：

- 布局上采用嵌套 Flex 布局。
- 滚动效果借助 `better-scroll` 滚动插件实现。
- 实现了左右菜单联动效果：右侧滚动，左侧对应菜单高亮，左侧点击，右侧滚动到对应区域。
- 设计了迷你购物车组件
- 利用 vue-transtion 过度动画实现了购物车加减动态效果

**评价**：

- 复用 `star`、`cross-line`、`ratings-select` 等组件，体会到组件化开发的便捷性

**商家**：

- 借助 `better-scroll` 实现了横向滚动和纵向滚动效果

![image](https://github.com/weizhanzhan/myapp/blob/master/viewImg/index.PNG)<br/>
![image](https://github.com/weizhanzhan/myapp/blob/master/viewImg/menu.PNG)<br/>
![image](https://github.com/weizhanzhan/myapp/blob/master/viewImg/list.PNG)<br/>
![image](https://github.com/weizhanzhan/myapp/blob/master/viewImg/pingjia.PNG)<br/>
![image](https://github.com/weizhanzhan/myapp/blob/master/viewImg/shangjia1.PNG)<br/>
![image](https://github.com/weizhanzhan/myapp/blob/master/viewImg/shangjia2.PNG)<br/>
![image](https://github.com/weizhanzhan/myapp/blob/master/viewImg/queren.PNG)<br/>
![image](https://github.com/weizhanzhan/myapp/blob/master/viewImg/find.PNG)<br/>
![image](https://github.com/weizhanzhan/myapp/blob/master/viewImg/order.PNG)<br/>
![image](https://github.com/weizhanzhan/myapp/blob/master/viewImg/info.PNG)<br/>
![image](https://github.com/weizhanzhan/myapp/blob/master/viewImg/mine.PNG)
