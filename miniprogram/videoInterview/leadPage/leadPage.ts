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
    this.registerEvents()
    // 动态设置
    this.setConfig({
      AppConfig: {
        ApiBaseUrl: 'https://fbm-api-demo2.fbmms.cn', // TODO 测试环境打开；生产环境关闭
        watermark: 1, // 是否开启水印
        watermarkText: '123456789', // 水印内容，建议数字
      },
      InterviewConfig: {
        guidePageVideoUrl: 'https://test-alicdn.fbmms.cn/position/video/puktGtHIOyxHiKkSqTLMRDING5_1655291957.mp4',
        guidePageBtnText: '开始面试',
        customFinishImg: 'https://public-static-assets.oss-cn-beijing.aliyuncs.com/img/interview-complete.png',
      },
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
   * @param {object} AppConfig 系统配置
   * @param {object} InterviewConfig 面试配置
   */
   setConfig(data = { AppConfig: {}, InterviewConfig: {} }) {
    plugin.setConfig(data)
  },
})

export {}
