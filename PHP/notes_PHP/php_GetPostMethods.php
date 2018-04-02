<!DOCTYPE html>



<html>
	<head>
		<title>Learn php Get and Post Methods</title>
	</head>
	
	
	
	<body>
		<!-- This element will be used to SEND information to the Page 'php_GetPostMethodsRECEIVER.php' -->
		<!-- the '?' after the target data recipient indicates where the GET Variable APPLIES. the variable name AFTER the '?' is the GET Variable -->
		<!-- NOTE: there CANNOT be ANY white space between the GET Variable NAME, the ASSIGNMENT Operator, or the VALUE -->
		<a href='php_GetPostMethodsRECEIVER.php? getVar1=Pooface McGee'>Send Data</a>
	
		<br><br>
	
		<!-- This is how to send MULTIPLE data pieces to the RECEIVER -->
		<a href='php_GetPostMethodsRECEIVER.php? getVar2=Computer & getVar3=2016 & getVar4=China'>Send MULTIPLE Data</a>
		
		<br><br>
		<?php
				//These next 2 lines do very similar things and each enables the SENDER page (this page) to access all elements of the RECEIVER page 
				//The DIFFERENCE between 'include' and 'requires' is that if the specified file DOES NOT exist, each will throw an error, but 'include'
				//will continue processing after the error occurrence, and 'require' will just completely break (require is more strict)
				include "php_GetPostMethodsRECEIVER.php";
				
				//require "php_GetPostMethodsRECEIVER.php";
				
				
				//require_once allows the specified page to be added ONLY one time UP TO the 'require_once" statement, if that same page is included OR
				//required AFTER the 'require_once' then the specified page will appear again
				require_once "php_GetPostMethodsRECEIVER.php";
				
				//require "php_GetPostMethodsRECEIVER.php";
				
				echo $str1;
		?>
	</body>
</html>