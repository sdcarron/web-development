<?php
	include 'classifiedReviews_db.php';
	
	//The session is STARTED so that IF the submitted user information is accepted and user can log in, then the session username can be set to the log in email
	session_start ();

	//This function verifies the confirmation link that the registering user has clicked on in his or her email
	if (isset ($_REQUEST['confirmRequest']))
	{
		//echo "alert ('hooray! entered the confirmation function') \n\n\n";
		
		
		$confirmCode = $_REQUEST ['confirmCode'];
		
		//echo "Extracted the confirmCode and set it to the variable... has value: ". $confirmCode. "\n\n";
		
		$checkUserSignupStmt = $connect -> prepare ('SELECT * FROM users where u_email = ?');
		
		//echo "Set up the prepare stmt\n\n";
		
		$checkUserSignupStmt -> bind_param ('s', $_REQUEST ['confirmEmailSubmit']);
		
		//echo "Bound parameter values to the prepare stmt\n\n";
		
		$checkUserSignupStmt -> execute();
		
		//echo "Executed the prepared statement\n\n";
		
		
		
		$resultSignup = $checkUserSignupStmt -> get_result ();
		
		//echo "Extracted the result of executing the prepared statment \n\n";
		
		
		if (mysqli_num_rows ($resultSignup) > 0)
		{
			//echo "The query result had more than 0 rows!";
			
			while ($row = mysqli_fetch_array ($resultSignup))
			{
				//echo "Cycling through the rows of the query result";
				
				if ($confirmCode == $row ['u_confirmcode'])
				{
					//echo "Found the confirm code in the users table!";
					//do 
					//{
						$updateConfirmedStmt = $connect -> prepare ("UPDATE users SET u_confirmed = '1' WHERE u_email = ? ");	
					
						$updateConfirmedStmt -> bind_param ('s', $_REQUEST ['confirmEmailSubmit']);
						
						$updateConfirmedStmt -> execute ();
						
						
						
						$updateConfirmCodeStmt = $connect -> prepare ("UPDATE users SET u_confirmcode = '0' WHERE u_email = ? ");
						
						$updateConfirmCodeStmt -> bind_param ('s', $_REQUEST ['confirmEmailSubmit']);
						
						$updateConfirmCodeStmt -> execute ();
					//}
					
					
					//redirect to classifiedReviews homepage with signed up user logged in!
					//break;
					
					//echo "Finished updating registering user CONFIRMED STATUS and CONFIRM CODE";
					
					$_SESSION ['u_email'] = $_REQUEST ['confirmEmailSubmit'];
					
					//echo "Set up the logged in user to be the newly registered user... redirecting to home page";
					
					header("Location: http://localhost/ajax/classifiedReviews_confEmail/classifiedReviews.html");
					
					
					
					exit ();
				}
				
				else
				{
					//echo "Sorry, either username or confirmation code is invalid";
					
					//redirect to classifiedReviews signup page with NO user signed in!
					header ("Location: http://localhost/ajax/classifiedReviews_confEmail/classifiedReviews_SignupLogin.html");
				}
			}
		}
		
	}
?>