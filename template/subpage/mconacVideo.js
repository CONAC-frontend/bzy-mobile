var html = document.documentElement;
			var hWidth = html.getBoundingClientRect().width;
			html.style.fontSize = hWidth/6.4 + "px";
			window.addEventListener("resize",function(){
			var html = document.documentElement;
			var hWidth = html.getBoundingClientRect().width;
			html.style.fontSize = hWidth/6.4 + "px";
			});
			document.documentElement.style.height = window.innerHeight + 'px';
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