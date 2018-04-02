<?php
	include 'classifiedReviews_db.php';
	
	session_start ();
	
	if (isset ($_POST['signinSubmit'])){
		
		//The session is STARTED so that IF the submitted user information is accepted and user can log in, then the session username can be set to the log in email
		//session_start ();
		
		//echo "alert ('Entered the PHP Login Confirmation function');";
		
		//$loginUser = mysqli_real_escape_string ($connect, strip_tags ($_REQUEST['emailSubmit']));
		
		//$loginPassword = mysqli_real_escape_string ($connect, strip_tags ($_REQUEST['passwordSubmit']));
		
		//Encrypt password Submitted for LOGN in order to match it to the password in the Database
		$encryptPasswordLogin = md5 ($_POST['passwordSubmit']);
		
		
		//This is the UNSECURE method of SELECT for login
		/*
		$login_sql = "SELECT * FROM users WHERE u_email = '$_REQUEST[emailSubmit]' AND u_password = '$encryptPasswordLogin'";
		
		$run = mysqli_query ($connect, $login_sql);
		*/
		
		
		
		//This is the SECURE method of SELECT for login
		$checkUserPresentStmt = $connect -> prepare ('SELECT * FROM users where u_email = ? AND u_password = ?');
		
		$checkUserPresentStmt -> bind_param ('ss', $_POST['emailSubmit'], $encryptPasswordLogin);
		
		$checkUserPresentStmt -> execute ();
		
		$result = $checkUserPresentStmt -> get_result ();
		
		//$row = mysqli_fetch_assoc ($run);
		
		if(mysqli_num_rows ($result) > 0){//This was used with the UNSECURE method of SELECT for login from above $row = mysqli_fetch_assoc ($run)){
				
				/*
				echo "
						User Account: $row[u_email]\t\t $row[u_last]; $row[u_first]
					 ";
				*/
				
				//echo "alert ('obtaining the result of the current user login')";
				$loggedInUser = $result -> fetch_array ();
				
				
				
				//BEFORE using SESSION, I returned the logged in email and to the classifiedReives.js loginModalSubmit function
				/*
				echo "
						$loggedInUser[u_email]
					 ";
				*/
				
				$_SESSION['u_email'] = $loggedInUser['u_email'];
				
				//echo "$_SESSION[u_email]";
				
				header("Location: http://192.168.1.174:80/ajax/classifiedReviews_confEmail/classifiedReviews.html");
				
				//exit ();
				
		}
		
		else
		{
			//header ("Location: http://localhost/ajax/classifiedReviews_confEmail/classifiedReviews_SignupLogin.html");
			echo "";
		}
		
	}

?>