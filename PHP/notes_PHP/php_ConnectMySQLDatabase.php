<!DOCTYPE html>

<?php
	//These variables store the information needed to connect the database to this page
	$server = 'localhost';
	$username = 'learn_php';
	$password = 'hello123';
	$db = 'learn_php';

	//This variable stores the connection to the database, so that we can interact with the database
	$conn = mysqli_connect ($server, $username, $password, $db);
	
	echo 'Opened the connection <br><br><br>';
	
	
	
	//By convention, the following commands are placed in the html BODY php block
	
	//Retrieve ALL data from the 'users' database
	//$sql = 'SELECT * FROM users';
	
	//Execute the above QUERY on the CONNECTED database
	//$run = mysqli_query ($conn, $sql);
?>


<html>
	<head>
		<title>Learn php Connect with MySQL Database</title>
		
		
		
		
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	</head>
	
	
	
	
	<body>
		<div class='container'>
							
				<div class='jumbotron'>
					<h2>Simple CRUD (Create Read Update Delete: PHP + MySQL)</h2>
				</div>
			
			
				
				
				<?php
					//If the EDIT button has been pressed, DISPLAY the EDIT USER form
					if (isset ($_GET['edit_id'])){
						
						$edit_sql = "SELECT * FROM users WHERE u_id = '$_GET[edit_id]'";
						
						$run = mysqli_query ($conn, $edit_sql);
						
						while ($rows = mysqli_fetch_assoc ($run)){
							
							$name = $rows['name'];
							$email = $rows['email'];
							$password = $rows['password'];
							$contact = $rows['contact'];
						}
						
						?>
						
						<h2>Edit User</h2>
				
						<form class='col-md-4' method='post'>
							<div class='form-group'>
								<label>Username</label>
								
								<input type='text' name='edit_username' class='form-control' value="<?php echo $name; ?>" require></input>
							</div>
							
							
							<div class='form-group'>
								<label>Email</label>
								
								<input type='email' name='edit_email' class='form-control' value="<?php echo $email; ?>" require></input>
							</div>
							
							
							<div class='form-group'>
								<label>Password</label>
								
								<input type='text' name='edit_password' class='form-control' value="<?php echo $password; ?>" require></input>
							</div>
							
							
							<div class='form-group'>
								<label>Contact Number</label>
								
								<input type='text' name='edit_contact' class='form-control' value="<?php echo $contact; ?>"></input>
							</div>
							
							
							<div class='form-group'>
								<!-- This "hidden" element makes it so that the information being updated is NOT VISIBLE -->
								<input type='hidden' name='edit_hidden' value="<?php echo $_GET['edit_id'] ?>"></input>
								<input type='submit' name='edit_user' class='btn btn-primary' value='done editing'></input>
							</div>
						</form>
						
						
						<?php
					}
					
					else {
					//If the EDIT button has NOT been pressed, Display the INSERT NEW USER form
					
					?>
						<h2>Insert New User</h2>
					
						<form class='col-md-4' method='post'>
							<div class='form-group'>
								<label>Username</label>
								
								<input type='text' name='username' class='form-control' require></input>
							</div>
							
							
							<div class='form-group'>
								<label>Email</label>
								
								<input type='email' name='email' class='form-control' require></input>
							</div>
							
							
							<div class='form-group'>
								<label>Password</label>
								
								<input type='password' name='password' class='form-control' require></input>
							</div>
							
							
							<div class='form-group'>
								<label>Contact Number</label>
								
								<input type='text' name='contact' class='form-control'></input>
							</div>
							
							
							<div class='form-group'>
								<input type='submit' name='submit_user' class='btn btn-primary' value='submit'></input>
							</div>
						</form>
				<?php	}
				
				
				
				
			
			
			
				//Display the data OBTAINED from the MySQL query to the database in the ABOVE php block
				
					//Constructed query that specifies to retrieve ALL data from the 'users' database
					$sql = 'SELECT * FROM users';
					
					echo 'arrainged the QUERY <br><br><br>';
					
					//Execute the above QUERY on the CONNECTED database
					$run = mysqli_query ($conn, $sql);
					
					
					
					//Obtain the data that was SPECIFIED FOR RETRIEVAL in the constructed query
					
					/*
					while ($rows = mysqli_fetch_assoc ($run)){
						echo 'User ID: '. $rows['u_id']. '		Name: '. $rows['name']. '		Email: '. $rows['email']. '		Password: '. $rows['password']. '		Signup Date: '. $rows['date']. '		Contact Number: '. $rows['contact']. '<br><br><br>';
						//echo 'In the Data Retrieval Stage';
						
						//echo $rows['name'];
					}
					*/
					
					
					
					
					//this is placed OUTSIDE of the WHILE loop, so that it only displays ONE TIME, rather than once for each loop iteration
					//NOTE the Table is NOT ENDED here, it ends AFTER the while loop
					echo 
							'<table class=table>
								<thead>
									<tr>
										<td>ID Number</td>
										
										<td>Name</td>
										
										<td>Email</td>
										
										<td>Password</td>
										
										<td>Signup Date</td>
										
										<td>Contact Number</td>
										
										<td>Edit</td>
										
										<td>Delete</td>
									</tr>
								</thead>
								
								
								
								<tbody>'
						;
					
					$c = 1;
					//This way for displaying the data is better than the block of code above
					while ($rows = mysqli_fetch_assoc ($run)){
						echo "<tr>
									<!-- <td>$rows[u_id]</td> -->
									<td>$c</td>
									<td>$rows[name]</td>
									<td>$rows[email]</td>
									<td>$rows[password]</td>
									<td>$rows[date]</td>
									<td>$rows[contact]</td>
									<td> <a href='php_ConnectMySQLDatabase.php? edit_id=$rows[u_id]' class='btn btn-success'>Edit</a> </td>
									<td> <a href='php_ConnectMySQLDatabase.php? del_id=$rows[u_id]' class='btn btn-success'>Delete</a> </td>
							  </tr>";
							  
						$c++;
					}
					
					
					//END the table body AND the ENTIRE table
					echo '
							</tbody>
						</table>';
				?>
		
		</div>
	</body>
