<!DOCTYPE html>



<html>
	<head>
		<title>Learn php Conditionals, Comparisons, and Logicals</title>
	</head>
	
	
	
	
	<?php 
		$var1 = 8;
		$var2 = 9;
		
		//$var1 = $var2;
		
		//The IF is the most basic Conditionals
		//The '==' is the "IS EQUAL TO" comparison operator
		if ($var1 == $var2){
			echo 'FIRST statement is TRUE: var1 and var2 have equal value <br><br>';
		}
		
		
		
		//The '!=' is the "NOT EQUAL TO" comparison operator
		if ($var1 != $var2){
			echo 'SECOND statement is TRUE: var1 and var2 do NOT have equal value <br><br>';
		}
		
		
		
		//The '>' is the LEFT SIDE is "GREATER THAN" the RIGHT SIDE operator
		if ($var1 > $var2){
			echo 'THIRD statement is TRUE: var1 is GREATER THAN var2 <br><br>';
		}
		
		
		
		//The '<' is the LEFT SIDE is "LESS THAN" the RIGHT SIDE operator
		if ($var1 < $var2){
			echo 'FOURTH statement is TRUE: var1 is LESS THAN var2 <br><br>';
		}
		
		
		
		//The '<>' is another way of saying "NOT EQUAL TO"
		if ($var1 <> $var2){
			echo 'FIFTH statement is TRUE: var1 is NOT EQUAL TO var2 <br><br>';
		}
		
		
		
		//REMEMBER: $var1 = 8 and $var2 = 9
		$var3 = 9;
		
		
		//The '>=' is the LEFT SIDE is "GREATER THAN or EQUAL TO" the RIGHT SIDE operator
		//This is TRUE
		if ($var2 >= $var3){
			echo 'SIXTH statement is TRUE: var2 is GREATER THAN or EQUAL TO var3 <br><br>';
		}
		
		//The '<=' is the LEFT SIDE is "LESS THAN or EQUAL TO" the RIGHT SIDE operator
		if  ($var2 <= $var3){
			echo 'SEVENTH statement is TRUE: var2 is LESS THAN or EQUAL TO var3 <br><br>';
		}
		
		
		
		
		//REMEMBER: $var1 = 8
		$var4 = '8';
		
		//var1 and var4 have the same "value" BUT they have DIFFERENT Data TYPES
		if ($var1 == $var4){
			echo 'EIGHTH statement is TRUE: var1 and var4 have EQUAL values, even though they\'re different DATA TYPES <br><br>';
		}
		
		//var1 and var4 ARE NOT COMPLETELY EQUAL because of their DIFFERENT Data TYPES
		if ($var1 === $var4){
			echo 'NINTH statement is TRUE: var1 and var4 have BOTH equal VALUES AND equal DATA TYPES<br><br>';
		}
		
		
		
		
		
		//LOGICAL Operators
		//This is TRUE because both paris of values are EQUAL, though the DATA TYPES in each pair are UNEQUAL
		if ($var1 == $var4 && $var2 == $var3){
			echo 'TENTH statement is TRUE: var1 == var4, var2 == var3, though the DATA TYPES are DIFFERENT <br><br>';
		}
		
		
		//This is FALSE because ALTHOUGH both paris of values are EQUAL, the DATA TYPES of var1 and var4 are UNEQUAL
		if ($var1 === $var4 && $var2 == $var3){
			echo 'ELEVENTH statement is TRUE: var1 == var4, var2 == var3, though the DATA TYPES are DIFFERENT <br><br>';
		}
		
		
		//This is TRUE because both paris of values are EQUAL, the DATA TYPES of var1 and var4 are UNEQUAL, 
		if ($var1 !== $var4 && $var2 == $var3){
			echo 'TWELFTH statement is TRUE: var1 == var4, var2 == var3, though the DATA TYPES are DIFFERENT <br><br>';
		}
		
		
		//This is TRUE because ALTHOUGH the DATA TYPES of var1 and var4 are UNEQUAL (though their values are equal), var2 and var3 are completely equal
		if ($var1 === $var4 or $var2 === $var3){
			echo 'THIRTEENTH statement is TRUE: var1 == var4 OR var2 == var3 (or maybe both), though the DATA TYPES are DIFFERENT for var1 and var4 <br><br>';
		}
		
		
		//This is is the same as above
		if ($var1 === $var4 || $var2 === $var3){
			echo 'FOURTEENTH statement is TRUE: var1 == var4 OR var2 == var3 (or maybe both), though the DATA TYPES are DIFFERENT for var1 and var4 <br><br>';
		}
		
		
		//This is similar to ABOVE TWO except that ONLY ONE can be true for the ENTIRE condition to be TRUE
		if ($var1 === $var4 xor $var2 === $var3){
			echo 'FIFTEENTH statement is TRUE: var1 == var4 OR var2 == var3 (ONLY ONE), though the DATA TYPES are DIFFERENT for var1 and var4 <br><br>';
		}
		
		
		//This is true IF either the values are NOT equal OR their DATA TYPES are DIFFERENT
		if (!($var1 === $var4)){
			echo 'SIXTEENTH statement is TRUE: var1 != var4 OR their DATA TYPES are DIFFERENT for var1 and var4 OR BOTH (!= AND different DATA TYPES) <br><br>';
		}
	?>
</html>