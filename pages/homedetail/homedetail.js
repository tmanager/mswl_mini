// pages/useddetail/useddetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,//是否显示面板指示点
    autoplay: true,  //是否自动切换
    interval: 5000, //自动切换时间
    duration: 1000,  //滑动时间
    buyCount: 0,
    goods: {
      thumb: ["../../images/home.jpg"],
      title: "家庭保洁 开荒保洁",
      price: 400,
      description: "承接开荒保洁，家庭保洁，工程保洁。保洁项目包括：1.小区楼宇，厂房，停车场等建筑竣工后工程开荒保洁，别墅，写字楼，办公楼，教学楼，公寓，酒店，商场，商务会所，公司装潢后的全方位的开荒保洁。2.专项玻璃清洗。3.家庭日常保洁"
    },
    menu: [{ 'title': '普通列表' }, { 'title': '图文列表' }, { 'title': '右侧有箭头列表' }, { 'title': '右侧无箭头列表' }]
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
  buyCount: function (e) {
    var id = e.currentTarget.id;
    var count = this.data.buyCount;
    if (id == "add") {
      count = (count > 0) ? count + 1 : 1
    } else {
      count = (count > 0) ? count - 1 : 0
    }
    this.setData({ buyCount: count });

    this.buyNow('');
  },
  buyNow: function (e) {

    var count = this.data.buyCount;
    count = (count > 0) ? count : 1;
    var goods = this.data.goods;
    //取出购物车商品
    goods = { id: goods.id, name: goods.title, img: goods.thumb, price: goods.price, buycount: count };
    try {
      var allGoods = wx.getStorageSync('shoppingcar')
      if (allGoods == "") {
        allGoods = []
      }
      //检查购物车是否有此商品
      var hasCount = 0;
      for (var i = 0; i < allGoods.length; i++) {
        var temp = allGoods[i];
        if (temp.id == goods.id) {
          hasCount = temp.buycount;
          allGoods.splice(i, 1);
          break;
        }
      }
      goods.buycount = goods.buycount + hasCount;
      allGoods.push(goods);
      wx.setStorageSync('shoppingcar', allGoods);
    } catch (m) {
      console.log('立即购买失败!');
    }
    if (e != '') {
      var currentPagess = getCurrentPages();
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
        success: function (res) {
          // success
          wx.navigateTo({ url: '/pages/shoppingcar/index' })
        }
      })
    }
  }
})