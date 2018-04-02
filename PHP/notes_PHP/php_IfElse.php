<!DOCTYPE html>



<html>
	<head>
		<title>Learn php If Else</title>
	</head>
	
	
	
	
	<body>
		<?php 
			$var1 = 7;
			$var2 = 4;
			
			if ($var1 == $var2){
				echo 'the FIRST conditional is TRUE <br><br>';
			}
			
			else{
				echo 'the FIRST conditional is FALSE <br><br>';
			}
			
			
			
			if ($var1 > $var2){
				echo 'var1 is GREATER THAN var2 <br><br>';
			}
			
			else{
				echo 'var1 is NOT GREATER THAN var2 <br><br>';
			}
			
			
			
			if ($var1 < $var2){
				echo 'var1 is LESS THAN var2 <br><br>';
			}
			
			else if ($var1 > $var2){
				echo 'var1 is GREATER THAN var2 <br><br>';
			}
			
			else{
				echo 'var1 is NEITHER GREATER nor LESS THAN var2 <br><br>';
			}
		?>
	</body>
</html>