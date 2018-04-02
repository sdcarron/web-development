<!DOCTYPE html>



<html>
	<head>
		<title>Learn php Functions</title>
	</head>
	
	
	
	<body>
		<!-- This example shows we can have multiple php scripts in one html body -->
		<?php 
			function func1 (){
				echo 'This line comes from the FUNCTION <br><br>';
			}
			
			echo 'this is a simple line AFTER the function declaration <br><br>';
			
			func1 ();
			
			echo '<br><br><br>';
			
			
			
			
			//This function takes an argument and prints out the value of that argument
			function func2 ($country){
				echo "I live in $country <br><br>";
			}
			
			//Run a For loop and print out each value in BELOW array
			$countries = ['Pakistan', 'India', 'Nepal', 'England', 'Canada', 'Australia', 'China'];
			
			for ($i = 0; $i < count ($countries); $i++)
				//NOTE: ABOVE, 'count' could be replaced with 'sizeof'
			{
				func2 ($countries[$i]);
			}
			
			
			echo '<br><br><br>';
			
			
			//This interaction does something similar as the previous, BUT, this function RETURNS a value
			function func3 ($country){
				$countryPhrase = "I live in $country <br><br>";
				
				return $countryPhrase; 
			}
			
			for ($i = 0; $i < sizeof ($countries); $i++){
				echo func3 ($countries [$i]);
			}
			
			
			
			echo '<br><br><br>';
			
			
			
			//This function CALCULATES a return value
			//The function is CALLED in the SECOND php script area
			function calc1 ($inputA, $inputB){
				$outputA = $inputA + $inputB;
				
				return $outputA;
			}
			
			
			
			//This function calculates the PRODUCT of two input values
			function calc2 ($inputC, $inputD){
				$outputB = $inputC * $inputD;
				
				return $outputB;
			}
			
			
			
			//Declare GLOBAL variables 'inputE' and 'inputF'
			$inputE = 5;
			$inputF = 9;
			
			//This displays use of GLOBAL variables
			function calc3 (){
				
				//This line is expecting 'inputE' and 'inputF' to be LOCAL variables, and because they have NOT been declared LOCALLY, it will produce an error
				//$outputC = $inputE * $inputF;
				
				//In order to use the GLOBAL variables declared previously, use either of these formats:
				//$outputC = global $inputE * global $inputF;
					//OR

				
				$outputC = $GLOBALS['inputE'] * $GLOBALS['inputF'];
				
				return $outputC;
			}
			
			
			
			
			//This shows the use of STATIC variables
			function calc4(){
				static $inputG = 0;
				$inputG++;
				
				return $inputG;
			}
			
		?>
		
		<p>This is a simple Paragraph</p>
		
		<?php 
			func1 ();
			
			echo '<br><br><br>';
			
			//Call the function that calculates a return value
			echo "This is the result of function 'calc1' with paramaters 'inputA = 10' and 'inputB = 64': ";
			
			echo calc1 (10, 64);
			
			
			echo '<br><br><br>';
			
			//Call the function that caculates the PRODUCT
			echo "This is the result of function 'calc2' with parameters 'inputC = 13' and 'inputD = 17': ". calc2 (13, 17);
			
			
			
			echo '<br><br><br>';
			
			//Call the function that caculates the PRODUCT
			echo "This is the result of function 'calc3' with 'inputE = 5' and 'inputF = 9': ". calc3 ();
			
			
			
			echo '<br><br><br>';
			
			//Call the function that caculates the PRODUCT
			echo "This is the result of function 'calc4' with 'inputG = 0' initially: ". calc4 (). "<br>";
			echo "This is the result of calling function 'calc4' a second time (immediately) with 'inputG = 0' initially: ". calc4 (). "<br>";
		?>
	</body>
</html>