// index.ts
Page({
  data: {
    params: '',
    tokenList: [
      '9sqhghj9jMF19us5lu7TRDKLK7',
      'OgGR01UMbSQlaQJ9PE7tRDKLK7',
      'LJP4ojCJ0K6UeC7yPTFORDKLK7'
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
