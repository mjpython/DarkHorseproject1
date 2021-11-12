var data = Mock.mock("check.php","post",function(options){
    console.log("options",options);//ajax请求信息 url 方法 数据body
    var data=JSON.parse(options.body);
    var userName=data.userName;
    var pwd=data.pwd;
    if(userName=="admin" && pwd=="123"){
        return Mock.mock({"status":"110","msg":"ok","data":userName});
    }
    if(userName=="tom" && pwd=="123"){
        return Mock.mock({"status":"10001","msg":"ok","data":userName});
    }else{
        return Mock.mock({"status":"30001","msg":"用户名或密码错误！"});
    }
})
