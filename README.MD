# AI视频面试小程序插件

AI视频面试插件是鳄梨科技提供的微信小程序端AI视频面试服务，致力于用AI解决大规模人力资源问题。

## 插件使用说明

### 添加插件

在使用插件前，首先要在小程序管理后台的“设置-第三方设置-插件管理”中添加插件。开发者可登录小程序管理后台，
通过 appid[wx4993ea1204d849d3] 查找插件并添加

### 引入插件

#### 主包中引入插件

```json
{
  ...
  "plugins": {
    "videoInterview": {
      "version": "1.2.1",
      "provider": "wx4993ea1204d849d3"
    }
  }
  ...
}
```

#### 分包中引入插件

主包尺寸超过2M时，使用

```json
{
  ...
  "subpackages": [
    {
      "root": "videoInterview",
      "name": "videoInterview",
      "pages": [
        "leadPage/leadPage"
      ],
      "plugins": {
        "videoInterview": {
          "version": "1.2.1",
          "provider": "wx4993ea1204d849d3",
          "export": "index.js"
        }
      }
    },
  ]
  ...
}
```

### 微信版本要求

基础库版本 >= 2.21.3

* 使用插件AI检测功能，需要基础库版本 >= 2.21.3

### 插件详细文档

[方便面开发平台-AI视频面试小程序插件](https://avocadotechopen.github.io/developers/docs/AI视频面试/mp-plugin)

### FAQ

#### 体验版二维码

![方便面AI视频体验版](https://webcdn.fbmms.cn/assets/ngfw/fQfv5hdRPgGpAszagSiNP)
