const app = getApp<IAppOption>()
const plugin = requirePlugin('videoInterview')

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: 'loading...'
    })
    this.registerEvents()
    // 动态设置
    this.setConfig({
      guidePageVideoUrl: 'https://test-alicdn.fbmms.cn/position/video/puktGtHIOyxHiKkSqTLMRDING5_1655291957.mp4',
      guidePageBtnText: '准备好了，开始面试',
      customFinishImg: 'https://public-static-assets.oss-cn-beijing.aliyuncs.com/img/interview-complete.png'
    })
    wx.redirectTo({
      url: `plugin://videoInterview/index?mpParams=${options.mpParams}`
    })
  },
  registerEvents() {
    app.globalData.videoInterview.screenShootNum = 0
    wx.onUserCaptureScreen(function () {
      if (!app.globalData.videoInterview.CheatMonitorStatus) return
      // 面试过程中，截屏超过2次，记为作弊，面试停止
      app.globalData.videoInterview.screenShootNum++
      const type = app.globalData.videoInterview.screenShootNum > 2 ? 'CHEAT_STOP' : 'CHEAT_WARN'
      plugin.eventBus.emit('mini', { type })
    })
    plugin.eventBus.on('plugin', (data: PluginMsg) => {
      console.log('插件来消息了>>>>>>', data)
      // 监控状态赋值
      app.globalData.videoInterview.CheatMonitorStatus = data.CheatMonitorStatus
    })
  },
  /**
   * @description: 设置给插件传递的数据
   * @param {String} guidePageVideoUrl 引导视频
   * @param {String} guidePageBtnText 引导按钮文案
   * @param {String} customFinishImg 完成页自定义图片
   */
   setConfig(data = { guidePageVideoUrl: '', guidePageBtnText: '', customFinishImg: '' }) {
    plugin.setConfig(data);
  },
})

export {}
