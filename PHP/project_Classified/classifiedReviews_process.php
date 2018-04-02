<?php

	//header("Access-Control-Allow-Origin: *");


	include 'classifiedReviews_db.php';
	
	
	//The session is STARTED so that IF the submitted user information is accepted and user can log in, then the session username can be set to the log in email
	session_start ();
	
	/*
		This is from when I was submitting the Classified Ad using JS and feeding it from JS into PHP BEFORE 6-2-2017
	//Submit a classified Ad Post. For now, each ad is posted with the temporary username 'stephen' and temporary date '12-4-2016'
	//the username will eventually be set as the EMAIL of the user currently logged IN and the date will be set as the CURRENT date
	if (isset ($_REQUEST['classifiedSubmit'])){
		
		/*
		$classifiedEntryTopic = $_REQUEST ['classifiedTopic'];
		$classifiedEntrySubtopic = $_REQUEST ['classifiedSubtopic'];
		$classifiedEntryStatement = $_REQUEST ['classifiedStatement'];
		* /
		
		//This is the UNSECURE method of submitting to the database
		/*
		$classified_insert_sql = "INSERT INTO classified_posts (post_date, post_user, post_topic, post_subtopic, post_statement) VALUES ('12-4-2016', 'Stephen', '$_REQUEST[classifiedTopic]', '$_REQUEST[classifiedSubtopic]', '$_REQUEST[classifiedStatement]')";
		
		$run = mysqli_query ($connect, $classified_insert_sql);
		
		echo "alert ('This is coming from the classifiedReviews_process.php file: insertion successful!')";
		* /
		
		//The code runs fine from this point forward!
		$classifiedSubmitStmt = $connect -> prepare ('INSERT INTO classified_posts (post_date, post_user, post_topic, post_subtopic, post_statement, post_imageNameString) VALUES (?, ?, ?, ?, ?, ?)');
		
		$tempDate = '1-9-2017';
		
		$classifiedSubmitStmt -> bind_param ('ssssss', $tempDate, $_SESSION['u_email'], $_REQUEST['classifiedTopic'], $_REQUEST['classifiedSubtopic'], $_REQUEST['classifiedStatement'], $imageNameString);
		
		
		if ($classifiedSubmitStmt -> execute ()){
			echo 'Classified Submitted Successfully';
		}
		
		else{
			echo 'Classified FAILED to submit';
		}
		
	}
	*/
	
	
	/*
		This is the updated function for Submitting Classified Ad form (called DIRECTLY by the HTML form "action='classifiedRevies_process.php") created 6-2-2017
	*/
	if (isset ($_POST ['classifiedSubmit']))
	{
		//Step1 uploading file: get info from file
		$file = $_FILES ['file']; //$_FILES is a super global that uses an html form to get all the information for the intended upload file
		//NOTE: the 'file_array[]' name above comes FROM the fact that the file INPUT is NAMED 'file_array[]' inside the html form for submitting the classified ad
		
		print_r ($file);
		
		print_r ($_POST ['classifiedTopic']);
		
		//Extract the information pertaning to the intended upload file
		$fileName = $_FILES ['file']['name'];
		$fileTmpName = $_FILES ['file']['tmp_name'];
		$fileSize = $_FILES ['file']['size'];
		$fileError = $_FILES ['file']['error'];
		$fileType = $_FILES ['file']['type'];
		
		//Extract the EXTENSION of the intended upload file
		$fileNameSplit = explode ('.', $fileName);
		$fileExtension = strtolower (end ($fileNameSplit)); //This gets the EXTENSION of the intended upload file's name because it gets the LAST element in the array from spliiting the file name
		
		//This is an array of the ACCEPTABLE file EXTENSIONS
		$allowedExtension = array ('jpg', 'jpeg', 'png', 'pdf');
		
		
		//Check if the submitted intended upload file has IS allowed to be uploaded (check the intended upload file EXTENSION against allowed extensions)
		if (in_array ($fileExtension, $allowedExtension))
		{
			//Check if ERRORs occurred during the upload process (if 0 errors occurred, continue with uploading process)
			if ($fileError === 0)
			{
				//Check if the file SIZE is small enough (in this case, less than 1 MB)
				if ($fileSize < 1000000)
				{
					//Give the file a UNIQUE name for uploading to prevent the possibility of files with the same names being uploaded and overwriting one another
					$fileNameNew = uniqid ('', true). ".". $fileExtension; //Generates a unique ID based on current time in microseconds then appends the intended upload file's extension
					
					//Declare the destination folder for the upload file
					$fileDestination = (string) 'uploads/'. $fileNameNew;
					
					//Create functionality for moving the intended upload file FROM the TEMPORARY location TO the DECLARED DESTINATION
					move_uploaded_file ($fileTmpName, $fileDestination);
					
					//can issue a redirect upon successful upload by using the "header" function: header ("Location: ....") NOTE replace "...." with the desired browser redirect destination
					//echo "alert ('Upload successful!');";
					
					//Push the posting text to the database
					$classifiedUser = (string) $_SESSION ['u_email'];
					$classifiedDate = (string) date ('D-d-m-Y H:i:s');
					
					$classifiedTopic = (string) $_POST ['classifiedTopic'];
					$classifiedSubtopic = (string) $_POST ['classifiedSubtopic'];
					$classifiedStatement = (string) $_POST ['classifiedStatement'];
					
					var_dump ($fileDestination, $classifiedUser, $classifiedDate, $classifiedTopic, $classifiedSubtopic, $classifiedStatement);
					
					$classifiedSubmitStmtSQL = "INSERT INTO classified_posts (post_date, post_user, post_topic, post_subtopic, post_statement, post_imageNameString) VALUES ('$classifiedDate', '$classifiedUser', '$classifiedTopic', '$classifiedSubtopic', '$classifiedStatement', '$fileDestination')";//{?, ?, ?, ?, ?, ?)"
					
					//$classifiedSubmitStmt -> bind_param ('ssssss', $classifiedDate, $classifiedUser, $classifiedTopic, $classifiedSubtopic, $classifiedStatement, $fileDestination);
					
					if (mysqli_query ($connect, $classifiedSubmitStmtSQL))//$classifiedSubmitStmt -> execute ())
					{
						echo "Classified text data processed successfully";
					}
					
					else
					{
						echo "An error occurred when processing Classified text data";
					}
				}
				
				else
				{
					echo "alert ('Your file is too large');";
				}
			}
			
			else
			{
				echo "alert ('There was an error uploading your file');";
			}
		}
		
		else
		{
			echo "alert ('You cannot upload files of this type');";
		}
	}
	
	
	
	
	
	
	require 'libs/PHPMailer/PHPMailerAutoload.php';
	
	if (isset ($_REQUEST['signupSubmit'])){
		
		//Check if the submitted username/email is alreayd in the users table
		//The following is an UNSECURE method of arranging a SELECT
		/*
		$checkUserPresent_sql = "SELECT * FROM users WHERE u_email = '$_REQUEST[emailSubmit]'";
		
		$checkUserPresent_query = mysqli_query ($connect, $checkUserPresent_sql);
		
		$checkUserPresentCount = mysqli_num_rows ($checkUserPresent_query);
		
		$checkUser = $_REQUEST['emailSubmit'];

		echo "alert ('The Number of Users already present in the USERS Table inside the classified_reviews Database who have the Email of: $checkUser is: $checkUserPresentCount')"; 
		*/
		
		
		
		//This is a SECURE method of checking if the submitted email is in the database
		$checkUserEmail = $_REQUEST['emailSubmit'];
		
		$checkUserPresentStmt = $connect -> prepare ('SELECT * FROM users WHERE u_email = ?');
		
		$checkUserPresentStmt -> bind_param ('s', $checkUserEmail);
		
		$checkUserPresentStmt -> execute ();
		
		$checkUserPresentCount = $checkUserPresentStmt -> get_result ();
		

		//If the email is NOT already in the USERS table inside of classified_reviews, then submit the users info for registration
		if (mysqli_num_rows ($checkUserPresentCount) == 0){
				
			//echo "alert ('Entered the INSERT section of the insert php function for $checkUserEmail')";
				
			//encrypt the password
			$encryptPassword = md5 ($_REQUEST['passwordSubmit']);
			
			
			
			
			
			//This is an UNSECURE method of INSERTING into the database
			/*
			$signup_insert_sql = "INSERT INTO users (u_email, u_first, u_last, u_password) VALUES ('$_REQUEST[emailSubmit]', '$_REQUEST[firstNameSubmit]', '$_REQUEST[lastNameSubmit]', '$encryptPassword')";
		
			$run = mysqli_query ($connect, $signup_insert_sql);
			*/
			
			
			
			
			//This is a SECURE method of INSERTING into the database
			$submitUserStmt = $connect -> prepare ('INSERT INTO users (u_email, u_first, u_last, u_password, u_confirmed, u_confirmcode) VALUES (?, ?, ?, ?, ?, ?)');
			
			$confirmed = ''. 0;
			
			$confirmcode = ''. rand () + rand () + rand ();
			
			$submitUserStmt -> bind_param ('ssssss', $checkUserEmail, $_REQUEST['firstNameSubmit'], $_REQUEST['lastNameSubmit'], $encryptPassword, $confirmed, $confirmcode);
			
			//Create new PHPMailer object
			$m = new PHPMailer;
			
			//Declare that you want the object to use SMTP
			$m -> isSMTP ();
			
			//Set the properties for PHPMailer object
			$m -> SMTPAuth = true;
			$m -> SMTPDebug = 1; //Provide both Error Codes AND Messages for connecting to SMTP
			$m -> Host = 'smtp.juno.com'; //Declare the SMTP Host that will be used
			$m -> Username = 'alphalphinator@juno.com';
			$m -> Password = 'natalie';
			$m -> SMTPSecure = 'ssl'; //Declare the security that will be used
			$m -> Port = 465; //Declare the port that will be used
			
			//Set up the email for sending with PHPMailer
			$m -> From = 'DoNotReply@CleanList.org';
			$m -> FromName = 'Clean List';
			
			//Set up the Reply To email address
			$m -> addReplyTo ('DoNotReply@CleanList.org', 'Do Not Reply');
			
			//Set the email addresses of message recipients
			$m -> addAddress ($checkUserEmail, $_REQUEST['firstNameSubmit']. ' '. $_REQUEST['lastNameSubmit']);
			//$m -> addCC ('alphalphinator@juno.com', 'Shane Jones');
			//$m -> addCC ('sdcarron@gmail.com', 'Steve');
			
			//Arrange the content
			$m -> Subject = 'Clean List Account Activation';
			$m -> Body = "Please follow the link provided to confirm signup. Thank you! <br> <a href=http://localhost/ajax/classifiedReviews_ConfEmail/classifiedReviews_confirmEmail.php?confirmRequest=true&confirmEmailSubmit=$checkUserEmail&confirmCode=$confirmcode> http:://localhost/ajax/classifiedReviews_ConfEmail/classifiedReviews_confirmEmail.php?confirmRequest=true&confirmEmailSubmit=$checkUserEmail&confirmCode=$confirmcode </a>";
			//AltBody is needed in the event that the recipient email client can't display html (AltBody provides plain text)
			$m -> AltBody = 'Please follow the link provided to confirm signup. Thank you! <br> http://localhost/ajax/classifiedReviews_ConfEmail/classifiedReivews_confirmEmail.php?confirmRequest=true&confirmEmailSubmit=$checkUserEmail&confirmCode=$confirmcode';
			
			var_dump ($m -> send ());
			
			/*
			$message =
				
					'Thank you for registering!
					
					Please confirm your email to activate your account.
					
					http://localhost/ajax/classifiedEmailConfirm.html
					';
					
				echo "alert ('Calling the MAIL function to render the email confirmation message')";
					
				$mail = mail ($checkUserEmail, 'CleanList Account Activation', $message, 'From: DoNotReply@CleanList.org');
				
				echo "alert ('Called the MAIL function to render the email confirmation message')";
				
				if ($mail)
				{
					echo "alert ('It appears the email confirmation succeeded')";
				}
				
				else
				{
					echo "alert ('It appears the email confirmation failed')";
				}
				
				echo "alert ('SECURE registratio successful')";
			*/
			
			$result = $submitUserStmt -> execute ();
			//$query = mysql_query ($submitUserStmt);
			
			
			//$result = $submitUserStmt -> get_result ();
			
			//echo "alert ('Registration Result: '. $result)";
			
			
			if ($result)
			{
				/*
				$message =
				
					'Thank you for registering!
					
					Please confirm your email to activate your account.
					
					http://localhost/ajax/classifiedEmailConfirm.html
					';
					
				echo "alert ('Calling the MAIL function to render the email confirmation message')";
					
				$mail = mail ($checkUserEmail, 'CleanList Account Activation', $message, 'From: DoNotReply@CleanList.org');
				
				echo "alert ('Called the MAIL function to render the email confirmation message')";
				
				if ($mail)
				{
					echo "alert ('It appears the email confirmation succeeded')";
				}
				
				else
				{
					echo "alert ('It appears the email confirmation failed')";
				}
				*/
				
				echo "alert ('SECURE registratio successful')";
			}
			
			else{
				echo "alert ('SECURE registration failed even though email was NOT in the database')";
			}
				
			//return "Registration Successful";
		}
		
		else{
			
			//echo "alert ('Sorry, $checkUser is ALREADY in the Database');";
			echo "alert ('Registration Unsuccessul. Username already present in the Database')";
			
		}
	}
	
	
	
	
	
	
		
		
		
		
	
	
	
	
	/*
	if (isset ($_REQUEST['loginSubmit'])){
		
		//The session is STARTED so that IF the submitted user information is accepted and user can log in, then the session username can be set to the log in email
		//session_start ();
		
		//echo "alert ('Entered the PHP Login Confirmation function');";
		
		//$loginUser = mysqli_real_escape_string ($connect, strip_tags ($_REQUEST['emailSubmit']));
		
		//$loginPassword = mysqli_real_escape_string ($connect, strip_tags ($_REQUEST['passwordSubmit']));
		
		//Encrypt password Submitted for LOGN in order to match it to the password in the Database
		$encryptPasswordLogin = md5 ($_REQUEST['passwordSubmit']);
		
		
		//This is the UNSECURE method of SELECT for login
		/*
		$login_sql = "SELECT * FROM users WHERE u_email = '$_REQUEST[emailSubmit]' AND u_password = '$encryptPasswordLogin'";
		
		$run = mysqli_query ($connect, $login_sql);
		* /
		
		
		
		//This is the SECURE method of SELECT for login
		$checkUserPresentStmt = $connect -> prepare ('SELECT * FROM users where u_email = ? AND u_password = ?');
		
		$checkUserPresentStmt -> bind_param ('ss', $_REQUEST['emailSubmit'], $encryptPasswordLogin);
		
		$checkUserPresentStmt -> execute ();
		
		$result = $checkUserPresentStmt -> get_result ();
		
		//$row = mysqli_fetch_assoc ($run);
		
		if(mysqli_num_rows ($result) > 0){//This was used with the UNSECURE method of SELECT for login from above $row = mysqli_fetch_assoc ($run)){
				
				/*
				echo "
						User Account: $row[u_email]\t\t $row[u_last]; $row[u_first]
					 ";
				* /
				
				//echo "alert ('obtaining the result of the current user login')";
				$loggedInUser = $result -> fetch_array ();
				
				
				
				//BEFORE using SESSION, I returned the logged in email and to the classifiedReives.js loginModalSubmit function
				/*
				echo "
						$loggedInUser[u_email]
					 ";
				* /
				
				$_SESSION['u_email'] = $loggedInUser['u_email'];
				
				echo "$_SESSION[u_email]";
				
		}
		
	}
	
	*/
	
	
	
