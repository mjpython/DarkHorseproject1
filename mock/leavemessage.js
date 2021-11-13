var data = Mock.mock("leavemessage.php","post",function(options){
    console.log("options",options);//ajax请求信息 url 方法 数据body
    var data=JSON.parse(options.body);
    var userName=data.userName;
    var content=data.content;
    if(true){
        return Mock.mock({"status":"10001","msg":"留言成功，待审核！"});
    }else{
        return Mock.mock({"status":"30001","msg":"留言失败，请联系管理员"});
    }
})