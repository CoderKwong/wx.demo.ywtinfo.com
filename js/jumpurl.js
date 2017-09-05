  function is_weixin() {
	        var ua = navigator.userAgent.toLowerCase();
	        if (ua.match(/MicroMessenger/i) == "micromessenger") {
	            return true;
	        } else {
	            return false;
	        }
	    }
	    var isWeixin = is_weixin();
	    var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
	    function loadHtml() {
	        var div = document.createElement('div');
	        div.id = 'weixin-tip';
	        div.innerHTML = '<p><img src="images/live_weixin.png" alt="微信打开"/></p>';
	        document.body.appendChild(div);
	    }

	    function loadStyleText(cssText) {
	        var style = document.createElement('style');
	        style.rel = 'stylesheet';
	        style.type = 'text/css';
	        try {
	            style.appendChild(document.createTextNode(cssText));
	        } catch (e) {
	            style.styleSheet.cssText = cssText; //ie9以下
	        }
	        var head = document.getElementsByTagName("head")[0]; //head标签之间加上style样式
	        head.appendChild(style);
	    }
	    var cssText = "#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;}";
	   
        var browser = {
        versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return { //移动终端浏览器版本信息 
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
        iPad: u.indexOf('iPad') > -1, //是否iPad 
        };
        }(),
        }
       
        $('.btn').on('click', function(event) { 
    
            var jumpurl = document.getElementById("jumpurl");
            if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
                   jumpurl.href = "https://itunes.apple.com/us/app/%E5%8D%97%E6%96%B9%E5%8C%BB%E5%8A%A1%E9%80%9A/id1205266027?l=zh&mt=8";
            }
            if (browser.versions.android) { 
                    if(isWeixin){
			            loadHtml();
			            loadStyleText(cssText);
		            } 
                   jumpurl.href = "http://ycmz.dept.nfyy.com/nfywt_patient_latest.apk"; 
            }
         }); 