</html>





<!-- Capture the NEW USER information from the html BODY Form (BEFORE the php block for DISPLAYING user info) -->
<?php
	//IF the SUBMIT button has been pressed, proceed with processing the NEW USER information
	if (isset ($_POST['submit_user'])){
		$user = mysqli_real_escape_string ($conn, strip_tags ($_POST['username']));
		$email = mysqli_real_escape_string ($conn, strip_tags ($_POST['email']));
		$password = mysqli_real_escape_string ($conn, strip_tags ($_POST['password']));
		
		if (isset ($_POST['contact'])){
				$contact = mysqli_real_escape_string ($conn, strip_tags ($_POST['contact']));
		}
		
		
		$date = date ('y-m-d');
		
		//Construct the INSERT query
		$insert_sql = "INSERT INTO users (name, email, password, contact, date) VALUES ('$user', '$email', '$password', '$contact', '$date')";
		
		
		
		if (mysqli_query($conn, $insert_sql)){
			//if the INSERT query is SUCCESSFUL, terminate the preceding PHP OPENING
			?>
			
			<script>window.location = 'php_ConnectMySQLDatabase.php';</script>
			
			
			<!-- OPEN a NEW PHP script in order to CLOSE THIS IF statement -->
			<?php
		}
		
		//$run = mysqli_query ($conn, $insert_sql);
	}	
		
		
		
		
		
		
		
		
		
		
		//if the DELETE button has been pressed for a certain user, delete that information from the database
		if (isset ($_GET['del_id'])){
			
			echo 'the delete button has been pressed, and the user ID to be deleted is: '. $_GET['del_id']. '<br><br>';
			
			$del_sql = "DELETE FROM users WHERE u_id = '$_GET[del_id]'";
			
			if (mysqli_query ($conn, $del_sql)){
				?>
				<script>window.location = 'php_ConnectMySQLDatabase.php';</script>
				
				<?php
			}
		}
		
		
		
		
		
		
		
		
		//if the EDIT button has been pressed for a certain user, allow that user info to be edited
		if (isset ($_POST['edit_user'])){
			$updated_name = mysqli_real_escape_string ($conn, strip_tags ($_POST['edit_username']));
			$updated_email = mysqli_real_escape_string ($conn, strip_tags ($_POST['edit_email']));
			$updated_password = mysqli_real_escape_string ($conn, strip_tags ($_POST['edit_password']));
			$updated_contact = mysqli_real_escape_string ($conn, strip_tags ($_POST['edit_contact']));
			
			$updated_u_id = $_POST['edit_hidden'];
			
			
			$update_sql = "UPDATE users SET name='$updated_name', email='$updated_email', password='$updated_password', contact='$updated_contact' WHERE u_id='$updated_u_id'";
			
			//$update_query = mysqli_query ($conn, $update_sql);
			
			
			if (mysqli_query ($conn, $update_sql)){
				?>
				<script>window.location = 'php_ConnectMySQLDatabase.php'</script>
				<?php
			}
		}
?>