# wx-mini-listscroll

<div align="center">
  <h3>🚀 一个高性能的微信小程序列表滚动加载组件</h3>
  <p>完美解决长列表渲染卡顿问题，提供流畅的滚动体验</p>
</div>

## ✨ 核心特性

- 🎯 **高性能虚拟列表**
  - 仅渲染可视区域数据，大幅提升性能
  - 支持10w+数据量流畅滚动
  - 内存占用低，性能损耗小

- 🔄 **智能滚动加载**
  - 无缝上拉加载更多
  - 流畅下拉刷新
  - 自动节流优化

- 💫 **开箱即用**
  - 简单易用的API设计
  - 完善的类型定义
  - 灵活的样式定制

## 🤔 为什么选择 wx-mini-listscroll？

在微信小程序开发中，我们经常遇到以下问题：
- ❌ 长列表渲染严重卡顿
- ❌ 大量数据导致内存占用过高
- ❌ 频繁的滚动事件影响性能
- ❌ scroll-view 配置繁琐

**wx-mini-listscroll** 完美解决了这些问题：
- ✅ 虚拟列表技术，确保超长列表流畅滚动
- ✅ 智能内存管理，低内存占用
- ✅ 自动节流优化，平滑滚动体验
- ✅ 简单易用的API，快速上手

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

## 🎮 快速开始

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
