<!DOCTYPE html>



<html>
	<head>
		<title>Learn php String Functions</title>
	</head>
	
	
	
	<body>
		<?php 
			$str1 = 'hello world';
			
			echo 'ORIGINAL string in VARIABLE (str1): '. $str1. '<br><br>';
			
			
			
			//str_replace substitutes the 2nd parameter, in place of the 1st parameter, inside the 3rd parameter
			echo 'Replacement String Function: '. str_replace ('hello', 'hi', $str1). '<br><br>';
			
			$str2 = str_replace ('hello', 'hi', $str1). '<br><br>';
			
			echo 'Replacement String Function using VARIABLE (str2) for storing result: '. $str2. '<br><br>';
			
			
			//Show that the original string remains unaletered
			echo 'ORIGINAL string in VARIABLE (str1) remains UNCHANGED by the Replacement String Function: '. $str1. '<br><br>';
			
			
			
			//str_word_count returns the NUMBER of WORDS in the submitted string
			echo 'Number of WORDS in ORIGINAL string: '. str_word_count ($str1). '<br><br>';
			
			
			
			//str_repeat REPEATS the submitted string (1st parameter) the NUMBER of submitted times (2nd parameter)
			echo str_repeat ('ME <br>', 10). '<br><br>';
			
			echo "<br><br><br>";
			
			//repeat the string in 'str1'
			echo "Repeate 'str1' with single quotes (variable name CANNOT go inside quote marks)";
			echo str_repeat ($str1. '<br>', 10);
			
			echo "<br><br><br>";
			
			//repeat 'str1' again, using double quotes
			echo "Repeat 'str1' again using double quotes (variable name can go INSIDE quote marks";
			echo str_repeat ("$str1 <br>", 10);
			
			echo "<br><br><br>";
			
			
			
			//stripos LOCATES parameter 2 inside of parameter 1		NOTE: stripos IS CASE SENSITIVE
			$str2 = "We are willing to become a professional web developer";
			
			echo stripos ($str2, "willing");
			
			echo "<br><br><br>";
			
			
			
			//display the SUBSTRING from character position 27 in 'str2'
			echo "This is the SUBSTRING beginning at position 27 in STRING 'str2': ". substr ($str2, 27). "<br>";
			echo "This is the SUBSTRING beginning at position 27 in STRING 'str2' AND EXTENDING from that point for 12 characters: ". substr ($str2, 27, 12). "<br>";
			
			echo "<br><br><br>";
			
			//strtoupper casts 'str1' to be ALL UPPERCASE characters
			//strtolower casts 'str1' to be ALL LOWERCASE characters
			echo "strtoupper is a function that forces ALL CHARACTERS in the submitted string to UPPERCASE: ". strtoupper ($str1). "<br>";
			echo "strtolower is a function that forces ALL CHARACTERS in the submitted string to LOWERCASE: ". strtolower ($str1). "<br>";
			
			echo "<br><br><br>";
			
			//cast the first character to uppercase
			$str3 = "this string is initially all lowercase";
			echo "first character UPPERCASE of 'str3' looks like this: ". ucfirst ($str3). "<br>";
			echo "first character UPPERCASE of each word in 'str3' looks like this: ". ucwords ($str3). "<br>";
			
			echo "<br><br><br>";
			
			
			
			
			
			
			//These are the HTML SPECIFIED string functions
			$str4 = "I am willing to work hard and <script>alert ('PLease! I beg you! Please! Stop!!!');</script> become a <h2>professional</h2> web developer";
		
			//ORIGINAL html information:
			echo $str4;
			
			echo "<br><br><br>";
		
		
			//original information ALL CONVERTED to TEXT, INCLUDING the HTML information
			echo htmlspecialchars ($str4);
			
			echo "<br><br><br>";
			
			
			//original information showing ONLY original text (no HTML tags)
			echo strip_tags ($str4);
			
			echo "<br><br><br>";
		?>
	</body>
</html>