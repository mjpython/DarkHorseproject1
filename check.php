<?php
header("Content-type:text/html;charset=utf-8");
date_default_timezone_set("PRC");   //系统使用北京时间
require 'JWT.php'; //引入JWT库
use \Firebase\JWT\JWT; //使用\Firebase\JWT\JWT命名空间
define('KEY', '1gHuiop975cdashyex9Ud23ldsvm2Xq');//定义加密秘钥
$res['result'] = 'failed';//定义result初始值
$action=@$_GET['action'];
if($action=='login'){//判断如果是登录操作
	if($_SERVER['REQUEST_METHOD']=="POST"){
$info=json_decode(file_get_contents('php://input'),true);
$userName=@$info['userName'];
$pwd=@md5($info['pwd']);
include("conn.php");
$rs=mysqli_query($conn,"select * from users where userName='$userName' and pwd='$pwd'");
$num=mysqli_num_rows($rs);
$as=mysqli_query($conn,"select * from admin where userName='$userName' and pwd='$pwd'");
$anum=mysqli_num_rows($as);
if($num>0 || $anum>0){
	if($num>0){
	//获取当前时间戳
	$nowtime=time();
	//创建token
	$token = [
	    'iss' => 'http://localhost', //签发者
	    'aud' => 'http://localhost', //jwt所面向的用户
	    'iat' => $nowtime, //签发时间
	    'nbf' => $nowtime + 10, //在什么时间之后该jwt才可用
	    'exp' => $nowtime + 600, //过期时间-10min
	    'data' => [
	        'userId' => 1,
	        'userName' => $userName
	    ]
	];
	//创建jwt
	$jwt=JWT::encode($token,KEY);
	$res['status']="10001";
	$res['result'] = 'success';
	$res['jwt']=$jwt;
	

}else{
	//获取当前时间戳
	$nowtime=time();
	//创建token
	$token = [
	    'iss' => 'http://localhost', //签发者
	    'aud' => 'http://localhost', //jwt所面向的用户
	    'iat' => $nowtime, //签发时间
	    'nbf' => $nowtime + 10, //在什么时间之后该jwt才可用
	    'exp' => $nowtime + 600, //过期时间-10min
	    'data' => [
	        'userId' => 1,
	        'userName' => $userName
	    ]
	];
	//创建jwt
	$jwt=JWT::encode($token,KEY);
	$res['status']="110";
	$res['result'] = 'success';
	$res['jwt']=$jwt;		
}
}
else{
	$res['msg']='用户名或密码错误';
	$res['status']='30001';
	
}
}
echo json_encode($res);
}else{
	//非登录操作
	//验证请求头，token为空报错，非法登录
	$jwt=@$_SERVER['HTTP_X_TOKEN'];
	if(empty($jwt)){
		$res['msg']="非法登录";
		echo json_encode($res);
		exit;
	}try{
		 JWT::$leeway = 60;
        $decoded = JWT::decode($jwt, KEY, ['HS256']);
        $arr = (array)$decoded;
        if ($arr['exp'] < time()) {
            $res['msg'] = '请重新登录';
        } else {
            $res['result'] = 'success';
            $res['info'] = $arr;
        }

	}catch(Exception $e){//解码失败
		$res['msg']="Token验证失败，请重新登录";
	}
	echo json_encode($res);
}
mysqli_free_result($rs);
mysqli_close($conn);

?>