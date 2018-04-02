<!DOCTYPE html>



<html>
	<head>
		<title>Learn php Switch Statement</title>
	</head>
	
	
	
	
	<body>
		<?php 
			$var1 = 7;
			$var2 = 4;
			$var3 = 71;
			
			
			//This is the syntax for a Switch Statement
			//pass the variable/value of interest in as parameter,
			//then try to match that variable/value with a case, and run the appropriate code block
			switch ($var3){
				case 6:
					echo 'var3\'s value is 6';
					break;
					
				case 7:
					echo 'var3\'s value is 7';
					break;
					
				case 8:
					echo 'var3\'s value is 8';
					break;
					
				default:
					echo 'var3 apparently has a value other than the cases provided (6,7,8)';
					break;
			}
			
			echo '<br><br>';
			
			$string1 = 'Stephen';
			
			//Switch statements can be used for strings
			switch ($string1){
				case 'John':
					echo 'The first String case is true: the name is \'John\'';
					break;
					
				case 'Shahzaib':
					echo 'The second String case is true: the name is \'Shahzaib\'';
					break;
					
				case 'Stephen':
					echo 'The third String case is true: the name is \'Stephen\'';
					break;
					
				default:
					echo 'The name does not match ANY of the provided cases (John, Shahzaib, Stephen)';
					break;
			}
		?>
	</body>
</html>