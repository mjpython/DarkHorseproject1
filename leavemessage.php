<?php 
header("Content-type:text/html;charset=utf-8");
date_default_timezone_set("PRC"); 
if($_SERVER['REQUEST_METHOD']=="POST"){
include("conn.php");
$info=json_decode(file_get_contents('php://input'),true);
$userName=@$info['userName'];
$content=@$info['content'];
$flag=mysqli_query($conn,"insert into message(userName,content,date)
values('$userName','$content',now())");
if($flag){ /*location.href=document.referrer; 返回上一页并刷新*/
	echo '{"status":"10001","msg":"留言成功，待审核！"}';
}else{
	echo '{"status":"30001","msg":"留言失败，请联系管理员。"}';
}
}else{
	echo "非法登录！";
	echo '<script>location.href="error.php";</script>';
}
?>