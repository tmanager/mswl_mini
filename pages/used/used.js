// pages/used/used.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId: '1001',
    section: [
      { name: '家具', id: '1001' }, { name: '家电', id: '1002' },
      { name: '机械/设备', id: '1003' }, { name: '手机', id: '1004' },
      { name: '台式机/配件', id: '1005' }, { name: '代步工具', id: '1006' },
      { name: '摩托车', id: '1007' }, { name: '笔记本电脑', id: '1008' },
      { name: '文体/户外/乐器', id: '1009' }
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