//This is for loggoing out the user	
if (isset ($_REQUEST['logoutSubmit'])){
	
	//session_start ();
	
	$_SESSION['u_email'] = null;
	
	session_destroy ();	
}




//Why can't I just echo out the value of $_SESSION['u_email']? if $_SESSION['u_email'] is NOT set, why is 'u_email' treated as an UNDEFINED INDEX rather than as a NULL value?
//This is for updating the navigation bar for whether a user is logged in or logged out
if (isset ($_REQUEST['loginStatus'])){
	//session_start ();
	if (isset ($_SESSION['u_email'])){
			echo "$_SESSION[u_email]";
	}
	
	
	else{
		echo '';
	}
}
	
	
	
	
	
	
	if (isset ($_REQUEST['classifiedPosts_LoggedInUser'])){
		
		$fetchEmail = $_SESSION['u_email'];
		
		//$userPostsDisplay_sql = "SELECT * FROM classified_posts WHERE post_user = '" + $fetchEmail + "';";	//This is the username used for testing retrieval of user posted classifieds 'Stephen'
		
		//$run = mysqli_query ($connect, $userPostsDisplay_sql);
		
		$fetchLoggedInUserClassifiedListStmt = $connect -> prepare ('SELECT * FROM classified_posts where post_user = ?');
		
		$fetchLoggedInUserClassifiedListStmt -> bind_param ('s', $_SESSION['u_email']);
		
		$fetchLoggedInUserClassifiedListStmt -> execute ();
		
		$result = $fetchLoggedInUserClassifiedListStmt -> get_result ();
		
		while ($rows = $result -> fetch_assoc ()){//mysql_fetch_assoc ($result)){//$rows = mysqli_fetch_assoc ($run)){
			
			echo "
					<tr>
						<td>$rows[post_date]</td>
						
						<td>$rows[post_topic]</td>
						<td>$rows[post_subtopic]</td>
						<td> <a href='classifiedReviews_Post_Template.html'>$rows[post_statement]</a> </td>
					</tr>
				 ";
			
		}
	}
	
	
	
	
	
	
	
	
	
	if (isset ($_REQUEST['subtopicSelection'])){
		
		$subtopicPostsDisplay_sql = "SELECT * FROM classified_posts WHERE post_subtopic = '$_REQUEST[subtopicSelection]'";
		
		$run = mysqli_query ($connect, $subtopicPostsDisplay_sql);
		
		
		while ($rows = mysqli_fetch_assoc ($run)){
			echo "
					<tr>
						
						<td>$rows[post_date]</td>
						<td>$rows[post_id]</td>
						<td>$rows[post_topic]</td>
						<td>$rows[post_subtopic]</td>
						<td> <a href='classifiedReviews_Post_Template.html?$rows[post_id]' class='classified-statement list-display'>$rows[post_statement]</a> </td>
					</tr>
				 ";
			
			//NOTE I passed the post_id as a parameter to the href so that when the classifiedReviews_Post_Template page loads, I can pull the correct information from the database for the posting
		}
	}
	
	
	
	
	
	
	
	if (isset ($_REQUEST ['postDisplayBool']))
	{
		//echo "alert ('Entered the postDisplay function in process.php')";
		
		$postDisplayStmt = $connect -> prepare ("SELECT * FROM classified_posts WHERE post_id = ?");
		
		$postDisplayStmt -> bind_param ('s', $_GET ['postSelection']);
		
		$postDisplayStmt -> execute ();
		
		$result = $postDisplayStmt -> get_result ();
		
		
		$resultArray = array ();
		
		if (mysqli_num_rows ($result) > 0)
		{
			$postInfo = $result -> fetch_array ();
			
			array_push ($resultArray, $postInfo ['post_id'], $postInfo ['post_date'], $postInfo ['post_topic'], $postInfo ['post_subtopic'], $postInfo ['post_statement'], $postInfo ['post_imageNameString']);
		}
		
		$postArray = array ('resultArray' => $resultArray);
		
		echo json_encode ($postArray);
		//echo ('hello post display');
	}
?>