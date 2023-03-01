import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from "@tarojs/taro"
import './index.scss'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      tokenList: [
        'TNLBoS3EhygKPS6hBOQeRQTMMK',
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  enterPlugin(interviewToken: string) {
    const params = {
      interviewToken
    }
    Taro.redirectTo({
      url: `/videoInterview/leadPage/leadPage?mpParams=${encodeURIComponent(JSON.stringify(params))}`,
    })
  }

  render () {
    const { tokenList } = this.state
    return (
      <View className='index'>
        <Text>token list!</Text>
        {
          tokenList.map(ele => <Button className='btn' key={ele} onClick={() => this.enterPlugin(ele)}>{ele}</Button>)
        }
      </View>
    )
  }
}
