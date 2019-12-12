// pages/usedsend/usedsend.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: [],
    checitems: [],
    coverimg: "../../images/used.jpg",
    goodsarr: [],
    goodsindex: 0,
    selectedid:[],
    identity: [
      { id: '0', value: '个人', checked: 'true' },
      { id: '1', value: '商家' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData();
  },

  fetchData: function () {
    this.setData({
      goodsarr: ["请选择", "移动互联网", "手机游戏", "互联网金融", "O2O", "智能硬件", "SNS社交", "旅游", "影视剧", "生活服务", "电子商务", "教育培训", "运动和健康", "休闲娱乐", "现代农业", "文化创意", "节能环保", "新能源", "生物医药", "IT软件", "硬件", "其他"]
    })
  },
  bindPickerChange: function (e) { //下拉选择
    const eindex = e.detail.value;
    const name = e.currentTarget.dataset.pickername;
    // this.setData(Object.assign({},this.data,{name:eindex}))
    switch (name) {
      case 'goods':
        this.setData({
          goodsindex: eindex
        })
        break;
      default:
        return
    }
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
    if(sendimg.length > 0){
      this.setData({
        coverimg: sendimg[0].path
      })
    }else{
      this.setData({
        coverimg: "../../images/used.jpg"
      })
    }
    this.setData({
      checitems: [
        {
          "id": 1,
          "text": "全新未用",
          "select": false
        },
        {
          "id": 2,
          "text": "验货面付",
          "select": false
        },
        {
          "id": 3,
          "text": "一口价",
          "select": false
        },
        {
          "id": 4,
          "text": "快递包邮",
          "select": false
        }
      ]
    })
  },
  onSelectTag: function (e) {
    const eid = e.currentTarget.dataset.id;
    var checitems = this.data.checitems;
    for(var i=0; i<checitems.length; i++){
      if (checitems[i].id == eid){
        checitems[i].select = !checitems[i].select
      }
    }
    this.setData({
      checitems: checitems
    })
    console.log(this.data.checitems);
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
  }
})