// pages/rentsend/rentsend.js
var dateTimePicker = require('../../utils/dateTimePicker.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverimg: "../../images/rent.jpg",
    identity: [
      { id: '0', value: '个人房东', checked: 'true' },
      { id: '1', value: '经纪人' },
    ],
    date:"2017-10-1",
    startYear: 2019,
    endYear: 2020,
    decorations:[
      { id: 0, text: "毛坯", select: 0 },
      { id: 1, text: "简单装修", select: 0 },
      { id: 2, text: "精装修", select: 0 },
      { id: 3, text: "豪华装修", select: 0 },
    ],
    equipments: [
      { id: 0, text: "冰箱", select: 0 },
      { id: 1, text: "电视", select: 0 },
      { id: 2, text: "洗衣机", select: 0 },
      { id: 3, text: "热水器", select: 0 },
      { id: 4, text: "空调", select: 0 },
      { id: 5, text: "宽带", select: 0 },
      { id: 6, text: "沙发", select: 0 },
      { id: 7, text: "床", select: 0 },
      { id: 8, text: "暖气", select: 0 },
      { id: 9, text: "衣柜", select: 0 },
      { id: 10, text: "独立卫生间", select: 0 },
      { id: 11, text: "独立阳台", select: 0 },
      { id: 12, text: "微波炉", select: 0 },
      { id: 13, text: "油烟机", select: 0 },
      { id: 14, text: "燃气灶", select: 0 },
      { id: 15, text: "桌椅", select: 0 },
    ],
    requires: [
      { id: 0, text: "作息正常", select: 0 },
      { id: 1, text: "租户稳定", select: 0 },
      { id: 2, text: "禁养宠物", select: 0 },
      { id: 3, text: "只限女生", select: 0 },
    ],
    houseArr: [
      ["1室", "2室", "3室", "4室", "5室", "6室", "7室", "8室", "9室"], 
      ["0厅", "1厅", "2厅", "3厅", "4厅", "5厅", "6厅", "7厅", "8厅", "9厅"],
      ["0卫", "1卫", "2卫", "3卫", "4卫", "5卫", "6卫", "7卫", "8卫", "9卫"],
    ],
    houseIndex: [0, 0, 0],
    orientationArr: ["东", "西", "南", "北", "东南", "东北", "西南", "西北"],
    orientationIndex:0,
    parkArr: ["无", "有"],
    parkIndex: 0,
    elevatorArr: ["无", "有"],
    elevatorIndex: 0,
    bedroomArr:["主卧", "次卧", "其他"],
    beadroomIndex:[0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      brand: options.brand
    })
    var obj = dateTimePicker.datePicker(this.data.startYear, this.data.endYear);
    this.setData({
      date: obj.date,
      dateArray: obj.dateArray,
    });
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
  changeDate(e) {
    this.setData({ date: e.detail.value });
  },
  onDecorationSelectTag: function (e) {
    const eid = e.currentTarget.dataset.id;
    var decorations = this.data.decorations;
    for (var i = 0; i < decorations.length; i++) {
      if (decorations[i].id == eid) {
        decorations[i].select = !decorations[i].select
      }else{
        decorations[i].select = false;
      }
    }
    this.setData({
      decorations: decorations
    })
    console.log(this.data.decorations);
  },
  onEquipmentSelectTag: function (e) {
    const eid = e.currentTarget.dataset.id;
    var equipments = this.data.equipments;
    for (var i = 0; i < equipments.length; i++) {
      if (equipments[i].id == eid) {
        equipments[i].select = !equipments[i].select
      }
    }
    this.setData({
      equipments: equipments
    })
    console.log(this.data.equipments);
  },
  onRequireSelectTag: function (e) {
    const eid = e.currentTarget.dataset.id;
    var requires = this.data.requires;
    for (var i = 0; i < requires.length; i++) {
      if (requires[i].id == eid) {
        requires[i].select = !requires[i].select
      }
    }
    this.setData({
      requires: requires
    })
    console.log(this.data.requires);
  },

  bindHousePickerChange: function(e){
    this.setData({ houseIndex: e.detail.value })
  },

  bindPickerChange: function (e) { //下拉选择
    const eindex = e.detail.value;
    const name = e.currentTarget.dataset.pickername;
    // this.setData(Object.assign({},this.data,{name:eindex}))
    switch (name) {
      case 'orientation':
        this.setData({
          orientationIndex: eindex
        })
        break;
      case 'park':
        this.setData({
          parkIndex: eindex
        })
        break;
      case 'elevator':
        this.setData({
          elevatorIndex: eindex
        })
        break;
      case 'bedroom':
        this.setData({
          beadroomIndex: eindex
        })
        break;
      default:
        return
    }
  },
})