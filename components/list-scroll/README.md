# List Scroll Component

一个功能强大的微信小程序列表滚动组件，支持下拉刷新和触底加载更多功能。

## 特性

- ✨ 下拉刷新
- 📜 触底加载
- 🎯 自动加载状态管理
- 🎨 可自定义空状态展示
- 💫 流畅的滚动体验
- 📱 响应式设计

## 安装

将 `components/list-scroll` 文件夹复制到你的项目中。

## 使用方法

### 1. 注册组件

在页面的 json 文件中注册组件：

```json
{
  "usingComponents": {
    "list-scroll": "/components/list-scroll/list-scroll"
  }
}
```

### 2. 使用组件

在 wxml 中使用组件：

```html
<list-scroll 
  hasMore="{{hasMore}}"
  loading="{{loading}}"
  bind:refresh="onRefresh"
  bind:loadmore="onLoadMore">
  <view wx:for="{{list}}" wx:key="id">
    <!-- 你的列表项内容 -->
  </view>
</list-scroll>
```

### 3. 处理事件

在页面的 js 文件中处理事件：

```javascript
Page({
  data: {
    list: [],
    hasMore: true,
    loading: false
  },

  onRefresh() {
    // 处理下拉刷新
  },

  onLoadMore() {
    // 处理加载更多
  }
})
```

## 属性说明

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| hasMore | Boolean | false | 是否还有更多数据 |
| loading | Boolean | false | 是否正在加载数据 |
| total | Number | 0 | 数据总数 |

## 事件说明

| 事件名 | 说明 | 参数 |
|--------|------|------|
| refresh | 下拉刷新触发 | 无 |
| loadmore | 触底加载更多触发 | 无 |

## 示例

查看 [示例代码](./example) 了解更多使用方法。

## 更多文档

- [技术实现文档](./TECHNICAL.md) - 详细的技术实现说明
- [常见问题](./FAQ.md) - 常见问题解答
- [更新日志](./CHANGELOG.md) - 版本更新记录

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

MIT
