// pages/usedsend/usedsend.js
var config = require('../../utils/config.js');
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //本页的图片
    hasImage: 0,
    imageArr: [],
    //图片选择页面设定的值
    infoImage:[],
    newIndex: 0,
    identity: [
      { id: '0', value: '个人', checked: 'true' },
      { id: '1', value: '商家' },
    ],
    newArr: ["全新", "非全新"],
    //标签暂时没有用到
    checitems: [],
    title: "",
    price: "",
    oprice: "",
    phone: "",
    contacts: "0",
    address: "",
    detail: "",
    thumbnail: "",
    imgArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData();
    this.setData({
      type: options.type,
      subtype: options.subtype
    })
  },

  fetchData: function () {
    
  },
  /**
   * 选择是否全新
   */
  bindPickerChange: function (e) { //下拉选择
    const eindex = e.detail.value;
    const name = e.currentTarget.dataset.pickername;
    switch (name) {
      case 'new':
        this.setData({
          newIndex: eindex
        })
        break;
      default:
        return
    }
  },
  /**
   * 选择经纪人
   */
  radioChange: function(e){
    this.setData({
      contacts: e.detail.value
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
    var imageArr = [];
    for (var i = 0; i < this.data.infoImage.length; i++) {
      imageArr.push(this.data.infoImage[i].path);
    }
    if (imageArr.length > 0){
      this.setData({
        hasImage: true,
        imageArr: imageArr
      })
    }else{
      this.setData({
        hasImage: false,
        imageArr: ["../../images/used.jpg"]
      })
    }
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
  },
  /**
   * 获取输入的内容
   */
  getInputValue(e) {
    console.log(e)// {value: "ff", cursor: 2}  
    switch (e.target.id) {
      case "title":
        this.setData({
          title: e.detail.value
        });
        break;
      case "price":
        this.setData({
          price: e.detail.value
        });
        break;
      case "oprice":
        this.setData({
          oprice: e.detail.value
        });
        break;
      case "phone":
        this.setData({
          phone: e.detail.value
        });
        break;
      case "address":
        this.setData({
          address: e.detail.value
        });
        break;
      case "detail":
        this.setData({
          detail: e.detail.value
        });
        break;
    }
  },
  /**
   * 输入内容校验
   */
  dataCheck: function(){
    var that = this;
    if (!that.data.hasImage) {
      wx.showToast({
        title: '图片必须上传！',
        icon: 'none'
      })
      return false;
    }
    if (that.data.title.length < 8) {
      wx.showToast({
        title: '标题不能少于8个字！',
        icon: 'none'
      })
      return false;
    }
    if (that.data.price == "" || isNaN(that.data.price)) {
      wx.showToast({
        title: '价格必须为数字！',
        icon: 'none'
      })
      return false;
    }
    if (that.data.oprice == "" || isNaN(that.data.oprice)) {
      wx.showToast({
        title: '购入价格必须为数字！',
        icon: 'none'
      })
      return false;
    }
    if (!util.phoneCheck(that.data.phone)) {
      wx.showToast({
        title: '联系人手机号不正确！',
        icon: 'none'
      })
      return false;
    }
    if (that.data.address.length < 6) {
      wx.showToast({
        title: '地址不能少于6个字！',
        icon: 'none'
      })
      return false;
    }
    if (that.data.detail.length < 10) {
      wx.showToast({
        title: '描述不能少于10个字！',
        icon: 'none'
      })
      return false;
    }
    return true
  },
  /**
   * 发布按钮
   */
  applySubmit: function(){
    //获取各个字段的值，并检查
    if(!this.dataCheck()) return;
    //上传图片
    var that = this;
    wx.showLoading({
      title: '正在上传文件',
    })
    var openid = wx.getStorageSync("openid");
    var url = config.serverAddress + '/publish/upload'; // 请求服务端文件
    var data = {
      type: that.data.type,
      subtype: that.data.subtype,
      title: that.data.title,
      price: that.data.price,
      oprice: that.data.oprice,
      newIndex: that.data.newIndex,
      phone: that.data.phone,
      contacts: that.data.contacts,
      address: that.data.address,
      detail: that.data.detail,
      thumbnail:"",
      imgArr:[]
    }
    var result = { success: [], fail: [] };
    firstData = { first: 0 };
    var imgArr = that.data.imageArr;
    imgArr.pop();
    var presult = util.uploadFils(url, imgArr, firstData);
    presult.then(result => {
      if (result.fail.length == 0) {
        //上传其他信息
        for (var i = 0; i < result.success.length; i++) {
          data.imgArr.push(result.success[i].res.data.response.image);
        }
        wx.request({
          url: config.serverAddress + "publish/info",
          header: {
            'content-type': 'application/json'
          },
          data: util.sendMessageEdit(null, data),
          method: 'post',
          success: function (res) {
            if (res.statusCode == 200) {
              console.info("发布信息：");
              console.log(res.data) //获取openid
              if (res.data.retcode === config.SUCCESS) {
                //成功之后跳转到那里去呢？
                wx.navigateTo({ url: "../sendlist/sendlist" });
              }
            }
          },
          fail: function (res) {
            //上传信息失败
            wx.hideLoading();
            wx.showToast({
              title: "发布信息失败！",
              icon: 'none'
            })
          }
        })

      } else {
        //上传图片失败
        wx.hideLoading();
        wx.showToast({
          title: "上传图片失败！",
          icon: 'none'
        })
      }
    }).catch(err => {
      
    })
    

    /*//上传首图
    var firstData = {first: 1};
    var result = { success: [], fail: [] };
    var presult = util.upload(url, that.data.imageArr[0], firstData);
    presult.then(res =>{
      //上传其他图
      data.thumbnail = result.success.res.data.response.thumbnail;
      data.imgArr.push(result.success.res.data.response.image);
      if (that.data.imageArr > 1) {
        firstData = { first: 0 };
        var imgArrLeft = that.data.imageArr.pop();
        result = util.uploadFils(url, imgArrLeft, firstData);
      }
      if (result.fail.length == 0) {
        //上传其他信息
        for (var i = 0; i < result.success.length; i++) {
          data.imgArr.push(result.success[i].res.data.response.image);
        }
        wx.request({
          url: config.serverAddress + "publish/info",
          header: {
            'content-type': 'application/json'
          },
          data: util.sendMessageEdit(null, data),
          method: 'post',
          success: function (res) {
            if (res.statusCode == 200) {
              console.info("发布信息：");
              console.log(res.data) //获取openid
              if (res.data.retcode === config.SUCCESS) {
                //成功之后跳转到那里去呢？
                wx.navigateTo({ url: "../sendlist/sendlist" });
              }
            }
          },
          fail: function (res) {
            //上传信息失败
            wx.hideLoading();
            wx.showToast({
              title: "发布信息失败！",
              icon: 'none'
            })
          }
        })

      } else {
        //上传图片失败
        wx.hideLoading();
        wx.showToast({
          title: "上传图片失败！",
          icon: 'none'
        })
      }
    }).catch(err => {
      //上传失败
      wx.hideLoading();
      wx.showToast({
        title: "上传图片失败！",
        icon: 'none'
      })
      return;
      
    });*/

  }
  
})