var data = Mock.mock("reply.php","post",function(options){
    console.log("options",options);//ajax请求信息 url 方法 数据body
    var data=JSON.parse(options.body);
    var messageID=data.messageID;
    var replycontent=data.replycontent;
    if(true){
        return Mock.mock({"status":"10001","msg":"回复成功！","data":replycontent});
    }else{
        return Mock.mock({"status":"30001","msg":"回复失败"});
    }
})