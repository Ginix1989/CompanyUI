// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    imgUrls:[
      //滚动图片
      "../../images/swap/1.png",
      "../../images/swap/2.png",
      "../../images/swap/3.png",
      "../../images/swap/4.png"
    ],
    imageUrl:
    [

        "../../images/imageUrl/1.png",
        "../../images/imageUrl/2.png",
        "../../images/imageUrl/3.png",
        "../../images/imageUrl/4.png"

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,

    // 动画内容
    animationData:{}

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
    var animation = wx.createAnimation({
        duration: 5000,
      timingFunction:"linear",
        delay: 0,
        transformOrigin: '"50% 50% 0"',
      })
    this.animation = animation

    //animation.scale(2, 2).rotate(360).step();
    animation.translateX(-500).step();
    this.setData({
      animationData: animation.export()
    });

  //   setInterval(function () {
  //   //   var i=i+1;
  //   //  // animation.translate(30).step()
  //   //   animation.scale(2, 2).rotate(360).step();
  //   //   this.setData({
  //   //     animationData: animation.export()
  //   //   })
  //  //console.log('sssssssssssss');
  //   }.bind(this), 1000);

    setInterval(function(){

      animation.translateX(-500).step();
      this.setData({
        animationData: animation.export()
      })
    },1000);
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

  }
})