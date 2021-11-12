var data = Mock.mock("check.php","post",function(res){ //options就是请求
	var json1=localStorage.getItem("jwt");
	json1=JSON.parse(json1)
	console.log(json1.status);
    if(json1.status=="10001"){//判断是否正确
        return Mock.mock('{"result":"success","status":"10001"}');//  返回数据
		// return  {"status":"10001","msg":"ok"}  这样返回也行
    }else{
        return Mock.mock({"status":"30001","msg":"用户名或密码错误！"});
    }
})
