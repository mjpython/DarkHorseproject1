<?php 
header("Content-type:text/html;charset=utf-8");
date_default_timezone_set("PRC"); 
if($_SERVER['REQUEST_METHOD']=="POST"){
include("conn.php");
$info=json_decode(file_get_contents('php://input'),true);
$userName=@$info['userName'];
$pwd=@md5($info['pwd']);
$birthday=@$info['birthday'];
$flag=mysqli_query($conn,"insert into users(userName,pwd,birthday)
values('$userName','$pwd','$birthday')");
if($flag){ /*location.href=document.referrer; 返回上一页并刷新*/
	echo '{"status":"10001","msg":"注册成功"}';
}else{
	echo '{"status":"30001","msg":"用户名重复！"}';
}
}else{
	echo "非法登录！";
	echo '<script>location.href="error.php";</script>';
}
?>