var app = getApp()
Page({
  data: {
    navLeftItems: [
      { id: "0", desc: "二手物品", url:"../usedsend/usedsend" },
      { id: "1", desc: "房屋出租", url: "../rentsend/rentsend" },
      { id: "2", desc: "家政保洁", url: "../homesend/homesend" }
    ],
    navRightItems: [
      [
        { desc: '家具', id: '1001', logo: 'http://temp.im/50x30' }, { desc: '家电', id: '1002', logo: 'http://temp.im/50x30' },
        { desc: '机械/设备', id: '1003', logo: 'http://temp.im/50x30' }, { desc: '手机', id: '1004', logo: 'http://temp.im/50x30' },
        { desc: '台式机/配件', id: '1005', logo: 'http://temp.im/50x30' }, { desc: '代步工具', id: 'http://temp.im/50x30' },
        { desc: '摩托车', id: '1007', logo: 'http://temp.im/50x30' }, { desc: '笔记本电脑', id: '1008', logo: 'http://temp.im/50x30' },
        { desc: '文体/户外/乐器', id: '1009', logo: 'http://temp.im/50x30' }
      ],
      [
        { desc: '整租', id: '1001', logo: 'http://temp.im/50x30' },
        { desc: '合租', id: '1002', logo: 'http://temp.im/50x30' }, { desc: '短租/日租', id: '1003', logo: 'http://temp.im/50x30' }
      ],
      [
        { desc: '保姆月嫂', id: '1001', logo: 'http://temp.im/50x30' }, { desc: '搬家', id: '1002', logo: 'http://temp.im/50x30' },
        { desc: '保洁清洗', id: '1003', logo: 'http://temp.im/50x30' }, { desc: '家电维修', id: '1004', logo: 'http://temp.im/50x30' },
        { desc: '管道疏通', id: '1005', logo: 'http://temp.im/50x30' }, { desc: '房屋维修', id: '1006', logo: 'http://temp.im/50x30' },
        { desc: '开锁/换锁', id: '1007', logo: 'http://temp.im/50x30' }, { desc: '生活配送', id: '1008', logo: 'http://temp.im/50x30' },
        { desc: '电脑维修', id: '1009', logo: 'http://temp.im/50x30' }
      ]
    ],
    curNav: 0,
    curIndex: 0
  },
  onLoad: function () {
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
  }

})