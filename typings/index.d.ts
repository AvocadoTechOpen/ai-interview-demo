/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    videoInterview: VideoInterview
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}