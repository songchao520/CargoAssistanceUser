
var ws;
var floatw=null;
function createWebSocket(username){
	//ws = new WebSocket("ws://songc.s1.natapp.cc/Cargo/hello/"+username);
	//ws = new WebSocket("ws://192.168.0.155:8080/Cargo/hello/"+username);
	//ws = new WebSocket("ws://songclovelij.top/Cargo/hello/"+username);
	ws = new WebSocket("ws://huobang.fzbox.net/Cargo/hello/"+username);
	ws.onopen = function(evn){
	    console.log(evn);
	}; 
	ws.onmessage = function(evn){
		var btnArray = ['让它飞', '抢'];
		// 创建悬浮窗口
		floatWebview(evn.data);
	    /*mui.confirm(evn.data, '货帮提示', btnArray, function(e) {
			if (e.index == 0) {
				mui.alert('就这么放弃了');
			} else {
				mui.alert('抢到了');
			}
		},"div");*/
	};	
	ws.onclose = function(){
        console.log("关闭");
    };
}

function floatWebview(text){
	if(floatw){ // 避免快速多次点击创建多个窗口
		return;
	}
	floatw=plus.webview.create("../webview/alert.html","WebSocket",{width:'80%',height:'40%',margin:"auto",background:"rgba(0,0,0,0.8)",scrollIndicator:'none',scalable:false,popGesture:'none'},{
		data:text
	});
	floatw.addEventListener("loaded",function(){
		floatw.show('fade-in',300);
		floatw=null;
	},false);
}

