<!DOCTYPE html>



<html>
	<head>
		<title>Learn php Obtain Form Data using Get and Post Methods</title>
	</head>
	
	
	
	<body>
	
		<!-- specifying the POST method provides a more secure means of transmitting information like 'password', DEFAULT is 'get' -->
		<form method="post">
		
			<label>User Name</label>
			
			<!-- with Javascript, you access html elements through 'id' or 'class' attribute. In php, you access html elements through 'name' attribute -->
			<input type='text' placeholder='insert user name' name='username'></input>
			
			
			<label>Password</label>
			
			<input type='password' placeholder='insert password' name='password'></input>
			
			<!-- This prevents triggering an error if the submit button is accidentally hit BEFORE any information has been entered -->
			<input type='hidden' value='yes' name='check'></input>
			
			<input type='submit' name='submit'>
		</form>
	
	
		<?php
			//The ABOVE element with name 'check' allows the 'submit' to be pressed, without triggering an error, EVEN when the 'username' field is blank
			/*
			if (isset ($_GET['check'])){
				
				echo $_GET['username']. '<br><br>';
				
				echo $_GET['password']. '<br><br>';
			}
			*/
			
			
			//This is a repeat of the above code EXCEPT that 'POST' is used instead of "GET"
			if (isset ($_POST['check'])){
				
				echo $_POST['username']. '<br><br>';
				
				echo $_POST['password']. '<br><br>';
			}
		?>
	</body>
</html>