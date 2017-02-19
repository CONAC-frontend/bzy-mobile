/*公共查询接口中历史记录查询js*/
        function saveData(){  
            var kwdCacheKey = 'h_kwd_list';     //定义数据存储对象名  
            $('.searchBt').on('tap', function(){  
                var currentKwd = $('.userInput').val(),     //搜索内容  
                    currentKwdKey = 'k_'+currentKwd,        //当前搜索值对应的键值  
                    currentKwdList = {},                    //创建json对象   
                    kwdStr = localStorage.getItem(kwdCacheKey);     //获取历史搜索内容（字符串）  
                if(kwdStr !== null){  
                    var kwdList = JSON.parse(kwdStr);       //将历史搜索内容转化为对象  
                }  
  				alert(currentKwd);
                currentKwdList[currentKwdKey] = currentKwd; //将当前输入关键字动态加入新创建json对象中  
  
                if(kwdList == undefined){   //如果不存在历史搜索内容，直接将当前搜索内容转化为字符串  
                    var kwdTxt = JSON.stringify(currentKwdList);  
                }else{  
                    //合并对象（当前搜索内 和 历史 搜索内容）  
                    var kwdTxtObj = mergeToRepeat(currentKwdList,kwdList);  
                    //转化为序列化json字符串格式  
                    kwdTxt = JSON.stringify(kwdTxtObj);  
                }  
                localStorage.setItem(kwdCacheKey, kwdTxt);  //存入localStorage  
            })  
  
        }  
  
        function upData(){  //取数据  
            var kwdTxt = window.localStorage.h_kwd_list ? window.localStorage.h_kwd_list : undefined;  
            if(kwdTxt !== undefined){  
                kwdTxtObj = JSON.parse(kwdTxt);  
                //console.log(kwdTxtObj);  
  
                for(var attr in kwdTxtObj){ //遍历对象  
                    var item = '<li><a href="javascript:;">'+kwdTxtObj[attr]+'</a></li>';
                    $('.history ul').append(item);  
                }  
            }  
        }  
  
        function clearkey(){  
            //清空历史记录 并刷新页面  
           $('.hisH h3').on('tap', function(){  
                //localStorage.clear();   //删除所有localStorage的值  
                localStorage.removeItem('h_kwd_list'); //删除h_kwd_list这个键值的里面所有的值  
               // location.reload();  
               $(".history ul").remove("li");
           })  
        }  
  
        function searchKey(){   //直接用历史记录查询  
            $('.history li').on('tap', function(){  
                $('.userInput').val($(this).text());  
            })  
        }  
        function mergeToRepeat(json1,json2){    //遍历两个对象合成一个并将两个对象中重复的键值的值去掉前一个  
            var resJson={};  
            for(var i in json1){  
                resJson[i]=json1[i];  
            }  
            for (var i in json2) {  
                resJson[i]=json2[i];  
            };  
            return resJson;  
        }  
  