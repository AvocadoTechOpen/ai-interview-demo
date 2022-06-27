interface VideoInterview {
  CheatMonitorStatus: boolean // 是否通知作弊
  screenShootNum: number // 记录用户截屏数量
}

interface PluginMsg {
  TraceId: string // 组成：appId_interviewToken_uuid，目的：面试过程跟踪
  event: string // 事件名称
  logId: string // 日志id
  page?: string // 用户当前所处页面
  timestamp: number // log time
  CheatMonitorStatus: boolean // 默认 true: 开启监控 false: 关闭监控
}

interface PluginConfig {
  path: string // 插件返回的页面路径
  interviewToken?: string // 面试系统内获取
  customFinishImg?: string // 面试完成页图片地址
  guidePageBtnText?: string // 引导页按钮文案
  guidePageVideoUrl?: string // 引导页引导视频地址
}