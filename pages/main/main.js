// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    file: {
      name: 'null',
      path: 'null'
    }
  },

  print() {
    wx.redirectTo({
      url: '/pages/print/print',
    })
  },

  upload() {
    var that = this;
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        var fileName = res.tempFiles[0].name;
        var filePath = res.tempFiles[0].path;
        that.setData({
          ['file.name']: fileName,
          ['file.path']: filePath
        })
        console.log(res);
      }
    })
    wx.uploadFile({
      url: 'http://192.168.1.100:8080/uploadFile',
      filePath: that.data.file.path,
      name: 'uploadFile',
      success(res) {
        var data = res.data
        console.log(data)
        if (data.status == 'success') {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
    })
  },

  printQueue(){
    wx.navigateTo({
      url: '/pages/printList/printList',
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