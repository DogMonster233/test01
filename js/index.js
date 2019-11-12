//luojie

//music
var mmp3 = document.querySelector("#audio_mp3")
document.addEventListener("WeixinJSBridgeReady", function() {
	mmp3.play();
}, false);

//page_03 input
$(".page_03 .p3_btn").click(function() {
	var name = document.getElementById("username");
	var tel = document.getElementById("usertel");
	var num = document.getElementById("people_num");
	if(!name.value) {
		alert("请输入真实姓名！");
		name.focus();
		return false;
	}
	if(!tel.value) {
		alert("请输入您的联系方式！");
		tel.focus();
		return false;
	}
	if(!/^1[0-9]{10}$/.test(tel.value)) {
		alert("手机号格式不正确！");
		tel.focus();
		return false;
	}
	if(!num.value) {
		alert("请输入同行人数！");
		return false;
	}
	
	
	console.log("name:"+$("#username").val(),"tels:"+$("#usertel").val(),"nums:"+$("#people_num").val());
	$.ajax({
		url: "http://wx.whyimingkeji.com/zxtfbjjrc/index.php?form-signin-19012202",
		data: {
			name: $("#username").val(),
			tels: $("#usertel").val(),
			nums: $("#people_num").val()
		},
		dataType: 'json',
		type: 'post',
		success: function(res) {
			console.log(res);
			//后端返回消息alert(res.return_msg);
			if(res.return_code == 'success') {
				console.log("您的报名信息提交成功！");
				alert("报名成功！");
				window.location.reload();
			} else {
				//失败
				console.log("提交失败，请检查失败原因")
			}
		}
	});
})