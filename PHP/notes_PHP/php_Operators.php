<!DOCTYPE html>



<html>
	<head>
		<title>Learn php Operators</title>
	</head>
	
	
	
	
	<body>
		<?php
			//Variable declarations
			// '=' is the traditional assignment operator
			$a = 14;
			$b = 2;
			$c = 9;
			
			//Operators
			
				//Addition should produce 16
			$d = $a + $b;
			
			echo 'd = a + b = '. $d. '<br><br>';
			
				//Subtraction should produce 5
			$e = $a - $c;
			
			echo 'e = a - c = '. $e. '<br><br>';
			
				//Multiplication should produce 18
			$f = $b * $c;
			
			echo 'f = b * c = '. $f. '<br><br>';
			
				//Division should produce 7
			$g = $a / $b;
			
			echo 'g = a / b = '. $g. '<br><br>';
			
				//Modulo should produce 5
			$h = $a % $c;
			
			echo 'h = a % c = '. $h. '<br><br>';
			
			
			//NEW Assignemnt Operators
			
				//Add-Assign should produce 18
			$d += $b;
			
			echo 'd NOW = (previous d) + b = a + b + b = '. $d. '<br><br>';
			
				//Subtract-Assign should produce -4
			$e -= $c;
			
			echo 'e NOW = (previous e) - c = a - c - c = '. $e. '<br><br>';
			
				//Multiply-Assign should produce 162
			$f *= $c;
			
			echo 'f NOW = (previous f) * c = a * c * c = '. $f. '<br><br>';
			
				//Divide-Assign should produce 3.5
			$g /= $b;
			
			echo 'g NOW = (previous g) / b = a / b / b = '. $g. '<br><br>';
			
				//Modulo-Assign should produce 5
			$h %= $c;
			
			echo 'h NOW = (previous h) % c = a % c % c = '. $h. '<br><br>';
			
			
			
			
			//Increment and Decrement
			$i = ++$a;
			
			echo 'i = a++ = 1 + '. $a. ' = '. $i;
			echo 'now a = '. $a;
		?>
	</body>
</html>