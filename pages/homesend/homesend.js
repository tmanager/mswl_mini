// pages/homesend/homesend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverimg: "../../images/rent.jpg",
    typeArr: ["冰箱", "洗衣机", "电视", "热水器", "空调", "厨房家电", "影音家电", "小家电"],
    typeIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      brand: options.brand
    })
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
    var sendimg = wx.getStorageSync("sendimg") || [];
    if (sendimg.length > 0) {
      this.setData({
        coverimg: sendimg[0].path
      })
    } else {
      this.setData({
        coverimg: "../../images/rent.jpg"
      })
    }
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

  },
  imageUpload: function () {
    wx.navigateTo({
      url: '../imgupload/imgupload'
    })
  },
  bindPickerChange: function (e) { //下拉选择
    const eindex = e.detail.value;
    const name = e.currentTarget.dataset.pickername;
    // this.setData(Object.assign({},this.data,{name:eindex}))
    switch (name) {
      case 'type':
        this.setData({
          typeIndex: eindex
        })
        break;
      default:
        return
    }
  },
})