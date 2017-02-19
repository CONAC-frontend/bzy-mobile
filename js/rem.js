 /*document.documentElement.style.fontSize=document.documentElement.clientWidth/6.4+'px';
		   
   //通过resize事件 监听当前窗口大小变化
  window.addEventListener("resize",function(){
	  document.documentElement.style.fontSize=
	  document.documentElement.clientWidth/6.4+'px';
	})*/

var html = document.documentElement;
var hWidth = html.getBoundingClientRect().width;
html.style.fontSize = hWidth/6.4 + "px";

window.addEventListener("resize",function(){
var html = document.documentElement;
var hWidth = html.getBoundingClientRect().width;
html.style.fontSize = hWidth/6.4 + "px";
});

/*横屏处理*/
(function rotate(){
   var orientation=window.orientation;
   if(orientation==90||orientation==-90){
      document.body.style.display='none';
      alert("请使用竖屏访问！");
   }
   window.onorientationchange=function(event){
      document.body.style.display="block";
      event.stopPropagation();
  	  event.cancelBubble = true;
      rotate();
   };
})();