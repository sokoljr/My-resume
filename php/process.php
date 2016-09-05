<?PHP header("Content-Type: text/html; charset=utf-8");
$adminemail="serg607.sokol@gmail.com";
$date=date("d.m.y"); 
$time=date("H:i");
$backurl="http://resume-sokol.esy.es";
 
$name=$_POST['name']; 
$email=$_POST['email'];
$phone=$_POST['phone_number'];  
$msg=$_POST['message']; 
 
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($email))) { 
 	echo "<center>Вернитесь <a 
		href='javascript:history.back(1)'><B>назад</B></a>. Вы 
		указали неверные данные!"; 
} else { 
	$msg="
	Имя: $name
	E-mail: $email 
	Номер телефона: $phone
 	Сообщение: $msg"; 

	mail("$adminemail", "$date $time Сообщение 
	от $name $phone", "$msg"); 

	$f = fopen("message.txt", "a+"); 
	fwrite($f," \n $date $time Сообщение от $name"); 
	fwrite($f,"\n $msg "); 
	fwrite($f,"\n ---------------"); 
	fclose($f); 

	print "<script language='Javascript'><!-- 
	function reload() {location = \"$backurl\"}; setTimeout('reload()', 6000); 
	//--></script> 
	$msg 
	<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";  
	exit; 
} 
?>