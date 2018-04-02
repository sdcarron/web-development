<!DOCTYPE html>



<html>
	<head>
		<title>Learn php Loops</title>
	</head>
	
	
	
	
	<body>
		<?php 
		
			//This is the format/syntax for the "For" loop
			for ($i = 1; $i < 10; $i++){
				echo 'This is the '. $i. ' iteration through the For Loop <br>';
				echo "Using the Double Quote marks allows using the variable INSIDE the string statement: $i <br><br><br>";
			}
			
			echo '<br><br><br>';
			
			//This is the format/syntax for the "While" loop
			//FIRST declare the variable for the loop condition test
			$j = 1;
			while ($j < 10){
				echo 'this is the '. $j. ' iteration through the While Loop <br>';
				echo "and THIS is the $j iteration using the DOUBLE quote <br><br>";
				
				$j++;
			}
			
			echo '<br><br><br>';
			
			//This is the format/syntax for the "Do While" loop
			$k = 1;
			
			do {
				echo 'This is the '. $k. ' iteration through the Do While Loop <br>';
				echo "and ThIS is the $k iteration using the DOUBLE quote <br><br>";
				
				$k++;
			} while ($k < 10)
			
		?>
	</body>
</html>