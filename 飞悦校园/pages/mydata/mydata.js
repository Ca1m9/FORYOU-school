//index.js
//获取应用实例

var param ={
  date:{
    mess:'点击了'
  },
  all_1:function(e){
    param.date.mess='ds'
    this.setData(param.date);
  }
};
Page(param);





