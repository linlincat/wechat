//引入本地json数据，这里引入的就是第一步定义的json数据
// var jsonData = require('../../data/home.js');
import {
  homeBanner,
  gridAll
} from "../../data/home.js"

Page({
  data: {
    homeBanner: [],
    gridAll: [],
    scrollTop: 0,
    placeHeight: 64
  },

  onShareAppMessage: function (res) {
    // if (res.from === 'button') {
    //   console.log(res.target)
    // }
    return {
      title: '自定义转发标题',  // 自定义动态标题
      path: '/pages/home/home',  // 自定义动态路径
      imageUrl: '../image/h01.jpg' // 自定义动态路径
    }
  },

  // onShow() {
  //   wx.showShareMenu({
  //     withShareTicket: true,
  //     menus: ['shareAppMessage', 'shareTimeline']
  //   })
  // },

  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },

  onLoad() {
    this.setData({
      homeBanner,
      gridAll
    });
  },
  onGetPlaceHeight(event) {
    this.setData({
      placeHeight: event.detail.statusBarHeight
    })
  }
})