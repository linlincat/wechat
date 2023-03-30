Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,
    stickyProps: {
      zIndex: 2,
    },
    tabPanelstyle: 'display:flex; padding: 20rpx; min-height: 100vh',
    currentIndex: 0,
    scrollArray: [{
        scrollTop: 0
      },
      {
        scrollTop: 0
      },
      {
        scrollTop: 0
      },
      {
        scrollTop: 0
      },
      {
        scrollTop: 0
      },
      {
        scrollTop: 0
      },
      {
        scrollTop: 0
      },
    ]
  },

  setCurrentIndex(index) {

    this.data.currentIndex = index;
    // if(this.data.currentIndex == index) {
    //   return;
    // }
    console.log(this.data.scrollArray, "this.data.scrollArray")
    const top = this.data.scrollArray[index].scrollTop;
    this.data.flag = true;
    console.log(this.data.flag, "改变的时候")
    console.log(top, "this is top")
    wx.pageScrollTo({
      scrollTop: top,
      duration: 0
    })
    setTimeout(() => {
      this.data.flag = false;
    }, 300)
  },

  onTabsChange(event) {
    this.setCurrentIndex(event.detail.value);
  },

  // onTabsClick(event) {
  //   this.data.flag = true;
  //   // console.log(event.detail.value, "click")
  //   this.setCurrentIndex(event.detail.value);
  // },

  onStickyScroll(event) {
    if (event.detail.scrollTop) {
      console.log(this.data.flag, "this.data.flag")
      if (this.data.flag) {
        return;
      }
    console.log(this.data.scrollArray,'this.data.scrollArray  scrollllll')
      this.data.scrollArray[this.data.currentIndex].scrollTop = event.detail.scrollTop.toFixed(2);
    }
  }
})