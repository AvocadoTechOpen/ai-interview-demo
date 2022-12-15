import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { requirePlugin } from "@tarojs/taro"

const plugin = requirePlugin('videoInterview')

export default class LeadPage extends Component {

  onLoad (options) {
    console.log(options)
    const { mpParams } = options

    plugin.setConfig({
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
    this.registerEvents()
    Taro.navigateTo({
      url: `plugin://videoInterview/index?mpParams=${mpParams}`
    })
  }

  registerEvents() {
    plugin.eventBus.on('plugin', (data) => {
      console.log('插件来消息了>>>>>>', data)
    })
  }

  render () {
    return (
      <View className='index'>
        {/* <Text>中间页</Text> */}
      </View>
    )
  }
}

