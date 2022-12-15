export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subpackages: [
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
})
