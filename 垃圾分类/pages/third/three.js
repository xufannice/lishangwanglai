// pages/three/three.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhuantiList: [
      {
        uid: 1,
        title: '小龙虾',
        img: '../../img/images/zhuanti/longxia.png',
      },
      {
        uid: 2,
        title: '粽子',
        img: '../../img/images/zhuanti/zongzi.png',
      },
      {
        uid: 3,
        title: '奶茶',
        img: '../../img/images/zhuanti/naicha.png',
      },
      {
        uid: 4,
        title: '电池',
        img: '../../img/images/zhuanti/dianchi.png',
      },
      {
        uid: 5,
        title: '外卖',
        img: '../../img/images/zhuanti/waimai.png',
      },
      {
        uid: 6,
        title: '化妆品',
        img: '../../img/images/zhuanti/kouhong.png',
      }
    ]
  },
  navTo: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../one/one?uid=' + e.target.dataset.uid + '&title=' + e.target.dataset.title,
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