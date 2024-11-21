Page({
  data: {
    list: [],
    page: 1,
    pageSize: 10,
    hasMore: true,
    total: 0,
    loading: false
  },

  onLoad() {
    this.loadData();
  },

  // 模拟获取数据
  async fetchData(page, pageSize) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const total = 35; // 总数据量
        const start = (page - 1) * pageSize;
        const end = Math.min(start + pageSize, total);
        const list = [];
        
        for (let i = start; i < end; i++) {
          list.push({
            id: i + 1,
            title: `文章标题 ${i + 1}`,
            description: '这是一段示例文章描述，展示了文章的主要内容。这是一段示例文章描述，展示了文章的主要内容。',
            author: '作者' + ((i % 3) + 1),
            date: '2024-01-' + String(Math.floor(Math.random() * 30) + 1).padStart(2, '0')
          });
        }

        resolve({
          list,
          total,
          hasMore: end < total
        });
      }, 1000); // 模拟网络延迟
    });
  },

  // 刷新数据
  async onRefresh() {
    this.setData({ page: 1 });
    await this.loadData();
    this.selectComponent('#list-scroll').finishRefresh();
  },

  // 加载更多
  async onLoadMore() {
    if (!this.data.hasMore || this.data.loading) return;
    this.setData({ page: this.data.page + 1 });
    await this.loadData();
  },

  // 加载数据
  async loadData() {
    if (this.data.loading) return;
    
    this.setData({ loading: true });
    try {
      const { list, total, hasMore } = await this.fetchData(this.data.page, this.data.pageSize);
      
      this.setData({
        list: this.data.page === 1 ? list : [...this.data.list, ...list],
        total,
        hasMore,
        loading: false
      });
    } catch (error) {
      this.setData({ loading: false });
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      });
    }
  }
});
