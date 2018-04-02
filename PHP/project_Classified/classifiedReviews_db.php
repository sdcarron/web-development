<?php
	$server = 'localhost';
	$user = 'classified_reviews';
	$password = 'p4S5w0R6';
	$database = 'classified_reviews';
	
	$connect = mysqli_connect ($server, $user, $password, $database);
	
	//If the connection fails to establish, notify what the connection error was
	if (!$connect){
		die ('Connect error: ' . mysqli_connect_error ());
	}
	
	else
	{
		//echo 'Connection successful';
	}
?>