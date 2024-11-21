Component({
  properties: {
    // 是否还有更多数据
    hasMore: {
      type: Boolean,
      value: true
    },
    // 数据总数
    total: {
      type: Number,
      value: 0
    },
    // 是否正在加载
    loading: {
      type: Boolean,
      value: false
    }
  },

  data: {
    isRefreshing: false, // 是否正在刷新
  },

  methods: {
    // 刷新数据
    onRefresh() {
      if (this.data.loading) return;
      
      this.setData({
        isRefreshing: true
      });
      
      this.triggerEvent('refresh', {}, {});
    },

    // 加载更多
    onLoadMore() {
      if (this.data.loading || !this.data.hasMore) return;
      
      this.triggerEvent('loadmore', {}, {});
    },

    // 完成刷新
    finishRefresh() {
      this.setData({
        isRefreshing: false
      });
    },
  }
});
