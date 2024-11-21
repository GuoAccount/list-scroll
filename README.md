# 微信小程序项目

这是一个微信小程序项目，包含以下主要功能：

## 项目结构

```
├── components/       # 自定义组件
├── pages/           # 页面文件
├── assets/          # 静态资源
└── app.js           # 应用程序入口文件
```

## 开发环境

- 微信开发者工具
- Node.js

## 运行项目

1. 克隆项目到本地
2. 使用微信开发者工具打开项目
3. 编译运行

## 贡献指南

1. Fork 本仓库
2. 创建新的分支
3. 提交你的更改
4. 发起 Pull Request

# wx-mini-listscroll

一个高性能的微信小程序列表滚动加载组件，完美解决长列表性能问题。

## 🚀 特性

- 🎯 **虚拟列表渲染**：只渲染可视区域内的数据，大幅提升长列表性能
- 🔄 **无缝滚动加载**：支持上拉加载更多，下拉刷新
- 💫 **平滑滚动体验**：采用节流优化，确保滚动流畅
- 🎨 **高度自定义**：支持自定义列表项样式、加载动画
- 📱 **自适应布局**：完美适配不同屏幕尺寸
- 🛠 **配置简单**：开箱即用，简单的API设计

## 🤔 为什么需要这个组件？

在微信小程序开发中，经常遇到以下痛点：
1. 长列表渲染卡顿，影响用户体验
2. 大量数据加载导致内存占用过高
3. 频繁的滚动事件触发造成性能问题
4. 原生scroll-view配置繁琐，使用不便

本组件通过虚拟列表技术和性能优化，完美解决了这些问题。

## 📦 安装使用

1. 复制 `components/list-scroll` 文件夹到你的项目中
2. 在页面的 json 文件中注册组件：
```json
{
  "usingComponents": {
    "list-scroll": "/components/list-scroll/list-scroll"
  }
}
```

## 🎮 基础用法

```wxml
<list-scroll
  list="{{dataList}}"
  loading="{{loading}}"
  finished="{{finished}}"
  bind:loadmore="onLoadMore"
  bind:refresh="onRefresh"
>
  <view slot="item" slot-scope="item">
    <!-- 自定义列表项内容 -->
    <view class="item">{{item.text}}</view>
  </view>
</list-scroll>
```

## ⚙️ API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| list | 列表数据 | Array | [] |
| loading | 是否处于加载状态 | boolean | false |
| finished | 是否已加载完成 | boolean | false |
| height | 列表高度 | string | 100vh |
| itemHeight | 列表项高度 | number | 100 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| bind:loadmore | 滚动触底时触发 | - |
| bind:refresh | 下拉刷新时触发 | - |

## 🌰 示例代码

```javascript
Page({
  data: {
    dataList: [],
    loading: false,
    finished: false,
    page: 1
  },

  onLoadMore() {
    if (this.data.loading || this.data.finished) return;
    
    this.setData({ loading: true });
    // 模拟异步请求
    setTimeout(() => {
      const newData = this.generateData(this.data.page);
      this.setData({
        dataList: [...this.data.dataList, ...newData],
        page: this.data.page + 1,
        loading: false,
        finished: this.data.page >= 5
      });
    }, 1000);
  }
});
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建新的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 发起 Pull Request

## 📝 开源协议

MIT License - 详见 [LICENSE](LICENSE) 文件
