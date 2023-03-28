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
            mbutton: menuButtonInfo,
            minfo: info,
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
            widRemain: (info.windowWidth / 375) * 70,
            navInpWid: menuButtonInfo.left - 70,
            logo_block_width: menuButtonInfo.left - 10 - menuButtonInfo.left - 70
            // navStyle: this.data.navStyle,
            // imgOpacity: this.data.imgOpacity
          })
          // this.logo_block_width = this.windowWidth - this.navInpWid - 10;
        }
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    mscrollTop: String | Number
  },
  observers: {
    mscrollTop(mscrollTop) {
      if (!mscrollTop) {
        return;
      }
      let topHeight = mscrollTop;
      let navOp = 0;
      navOp = topHeight / this.data.totalHeight;
      let mobileTop = this.data.mbutton.left - (this.data.minfo.windowWidth / 375) * 70;

      const styles = `
      background: rgba(255, 255, 255, ${navOp});
      `;
      // this.navStyle = topHeight > 10 ? styles : '';

      this.setData({
        imgOpacity: navOp <= 1 ? 1 - navOp : 0,
        navStyle: topHeight > 10 ? styles : '',
        navOpacity: navOp,
        navInpWid: navOp > 0 ? mobileTop + this.data.widRemain * navOp : this.data.navRemain,
        logo_block_width: this.data.mbutton.left - 10 - this.data.mbutton.left - 70
      });
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    minfo: null,
    mbutton: null,
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