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
    // console.log(gridAll)
  },
  onGetPlaceHeight(event) {
    this.setData({
      placeHeight: event.detail.statusBarHeight
    })
  }
})