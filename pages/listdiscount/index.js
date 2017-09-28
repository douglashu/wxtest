const App = getApp()
Page({
data: {
          msgs1:[]
},
showModal(message) {
   App.WxService.showModal({
    	title: '提示',
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
     this.getMsgs1();
},
navigateTo(e) {
    App.navigateTo(e.currentTarget.dataset.url,e.currentTarget.dataset);
},
getMsgs1(){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/assets/images/icon1.png',backgroundColor:'',color:'',dcolor:'',url:App.renderUrl('','index'),title:'标题一',desc:'说明文字'},
	  	 {thumb_url:'/assets/images/icon2.png',backgroundColor:'',color:'',dcolor:'',url:App.renderUrl('','index'),title:'标题二',desc:'说明文字'},
	  	 {thumb_url:'/assets/images/icon3.png',backgroundColor:'',color:'',dcolor:'',url:App.renderUrl('','index'),title:'标题三',desc:'说明文字'}
	  ];
      this.setData({
          msgs1: datas
      });
}

})
