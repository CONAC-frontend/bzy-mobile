	$(function(){
			
			/*“更多”点击增删组件*/
			(
				function(){
					$(".imp_new_more").on("tap",function(){/*重要公告更多*/
						$(".search").remove();
						$("#main").load('template/policy_paper.html');
					});
					$(".comm_more").bind("tap",function(){/*其他三栏目更多*/
						$(".search").remove();
						$("#main").load('template/policy_paper.html');
					})
				}
			)();
			
			/*header跟随滚动变色*/
			(
				function(){
					var scrollMaster = $("#main");
					$(scrollMaster).bind("scroll",function () {
			   			var scrolllenth=scrollMaster.scrollTop()/100;
			  			$("header").css("background",'rgba(255,255,255,'+scrolllenth+')');
			  			if(scrolllenth>1.7){
			  				$('header').css("border-bottom","1px solid #ccc");
			  			}else{
			  				$('header').css("border-bottom","");
			  			}
			  			
					});
				}
			)();
		
			
			/*轮播图*/
			(
				function(){
				   var swiper=new Swiper('.banner-container',{
				   	   autoplay:2000,
				   	   loop:true,
				   	  //设置swiper触碰以后是否重新开始  false重新开始  true停止
				   	   autoplayDisableOnInteraction:false,
				   	   pagination : '.swiper-pagination',
					   paginationElement : 'li'
			 	   });
				}
			)();
			
			/*九宫格手指滑动效果*/
			(
				function(){
				   var swiper=new Swiper('.list-container',{});
				}
			)();
		
			/*more列表显示*/
			(
				function(){
					var timer=null;
					$(".header_more").tap(function(){
						if($(".search").attr("value")=="/index.html"){/*在首页时才阻止滚动*/
							/*遮罩层下面页面阻止滚动*/
							$("#main").css({
								"position":"fixed",
								"top":"0",
								"left":"0"
							});
						}
						$(".more_box").css("left","0");
						timer=setTimeout(function(){
							$('.shade').css('display',"block");
							$('.shade').css('opacity',"0.5");
							//alert("列表")
						},250);
						$('.shade').tap(function(){					
							$("#main").css("position","");/*开启滚动*/
							$(".more_box").css("left",'-6rem');
							$('.shade').css('display',"none");
						})
					})
				}
			)();
			
			
			/*重要公告滚动播出效果*/
			(
				function(){
					var oUl = $('.imp_new_cont ul');
					var aLi = oUl.find("li");
					var aLiHight = parseInt(aLi.eq(1).height());//最好别用css()方法。
					var aLiNum = aLi.length;
					var timer=null;
					var num=0;
					timer=setInterval(function(){
						num++;
						num = num%aLiNum;
						oUl.css("-webkit-transition","all .5s ease-in-out");
						oUl.css("transition","all .5s ease-in-out");
						oUl.css("-webkit-transform","translateY("+aLiHight*-num+"px)");
						oUl.css("transform","translateY("+aLiHight*-num+"px)");
					},3000);
				}
			)();
			
			
			/*路由切换*/
			(
				function(){
				   var _router_map={
				   	   '/index':{'url':'template/index.html','target':''},
				   	   '/policy_paper':{'url':'template/policy_paper.html','target':'#main'},
				   	   '/operational_guidance':{'url':'template/operational_guidance.html','target':'#main'},
				   	   '/common_query':{'url':'template/common_query.html','target':'#main'},
				   	   '/sign_state':{'url':'template/sign_state.html','target':'#main'},
				   	   '/web_report':{'url':'template/web_report.html','target':'#main'}
			   	   }
				   var search = $(".search");
				   var _item=$(".more_list_box ul li");
			   	    for(var i=0;i<_item.length;i++){
			   	    	_item[i].addEventListener("tap",function(){
			   	    		$("#main").css("position","");/*开启滚动*/
			   	    		var _href=this.getAttribute("href");
			   	    		for(var key in _router_map){
			   	    			if(_href==key){
			   	    				if(_router_map[key].target==''){
			   	    				 location.reload();
			   	    			   }else{
			   	    			   		search.attr("value",key);
			   	    			    	$(_router_map[key].target).load(_router_map[key].url);
			   	    			    	$(".more_box").css("left",'-5rem');
										$('.shade').css('display',"none");
										$('.search').remove();
			   	    			    }
			   	    			}
			   	    		}
			   	    		
			   	    	})
			   	    }
			   	    /*点击搜索增删组件*/
			   	   search.bind("tap",function(){
			   	   		var searchFlag = search.attr("value");
			   	   		if(searchFlag!="/common_query"||searchFlag!="no"){
				   	   		$("#main").load('template/common_query.html');
				   	   		search.attr("value",'no');
			   	   		}
			   	   });
				}
			)();
				
			
			/*隐藏浏览器地址栏*/
			(function(){
				$('#main').css("height",window.innerHeight+100);   
				window.scrollTo(0, 1);   
				//重置成新高度   
				$("#main").css("height",window.innerHeight);   
				//非常重要，用于兼容不同机型，防止浏览器窗口移动   
				//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
			})();
			/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */
/*(function( win ){
var doc = win.document;

// If there's a hash, or addEventListener is undefined, stop here
if(!win.navigator.standalone && !location.hash && win.addEventListener ){

//scroll to 1
win.scrollTo( 0, 1 );
var scrollTop = 1,
getScrollTop = function(){
return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
},

//reset to 0 on bodyready, if needed
bodycheck = setInterval(function(){
if( doc.body ){
clearInterval( bodycheck );
scrollTop = getScrollTop();
win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
}
}, 15 );

win.addEventListener( "load", function(){
setTimeout(function(){
//at load, if user hasn't scrolled more than 20 or so...
if( getScrollTop() < 20 ){
//reset to hide addr bar at onload
win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
}
}, 0);
}, false );
}
})( this );*/
		})