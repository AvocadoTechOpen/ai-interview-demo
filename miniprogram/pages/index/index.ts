// index.ts
Page({
  data: {
    params: '',
    tokenList: [
      'MNbVkEuUG3iPkCnhEOMcRGZZPG', // 测试环境 开始
      'QOUYlEc4XNTWwI91Cw0PRGZZPG',
      '6Uaey6knlhE9lq4gQ4ujRGZZPG',
      'r2d7c7LQ6cRbMR0tiUTKRGZZPG',
      '89SP2rYqTusXolZVLHRbRII0G1', // 这一批是测试环境使用
    ]
  },
  onLoad() {
    const params = encodeURIComponent(JSON.stringify({ interviewToken: '9sqhghj9jMF19us5lu7TRDKLK7' }))
    this.setData({ params })
  },
  enterPlugin(e: any) {
    const params = {
      interviewToken: e.target.dataset.value
    }
    wx.redirectTo({
      url: `/videoInterview/leadPage/leadPage?mpParams=${encodeURIComponent(JSON.stringify(params))}`,
    })
  }
})

export {}
