//var allurl = "http://songc.s1.natapp.cc/Cargo";
//var allurl = "http://192.168.0.155:8080/Cargo";var huobang_alipayurl = "http://192.168.0.155:8080/Alipay/payservice?payid=";
//var allurl = "http://songclovelij.top/Cargo";var huobang_alipayurl = "http://songclovelij.top/Alipay/payservice?payid=";
var allurl = "http://huobang.fzbox.net/Cargo";var huobang_alipayurl = "http://huobang.fzbox.net/Alipay/payservice?payid=";
var huobang_loginId;
var pagesize = 4;
var xitongneizhi = "7";
if(localStorage.getItem("huobang_loginId_user") != null){
	huobang_loginId = localStorage.getItem("huobang_loginId_user");
};
var loginuser;
if(localStorage.getItem("huobang_login_user") != null){
	
	loginuser = JSON.parse(localStorage.getItem("huobang_login_user"));
};

function alertLoginMsg(){
	alert("未登录或已在其他地点登录");
}
