<!DOCTYPE html>



<html>
	<head>
		<title>Learn php Get Post Methods RECEIVER</title>
	</head>
	
	
	
	<body>
		<h3>This is the RECEIVER page</h3>
	
		<?php
			//This is how to retrieve the getVar1 that was created in 'php_GetPostMethods.php'
			//echo "On the 'RECEIVER' page, Printing the 'getVar1' that was created on the SENDING page :". $_GET ['getVar1'];
			
			
			//If 'getVar1' was NOT created by SENDING page (php_GetPostMethods.php), the ABOVE print statement would issue an error,
			//because 'getVar1' would NOT EXIST
			
			//This is how to deal with potentially NON EXISTENT variables
			if (isset ($_GET ['getVar1'])){
				echo "In the Variable Existence CHECK method on RECEIVER page, Printing the 'getVar1' created on 'php_GetPostMethods.php': ". $_GET ['getVar1']. "<br><br>";
			}
			
			else{
				echo "Variable does NOT Exist <br><br>";
			}
			
			
			
			if (isset ($_GET['getVar2'])){
				echo "I'm buying a: ". $_GET['getVar2']. '<br>';
				echo "It was made in: ". $_GET['getVar3']. '<br>';
				echo "And it's from: ". $_GET['getVar4']. '<br><br>';
			}
			
			else{
				echo "The Multiple Variable data set is not defined <br><br>";
			}
			
			
			
			//This is going to be dislpayed on the SENDER page, to show that "include" enables the sending page to access all elements of this page (RECEIVER)
			$str1 = "This is the string created in the RECEIVER page, and it is accessed on the SENDER page through 'include'";
		?>
	</body>
</html>