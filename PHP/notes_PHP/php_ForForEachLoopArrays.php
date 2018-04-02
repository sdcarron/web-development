<!DOCTYPE html>



<html>
	<head>
		<title>Learn php Print Arrays For and For Each Loops</title>
	</head>
	
	
	
	<body>
		<?php 
			//Set the Employees array
			$employees = array ('Manager' => 'Mark', 'Director' => 'John', 'CEO' => 'Doug');
			
			
			
			//Set the Days array
			$days = array ();
			
			$days ['mon'] = 'Monday';
			$days ['tue'] = 'Tuesday';
			$days ['wed'] = 'Wednesday';
			$days ['thu'] = 'Thursday';
			$days ['fri'] = 'Friday';
			$days ['sat'] = 'Saturday';
			$days ['sun'] = 'Sunday';
			
			
			
			//Set the Months array
			$months = array ();
			
			$months [0] = 'January';
			$months [1] = 'February';
			$months [2] = 'March';
			$months [3] = 'April';
			$months [4] = 'May';
			
			
			
			//Set the Fruits array
			$fruits = array ();
			
			$fruits [0] = 'Apple';
			$fruits [1] = 'Banana';
			$fruits [2] = 'Grape';
			$fruits [3] = 'Guava';
			$fruits [4] = 'Straberry';
			
			
			
			//Set the Vegetables array
			$vegetables = array ();
			
			$vegetables [0] = 'Onion';
			$vegetalbes [1] = 'Potato';
			$vegetables [2] = 'Tomato';
			$vegetables [3] = 'Lady Finger';
			
			
			
			
			
			
			//For and For Each Loops for printing the elements of an array
			
			//For Each Loop syntax
			foreach ($months as $month){
				echo 'The current month being printed: '. $month. '<br><br>';
			}
			
			
			//For Loop syntax
			for ($index = 0; $index < sizeof ($fruits); $index++){
				echo 'Current fruit being printed: '. $fruits [$index]. '<br><br>';
			}
		?>
	</body>
</html>