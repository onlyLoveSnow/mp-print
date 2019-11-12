// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: null,
    password: null,
  },
  // 点击登录按钮
  loginTap() {
    console.log("登录按钮")

    console.log(this.data.num)
    console.log(this.data.password)

    wx.request({
      url: 'http://192.168.1.100:8080/login',
      data: {
        "num": this.data.num,
        "password": this.data.password
      },
      success(res) {
        console.log(res.data)
        if (res.data == true) {
          wx.switchTab({
            url: '/pages/main/main',
          })
        }else{
          wx.showToast({
            title: '登录失败',
            icon: 'none'
          })
        }
      }
    })
  },

  // 学号输入框点击事件
  inputNum(res) {
    // 给data赋值
    this.setData({
      num: res.detail.value
    })
  },

  // 密码输入框点击事件
  inputPassword(res) {
    // 给data赋值
    this.setData({
      password: res.detail.value
    })
  },

  register() {
    console.log("注册")
    wx.navigateTo({
      url: '/pages/register/register',
    })
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