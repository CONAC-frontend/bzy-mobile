 document.documentElement.style.fontSize=document.documentElement.clientWidth/6.4+'px';
		   
   //通过resize事件 监听当前窗口大小变化
  window.addEventListener("resize",function(){
	  document.documentElement.style.fontSize=
	  document.documentElement.clientWidth/6.4+'px';
	})

