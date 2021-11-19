<?php 
header("Content-type:text/html;charset=utf-8");
date_default_timezone_set("PRC"); 
if($_SERVER['REQUEST_METHOD']=="POST"){
include("conn.php");
$rs=mysqli_query($conn,"select * from message order by date desc");

while($info=mysqli_fetch_assoc($rs)){
	echo '{"id":'.$info['messageID'].',"name":'.$info['userName'].',"date":'.$info['date'].',"content":'.$info['content'].',"shenhe":'.$info['shenhe'].',"reply":'.$info['reply'].',"replydate":'.$info['replydate'].'}';
}
}else{
	echo "非法登录！";
	echo '<script>location.href="error.php";</script>';
}
mysqli_free_result($rs);
		mysqli_close($conn);
?>