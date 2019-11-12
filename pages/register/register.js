// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: null,
    name: null,
    phone: null,
    password: null,
    rePassword: null
  },

  registerNum(res) {
    this.setData({
      num: res.detail.value
    })
  },

  registerName(res) {
    this.setData({
      name: res.detail.value
    })
  },

  registerPhone(res) {
    this.setData({
      phone: res.detail.value
    })
  },

  registerPassword(res) {
    this.setData({
      password: res.detail.value
    })
  },

  registerRePassword(res) {
    this.setData({
      rePassword: res.detail.value
    })
  },

  register() {
    console.log("注册界面button")
    if (this.data.password == this.data.rePassword) {
      wx.request({
        url: 'http://192.168.1.100:8080/register',
        data: {
          "num": this.data.num,
          "name": this.data.name,
          "phone": this.data.phone,
          "password": this.data.password,
        },
        success(res) {
          console.log(res)
          if (res.data.status == 'success')
          {
            wx.navigateBack({
              url: '/pages/login/login',
            })
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            })
          }
          else if (res.data.status == 'failed'){
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '两次密码不一致',
        icon: 'none'
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})