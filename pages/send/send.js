var app = getApp();
var config = require('../../utils/config.js');
var util = require('../../utils/util.js');
Page({
  data: {
    navLeftItems: [
      { id: "0", desc: "二手物品", url:"../usedsend/usedsend" },
      { id: "1", desc: "房屋出租", url: "../rentsend/rentsend" },
      { id: "2", desc: "家政保洁", url: "../homesend/homesend" }
    ],
    subTypeList: [
      [
        { typename: '家具', id: '1001', logo: 'http://temp.im/50x30' }, { typename: '家电', id: '1002', logo: 'http://temp.im/50x30' },
        { typename: '机械/设备', id: '1003', logo: 'http://temp.im/50x30' }, { typename: '手机', id: '1004', logo: 'http://temp.im/50x30' },
        { typename: '台式机/配件', id: '1005', logo: 'http://temp.im/50x30' }, { typename: '代步工具', id: 'http://temp.im/50x30' },
        { typename: '摩托车', id: '1007', logo: 'http://temp.im/50x30' }, { typename: '笔记本电脑', id: '1008', logo: 'http://temp.im/50x30' },
        { typename: '文体/户外/乐器', id: '1009', logo: 'http://temp.im/50x30' }
      ],
      [
        { typename: '整租', id: '1001', logo: 'http://temp.im/50x30' },
        { typename: '合租', id: '1002', logo: 'http://temp.im/50x30' },
        { typename: '短租/日租', id: '1003', logo: 'http://temp.im/50x30' }
      ],
      [
        { typename: '保姆月嫂', id: '1001', logo: 'http://temp.im/50x30' }, { typename: '搬家', id: '1002', logo: 'http://temp.im/50x30' },
        { typename: '保洁清洗', id: '1003', logo: 'http://temp.im/50x30' }, { typename: '家电维修', id: '1004', logo: 'http://temp.im/50x30' },
        { typename: '管道疏通', id: '1005', logo: 'http://temp.im/50x30' }, { typename: '房屋维修', id: '1006', logo: 'http://temp.im/50x30' },
        { typename: '开锁/换锁', id: '1007', logo: 'http://temp.im/50x30' }, { typename: '生活配送', id: '1008', logo: 'http://temp.im/50x30' },
        { typename: '电脑维修', id: '1009', logo: 'http://temp.im/50x30' }
      ]
    ],
    curNav: 0,
    curIndex: 0
  },
  onLoad: function () {
    this.busiSubTypeListGet();
  },
  onShow: function () {
    try {
      wx.removeStorageSync('sendimg')
    } catch (e) {
      // Do something when catch error
    }
    this.setData({
      curNav: 0,
      curIndex: 0
    })
  },
  //事件处理函数
  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  /**
   * 获取发布小分类
   */
  busiSubTypeListGet: function () {
    var that = this;
    var data = {};
    wx.request({
      url: config.serverAddress + "publish/type/query",
      header: {
        'content-type': 'application/json'
      },
      data: util.sendMessageEdit(null, data),
      method: 'post',
      success: function (res) {
        if (res.statusCode == 200) {
          console.info("获取发布小分类：");
          console.log(res.data) //获取openid
          if (res.data.retcode === config.SUCCESS) {
            var typelist = res.data.response.typelist;
            var subTypeList = new Array(3);
            for (var i = 0; i < typelist.length; i++){
              subTypeList[typelist[i].id] = typelist[i].subTypeList;
            }
            that.setData({
              subTypeList: subTypeList
            })
          }
        }
      }
    })
  }

})