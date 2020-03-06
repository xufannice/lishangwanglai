// pages/four/four.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal:'',
    listArr:[]
  },
  fonts(e){
    // console.log(e.detail.value)
    this.setData({
      inpVal:e.detail.value
    })
    // console.log(this.data.inpVal)
  },
  enters(){
    let that =this
    console.log(that.data.inpVal)
    wx.request({
      url: 'https://www.lajiflw.cn/rubbish/search?q=' +that.data.inpVal,
      success: (res) => {
        console.log(res.data.data)
        that.setData({
          listArr: res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})