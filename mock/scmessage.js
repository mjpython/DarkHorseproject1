var data = Mock.mock("scmessage.php","post",function(options){
    console.log("options",options);//ajax请求信息 url 方法 数据body
    var data=JSON.parse(options.body);
    var messageID=data.messageID;
    if(true){
        return Mock.mock({"status":"10001","msg":"删除审核！"});
    }else{
        return Mock.mock({"status":"30001","msg":"删除失败"});
    }
})