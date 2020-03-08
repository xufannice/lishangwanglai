var app = getApp()
Page({
  data: {
    currentTab: 0,
    listdata: "",
    showIndex:0,
    a:0
  },
  tabSwitch(e){
    console.log(e)
    this.setData({
     
      showIndex: e.currentTarget.dataset.idx
    })
  },

  navTo(){
    console.log(111)
    wx.switchTab({
      url: '../four/four',
    })
  },
  onLoad: function () {
    wx.request({
      url: 'https://www.lajiflw.cn/rubbish/category', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=>{
        console.log(res.data.data)
        for(var i=0;i<res.data.data.length;i++){
            res.data.data[i].common=res.data.data[i].common.split("、")
        }
        this.setData({
          listdata: res.data.data
        })
      }
    })
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },

})