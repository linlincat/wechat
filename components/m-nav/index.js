// components/m-nav/index.js
Component({
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      let info; // 系统信息
      let menuButtonInfo; // 菜单按钮信息
      wx.getSystemInfo({
        success: (res) => {
          // console.log(res, "this is res data")
          info = res;
          menuButtonInfo = wx.getMenuButtonBoundingClientRect();
          this.setData({
            totalHeight: info.statusBarHeight + menuButtonInfo.bottom -
              info.statusBarHeight +
              (menuButtonInfo.top - info.statusBarHeight) +
              4,
            statusBarHeight: info.statusBarHeight,
            navBarHeight: menuButtonInfo.bottom -
              info.statusBarHeight +
              (menuButtonInfo.top - info.statusBarHeight) +
              4,
            windowWidth: menuButtonInfo.left,
            // navStyle: this.data.navStyle,
            // imgOpacity: this.data.imgOpacity
          })
          this.logo_block_width = this.windowWidth - this.navInpWid - 10;
        }
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    totalHeight: '', // 总高度
    statusBarHeight: '', // 状态栏高度
    navBarHeight: 45, // 导航栏高度
    windowWidth: 375,
    navStyle: '',
    navOpacity: 0,
    navInpWid: '',
    navRemain: '',
    widRemain: '',
    scrollTop: 0,
    imgOpacity: 1,
    logo_block_width: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    nav() {
      console.log("进入nav方法")
      // let info = uni.getSystemInfoSync();
      // console.log(info);
      // let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
      // console.log(menuButtonInfo);
    }
  }
})