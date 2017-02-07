	$(function(){
		
			/*header跟随滚动变色*/
			(
				function(){
					var scrollMaster = $("#main");
					$(scrollMaster).bind("scroll",function () {
			   			var scrolllenth=scrollMaster.scrollTop()/100;
			   			//console.log(scrolllenth);
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
				   var swiper=new Swiper('.list-container',{
				   	   
			 	   });
				}
			)();
		
			/*more列表显示*/
			(
				function(){
					var timer=null;
					$(".header_more").tap(function(){
						$(".more_box").css("left","0");
						timer=setTimeout(function(){
							$('.shade').css('display',"block");
							$('.shade').css('opacity',"0.3");
							//alert("列表")
						},250);
						$('.shade').tap(function(){					
							$(".more_box").css("left",'-5rem');
							$('.shade').css('display',"none");
						})
					})
				}
			)();
			
			
			/*more tab切换*/
	/*		(
				function(){
					var oP=$('.tab_header p');
					oP.eq(0).addClass("tab_action");
					$('.tab_con1').css('display','block')
					oP.each(function(index){
						$(this).tap(function(){
							oP.removeClass("tab_action");
							$(this).addClass("tab_action");
							$('.tab_body ul').hide().eq(index).show();
						})
					})
				}
			)();*/
			
			
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
						console.log(num);
						oUl.css("-webkit-transition","all .5s ease-in-out");
						oUl.css("transition","all .5s ease-in-out");
						oUl.css("-webkit-transform","translateY("+aLiHight*-num+"px)");
						oUl.css("transform","translateY("+aLiHight*-num+"px)");
						console.log(aLiHight*-num);
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
			
			
			
			
		})