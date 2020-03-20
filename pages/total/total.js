// pages/total/total.js
var config = require('../../utils/config.js');
var util = require('../../utils/util.js');

var bannerList = ['../../images/ad.png', '../../images/gg2.png', '../../images/gg3.png', '../../images/gg1.png'];;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 800,
    banner_url: bannerList,
    infoList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bannerListGet();
    this.indexInfoListGet();
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

  more: function(){
    wx.showModal({
      title: '提示',
      content: '更多服务，敬请期待！',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  /**
   * 获取广告图片
   */
  bannerListGet: function (){
    var that = this;
    var data = { adname: "" };
    wx.request({
      url: config.serverAddress + "index/advert/query",
      header: {
        'content-type': 'application/json'
      },
      data: util.sendMessageEdit(null, data),
      method: 'post',
      success: function (res) {
        if (res.statusCode == 200) {
          console.info("获取广告图片信息：");
          console.log(res.data) //获取openid
          if (res.data.retcode === config.SUCCESS) {
            var response = res.data.response;
            that.setData({
              banner_url: response.adlist
            })
          }
        }
      }
    })
  },
  /**
   * 获取首页产品数据
   */
  indexInfoListGet: function () {
    var that = this;
    var data = { adname: "" };
    wx.request({
      url: config.serverAddress + "index/info/query",
      header: {
        'content-type': 'application/json'
      },
      data: util.sendMessageEdit(null, data),
      method: 'post',
      success: function (res) {
        if (res.statusCode == 200) {
          console.info("获取首页产品数据：");
          console.log(res.data) //获取openid
          if (res.data.retcode === config.SUCCESS) {
            var response = res.data.response;
            that.setData({
              infoList: response.info
            })
          }
        }
      }
    })
  }
})
