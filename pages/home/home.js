
//引入本地json数据，这里引入的就是第一步定义的json数据
// var jsonData = require('../../data/home.js');
import { homeBanner, gridAll } from "../../data/home.js"

Page({
  data: {
   homeBanner: [],
   gridAll: []
  },
  
  onLoad() {
    this.setData({
      homeBanner,
      gridAll
    });
    console.log(gridAll)
  }
})
