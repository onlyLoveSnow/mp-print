// pages/print/print.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    array: ['A4', 'A3', '16开', '明信片'],
    index: 0,
    file: {
      name: '',
      path: ''
    },
    user: null

  },

  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(this.data.index)

    // wx.request({
    //   url: 'http://127.0.0.1:8080/addPrint',
    //   data: {
    //     "size": this.data.array[this.data.index],
    //     "printStyle": e.detail.value.option,
    //     "printColor": e.detail.value.bw,
    //     "notes": e.detail.value.input,
    //     "number": wx.getStorageSync('user').num,
    //   },
    //   success(res) {
    //     console.log(res.data)
    //     if (res.data.status == 'success') {
    //       console.log(res.data.msg)
    //       wx.switchTab({
    //         url: '/pages/main/main',
    //       })
    //       wx.showToast({
    //         title: res.data.msg,
    //         icon: 'none'
    //       })
    //     }
    //   }
    // })
    var file = this.data.file 
    console.log(file.path)
    wx.uploadFile({
      url: 'http://192.168.1.100:8080/addPrint',
      filePath: file.path,
      name: 'uploadFile',
      formData: {
        "size": this.data.array[this.data.index],
        "printStyle": e.detail.value.option,
        "printColor": e.detail.value.bw,
        "notes": e.detail.value.input,
        "number": wx.getStorageSync('user').num,
      },
      success(res) {
        console.log(res.data)
        var data = JSON.parse(res.data)
        if (data.status == 'success') {
          console.log(data.msg)

          wx.switchTab({
            url: '/pages/main/main',
          })
          
          wx.showToast({
            title: data.msg,
            icon: 'none'
          })
        }
      }
    })

  },

  getFile() {
    console.log('11')
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success: (res) => {
        var fileName = res.tempFiles[0].name;
        var filePath = res.tempFiles[0].path;
        this.setData({
          ['file.name']: fileName,
          ['file.path']: filePath
        })
      },
    })
    // console.log(res)

  },

  formReset: function() {
    console.log('form发生了reset事件')
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