<!DOCTYPE html>



<html>
	<head>
		<title>Learn php Arrays</title>
	</head>
	
	
	
	<body>
		<?php 
			//This is the format for constructing an array
			
			//Index Arrays
			$months = array ();
			
			$months [0] = "January";
			$months [1] = "February";
			$months [2] = "March";
			$months [3] = "April";
			$months [4] = "May";
			$months [5] = "June";
			$months [6] = "July";
			$months [7] = "August";
			$months [8] = "September";
			$months [9] = "October";
			$months [10] = "November";
			$months [11] = "December";
			
			//print 'April'
			echo "Printing Index 3 in 'months': ". $months [3];
			//echo $months [0];
			
			echo '<br><br><br>';
			
			
			
			//This is a SECOND format for constructing an Index Array
			$fruits = array ();
			
			$fruits [] = 'Apple';
			$fruits [] = 'Banana';
			$fruits [] = 'Grapes';
			$fruits [] = 'Guava';
			
			//print 'Grapes'
			echo "Printing Index 2 in 'months': ". $fruits [2];
			
			echo '<br><br><br>';
			
			
			
			//Associative Array
			$days = array ();
			
			$days ['mon'] = 'Monday';
			$days ['tue'] = 'Tuesday';
			$days ['wed'] = 'Wednesday';
			$days ['thu'] = 'Thursday';
			$days ['fri'] = 'Friday';
			$days ['sat'] = 'Saturday';
			$days ['sun'] = 'Sunday';
			
			//print 'Thursday'
			echo "Printing Index 'thu' in 'days': ". $days ['thu'];
			
			echo '<br><br><br>';
			
			
			
			//Array Identifier
			$vegetables = array ('Onion', 'Potato', 'Tomato', 'Lady Finger');
			
			//print 'Onion'
			echo "Printing Index 0 in 'vegetables': ". $vegetables [0];
			
			echo '<br><br><br>';
			
			
			
			//Associative Array Identifier
			$employees = array ('emp1' => 'Doug', 'emp2' => 'Megan', 'emp3' => 'Hillary', 'emp4' => 'Peter');
			
			//print 'Peter'
			echo "Printing 'emp4' in the 'employees' array: ". $employees['emp4'];
			
			echo '<br><br><br>';
			
			
			//Adding a NEW Element to 'fruits' array
			$fruits [4] = 'Strawberries';
			
			echo "Printing Index 4 in 'fruits': ". $fruits [4];
			
			echo '<br><br><br>';
			
			
			
			//Adding a NEW Element to 'days' array
			$days ['mad'] = 'Made Up Day';
			
			echo "Printing 'mad' element from 'days': ". $days ['mad'];
			
			echo '<br><br><br>';
		?>
	</body>
</html>