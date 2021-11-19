<?php 
header("Content-type:text/html;charset=utf-8");
date_default_timezone_set("PRC"); 
if($_SERVER['REQUEST_METHOD']=="POST"){
include("conn.php");
$info=json_decode(file_get_contents('php://input'),true);
$messageID=@$info['messageID'];
$replycontent=@$info['replycontent'];
$changetype=@$info['changetype'];
if($changetype=="del"){
	$flag=mysqli_query($conn,"delete from message where messageID='$messageID';");
	if($flag){ 
		echo '{"status":"10001","msg":"删除成功"}';
	}else{
		echo '{"status":"30001","msg":"删除失败！"}';
	}
}
if($changetype=="shenhe"){
	$flag=mysqli_query($conn,"update message set shenhe='1' where messageID='$messageID';");
	if($flag){ 
		echo '{"status":"10001","msg":"审核成功"}';
	}else{
		echo '{"status":"30001","msg":"审核失败"}';
	}
}
if($changetype=="reply"){
$flag=mysqli_query($conn,"update message set reply='$replycontent',replydate=now()  where messageID='$messageID';");
if($flag){ 
	echo '{"status":"10001","msg":"回复成功"}';
}else{
	echo '{"status":"30001","msg":"回复失败"}';
}
}
		mysqli_close($conn);}
		else{
	echo "非法登录！";
	echo '<script>location.href="error.php";</script>';
}
?>