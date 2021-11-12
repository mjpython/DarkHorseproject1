var data = Mock.mock("recheck.php","post",function(options){
    console.log("options",options);//ajax请求信息 url 方法 数据body
    var data=JSON.parse(options.body);
    var userName=data.userName;
    var pwd=data.pwd;
    if(userName!="tom"){
        return Mock.mock({"status":"10001","msg":"注册成功"});
    }else{
        return Mock.mock({"status":"30001","msg":"用户名重复！"});
    }
})