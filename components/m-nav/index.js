// components/m-nav/index.js
Component({
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      let info; // 系统信息
      let menuButtonInfo; // 菜单按钮信息
      wx.getSystemInfo({
        success: (res) => {
          info = res;
          menuButtonInfo = wx.getMenuButtonBoundingClientRect();
          console.log(info, "this is info");
          console.log(menuButtonInfo, "this is menuButtonInfo");
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
            widRemain: (info.windowWidth / 375) * menuButtonInfo.width+3,
            navInpWid: menuButtonInfo.left - menuButtonInfo.width+3,
            navRemain: info.windowWidth - (info.windowWidth / 375) * menuButtonInfo.width+3
          })
          // 触发父级监听事件
          this.triggerEvent('getPlaceHeight', {
            statusBarHeight: this.data.totalHeight
          });
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
      let imgO = navOp <= 1 ? 1 - navOp : 0;
      let mobileTop = this.data.navRemain;

      const styles = `
      background: rgba(255, 255, 255, ${navOp});
      `;
      this.setData({
        imgOpacity: imgO,
        navStyle: topHeight > 10 ? styles : '',
        navOpacity: navOp,
        navInpWid: navOp > 0 ? mobileTop + this.data.widRemain * navOp : this.data.navRemain,
        navRemain: this.data.windowWidth - this.data.widRemain
      });
      if (topHeight < 20) {
        this.setData({
          navInpWid: this.data.navRemain
        })
      }
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
    // logo_block_width: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    nav() {
      // let info = uni.getSystemInfoSync();
      // console.log(info);
      // let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
      // console.log(menuButtonInfo);
    }
  }
})