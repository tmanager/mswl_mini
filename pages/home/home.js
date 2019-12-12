// pages/used/used.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId: '1001',
    section: [
      { name: '保姆月嫂', id: '1001' }, { name: '搬家', id: '1002' },
      { name: '保洁清洗', id: '1003' }, { name: '家电维修', id: '1004' },
      { name: '管道疏通', id: '1005' }, { name: '房屋维修', id: '1006' },
      { name: '开锁/换锁', id: '1007' }, { name: '生活配送', id: '1008' },
      { name: '电脑维修', id: '1009' }
    ]

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

  },

  handleTap: function (e) {

    console.log(e);
    let id = e.currentTarget.id;

    if (id) {
      this.setData({ currentId: id })
      this.onLoad();
    }

  }
})