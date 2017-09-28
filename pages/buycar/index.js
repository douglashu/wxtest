const App = getApp()

Page({
data: {
     grids:[],
     swipers: [],
     currentIndex2:0
},
showModal(message) {
   App.WxService.showModal({
    
    	content: message,
    	showCancel: !1,
   });
},
onLoad(option) {
	if (option){
      this.setData({
         globalOption: option
      })
    }
},
onShow(){
     this.getGrids();
     this.getSwipers();
},

navigateTo1(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
},
navigateTo2(e) {
  dataresult=this.query(e.currentTarget.dataset.a)
  wx.navigateTo({
    url: e.currentTarget.dataset.url + "?data="+dataresult,
  })
},
getGrids(){
	  //调用数据
	  var datas=[
      { thumb_url: '/assets/image/linwei.jpg', backgroundColor: '', color: '', url: '/pages/empty/index', title:'日产-骊威'},
      { thumb_url: '/assets/image/lanniao.jpg', backgroundColor: '', color: '', url: '/pages/empty/index', title:'日产-蓝鸟'},
      { thumb_url: '/assets/image/yangguang.jpg', backgroundColor: '', color: '', url: '/pages/empty/index', title:'日产-阳光'},
      { thumb_url: '/assets/image/qida.jpg', backgroundColor: '', color: '', url: '/pages/empty/index', title:'日产-骐达'},
      { thumb_url: '/assets/image/xuanyi.jpg', backgroundColor: '', color: '', url: '/pages/empty/index', title:'日产-轩逸'},
      { thumb_url: '/assets/image/bilian.jpg', backgroundColor: '', color: '', url: '/pages/empty/index', title:'日产-碧莲'}
	  ];
      this.setData({
          grids: datas
      });
},
getSwipers(){
	  //调用数据
	  var datas=[
      { thumb_url: 'http://ac-kLwR0uGQ.clouddn.com/de3ed26ea576263a4b5e.jpg', url: '/pages/empty/index'},
      { thumb_url: 'http://ac-kLwR0uGQ.clouddn.com/12269249e6dd5f1c4143.jpg', url: '/pages/empty/index'},
      { thumb_url: 'http://ac-kLwR0uGQ.clouddn.com/545744915569386b498e.jpg', url: '/pages/empty/index'},
      { thumb_url: 'http://ac-kLwR0uGQ.clouddn.com/24812304e6df48ba5c7e.jpg', url: '/pages/empty/index' },
      { thumb_url: 'http://ac-kLwR0uGQ.clouddn.com/5839f8d6115b1d2dd2b1.jpg', url: '/pages/empty/index' },
      { thumb_url: 'http://ac-kLwR0uGQ.clouddn.com/8610b6687c95a85abbf3.jpg', url: '/pages/empty/index' }
	  ];
      this.setData({
          swipers: datas
      });
},
query(imageurl){
  var results;
  AV.Query.doCloudQuery('select * from discount where picurl=' + imageurl).then
  (function (data) {
    // data 中的 results 是本次查询返回的结果，AV.Object 实例列表
    results = data.results;
    return results;
  }, function (error) {
    //查询失败，查看 error
    console.error(error);
    return {};
  });
  console.log(results);
}

})
