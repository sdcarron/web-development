//Set up the XMLHttpRequest element that will be used by all of the functions in order to pass data between the HTML and PHP/Database
var xmlhttp = new XMLHttpRequest ();













$(document).ready (function (){
									//$('[data-toggle="tooltip"]').tooltip ();
									//$("[rel='tooltip']").tooltip();
									$("body").tooltip({ selector: '[data-toggle=tooltip]' });
									
									/*$('#classifiedEmploymentButton').click (function (){
																								$('#classifiedEmploymentDisplay').toggle ();
																					   }
																		   );
																		   
																		   
																		   
																		   
									$('#classifiedSelfEmploymentButton').click (function (){
																								$('#classifiedSelfEmploymentDisplay').toggle ();
																						   }
																			   );
									*/
									
									
									
									
									/*
									/*Initialize the Location Indication to be the Classifieds Display* /
									$('#classifiedSelector').css ('color', '#5cb85c');
									$('#classifiedSelector').css ('font-weight', 'bold');
									
									
									
									/*Set the Location Indication to be the Classifieds Display* /
									$('#classifiedSelector').click (function (){
																						$('#classified').show ();
																						$('#review').hide ();
																						$('#postedClassified').hide ();
																						
																						
																						$('#classifiedSelector').css ('color', '#5cb85c');
																						$('#classifiedSelector').css ('font-weight', 'bold');
																						$('#reviewSelector').css ('color', 'gray');
																						$('#reviewSelector').css ('font-weight', 'normal');
																						$('#aboutSelector').css ('color', 'gray');
																						$('#aboutSelector').css ('font-weight', 'normal');
																						$('#signupSelector').css ('color', 'gray');
																						$('#signupSelector').css ('font-weight', 'normal');
																						$('#loginSelector').css ('color', 'gray');
																						$('#loginSelector').css ('font-weight', 'normal');
																						$('#usernameSelector').css ('color', 'gray');
																						$('#usernameSelector').css ('font-weight', 'normal');
																						
																			   }
																   );
																   
																   
																   
									/*Set the Location Indication to be the Reviews Display* /					   
									$('#reviewSelector').click (function (){
																					$('#classified').hide ();
																					$('#review').show ();
																					$('#postedClassified').hide ();
																					
																					
																					$('#classifiedSelector').css ('color', 'gray');
																					$('#classifiedSelector').css ('font-weight', 'normal');
																					$('#reviewSelector').css ('color', '#5cb85c');
																					$('#reviewSelector').css ('font-weight', 'bold');
																					$('#aboutSelector').css ('color', 'gray');
																					$('#aboutSelector').css ('font-weight', 'normal');
																					$('#signupSelector').css ('color', 'gray');
																					$('#signupSelector').css ('font-weight', 'normal');
																					$('#loginSelector').css ('color', 'gray');
																					$('#loginSelector').css ('font-weight', 'normal');
																					$('#usernameSelector').css ('color', 'gray');
																					$('#usernameSelector').css ('font-weight', 'normal');
																		   }
															   );
															   
															   
															   
									/*Set the Location Indication to be the Reviews Display* /					   
									$('#aboutSelector').click (function (){
																					//$('#classified').hide ();
																					//$('#review').show ();
																					
																					
																					$('#classifiedSelector').css ('color', 'gray');
																					$('#classifiedSelector').css ('font-weight', 'normal');
																					$('#reviewSelector').css ('color', 'gray');
																					$('#reviewSelector').css ('font-weight', 'normal');
																					$('#aboutSelector').css ('color', '#5cb85c');
																					$('#aboutSelector').css ('font-weight', 'bold');
																					$('#signupSelector').css ('color', 'gray');
																					$('#signupSelector').css ('font-weight', 'normal');
																					$('#loginSelector').css ('color', 'gray');
																					$('#loginSelector').css ('font-weight', 'normal');
																					$('#usernameSelector').css ('color', 'gray');
																					$('#usernameSelector').css ('font-weight', 'normal');
																		   }
															   );
															   
														   
															   
									*/
															   
															   
															   
															   
															   
															   
															   
															   
															   
															   
															   
															   
															   
															   
									/*Set the Location Indication to be the Signup Display*/					   
									$('#signupSelector').click (function (){
																					//$('#classified').hide ();
																					//$('#review').show ();
																					
																					
																					$('#classifiedSelector').css ('color', 'gray');
																					$('#classifiedSelector').css ('font-weight', 'normal');
																					$('#reviewSelector').css ('color', 'gray');
																					$('#reviewSelector').css ('font-weight', 'normal');
																					$('#aboutSelector').css ('color', 'gray');
																					$('#aboutSelector').css ('font-weight', 'normal');
																					$('#signupSelector').css ('color', '#5cb85c');
																					$('#signupSelector').css ('font-weight', 'bold');
																					$('#loginSelector').css ('color', 'gray');
																					$('#loginSelector').css ('font-weight', 'normal');
																					$('#usernameSelector').css ('color', 'gray');
																					$('#usernameSelector').css ('font-weight', 'normal');
																		   }
															   );
															   
															   
															   
															   
									/*Set the Location Indication to be the Login Display*/						   
									$('#loginSelector').click (function (){
																					//$('#classified').hide ();
																					//$('#review').show ();
																					
																					
																					$('#classifiedSelector').css ('color', 'gray');
																					$('#classifiedSelector').css ('font-weight', 'normal');
																					$('#reviewSelector').css ('color', 'gray');
																					$('#reviewSelector').css ('font-weight', 'normal');
																					$('#aboutSelector').css ('color', 'gray');
																					$('#aboutSelector').css ('font-weight', 'normal');
																					$('#signupSelector').css ('color', 'gray');
																					$('#signupSelector').css ('font-weight', 'normal');
																					$('#loginSelector').css ('color', '#5cb85c');
																					$('#loginSelector').css ('font-weight', 'bold');
																					$('#usernameSelector').css ('color', 'gray');
																					$('#usernameSelector').css ('font-weight', 'normal');
																		   }
															   );
															   
															   
															   
															   
								/*Display the Username Dropdown Menu*/							   
								$('#usernameSelector').click (function (){
																					//$('#classified').hide ();
																					//$('#review').show ();
																					
																					
																					$('#classifiedSelector').css ('color', 'gray');
																					$('#classifiedSelector').css ('font-weight', 'normal');
																					$('#reviewSelector').css ('color', 'gray');
																					$('#reviewSelector').css ('font-weight', 'normal');
																					$('#aboutSelector').css ('color', 'gray');
																					$('#aboutSelector').css ('font-weight', 'normal');
																					$('#signupSelector').css ('color', 'gray');
																					$('#signupSelector').css ('font-weight', 'normal');
																					$('#loginSelector').css ('color', 'gray');
																					$('#loginSelector').css ('font-weight', 'normal');
																					$('#usernameSelector').css ('color', '#5cb85c');
																					$('#usernameSelector').css ('font-weight', 'bold');
																					
																		/*			
																					/*Set the Location Indication to be the Reviews Display* /					   
																					$('#postedClassifiedSelector').click (function (){
																																			$('#classified').hide ();
																																			$('#review').hide ();
																																			$('#postedClassified').show ();
																																			
																																			$('#classifiedSelector').css ('color', 'gray');
																																			$('#classifiedSelector').css ('font-weight', 'normal');
																																			$('#reviewSelector').css ('color', 'gray');
																																			$('#reviewSelector').css ('font-weight', 'normal');
																																			$('#aboutSelector').css ('color', 'gray');
																																			$('#aboutSelector').css ('font-weight', 'normal');
																																			$('#signupSelector').css ('color', 'gray');
																																			$('#signupSelector').css ('font-weight', 'normal');
																																			$('#loginSelector').css ('color', 'gray');
																																			$('#loginSelector').css ('font-weight', 'normal');
																																			$('#usernameSelector').css ('color', 'gray');
																																			$('#usernameSelector').css ('font-weight', 'normal');
																																			
																																			
																																			
																																			
																																			//classifiedPosts_LoggedInUser_Display ();
																																   }
																													   );
																													   
																		*/
																		   }
															   );
															   
															   
															   
															   
															   
															   
															   
															   
															   
															   
															   
															   
								/*Display the Classified Post Modal*/							   
								$('#classifiedPostButton').click (function (){
																					$('#inputModalTitle').html ('Classified Post');
									
																					$('#classifiedPostModal').show ();
																					$('#reviewPostModal').hide ();
																					$('#signupModal').hide ();
																					$('#loginModal').hide ();
																					
																					
																					
																					/*For some reason this code for sending FormData w/ images to PHP through ajax doesn't seem to be working
																					var classifiedPostForm = document.getElementById ('classifiedPostForm');
																					var classifiedTopic = document.getElementById ('classifiedTopicInput');
																					var classifiedSubtopic = document.getElementById ('classifiedSubtopicInput');
																					var classifiedStatement = document.getElementById ('classifiedStatementInput');
																					var classifiedPhotos = document.getElementById ('classifiedPhotosInput');
																					var classifiedUploadButton = document.getElementById ('classifiedSubmitButton');

																					alert ('classifiedPostForm is: ' + classifiedPostForm);


																					classifiedPostForm.onSubmit = function (event){
																						
																						alert ('Entered the function for constructing/submitting image files inside of a FormData object');
																						
																						//Prevent the Form from submitting immediately, so that the data can be constructed properly for submission
																						event.preventDefault ();
																						
																						//Update the TEXT of the post button
																						classifiedUploadButton.innerHTML = "Uploading... ";
																						
																						//The rest of the Upload code follows
																						
																						//This gets the selected files (will verify that they are images later)
																						var uploadFiles = classifiedPhotos.files;
																						
																						//Construct a new FormData object
																						var formData = new FormData ();
																						
																						//Make sure that each of the selected files to be uploaded is an images
																						for (var i = 0; i < uploadFiles.length; i++){
																							var file = uploadFiles[i];
																							
																							//If the current file is NOT an image, skip it
																							if (!file.type.match ('image.*')){
																								continue;
																							}
																							
																							//If the current file is an image, append it to the IMAGES to be submitted in the formData
																							formData.append ('photos[]', file, file.name);
																						}
																						
																						
																						var uploadFormDataPhotoNames = '';
																						for (var j = 0; j < formData.photos; j++){
																							uploadFormDataPhotoNames += formData.photos[j].name + ' ';
																						}
																						
																						alert ('uploadFormDataPhotos are: ' + uploadFormDataPhotoNames);
																					}*/
																			 }
																 );
																 
																 
																 
								
								
								
								
								
								
								
								/*Display the Review Post Modal*/								 
								$('#reviewPostButton').click (function (){
																					$('#inputModalTitle').html ('Review Post');
									
																					$('#classifiedPostModal').hide ();
																					$('#reviewPostModal').show ();
																					$('#signupModal').hide ();
																					$('#loginModal').hide ();
																			 }
																 );
																 
																 
																 
								/*Display the Signup Modal*/								 
								$('#signupSelector').click (function (){
																					$('#inputModalTitle').html ('Signup');
									
																					$('#classifiedPostModal').hide ();
																					$('#reviewPostModal').hide ();
																					$('#signupModal').show ();
																					$('#loginModal').hide ();
																			 }
																 );
																 
								/*								 
								$('#pwInitialSignup, #pwConfirmSignup').on ('keyup', function (){
									
									var initialPassword = $('pwInitialSignup').val (),
										confirmPassword = $('pwConfirmSignup').val ();
									
									if (initialPassword != confirmPassword){
		
																			alert ('Passwords Do Not Match. Please Enter Matching Passwords');
																			
																			//return false;
																			$('#pwCheckSignup').html ('Password Match Failure').css ('color', 'red');
																			$('#signupSubmit').disable = true;
																		}
									
								});							 
								*/								 
																 
																 
																 
								/*Display the Login Modal*/								 
								$('#loginSelector').click (function (){
																					$('#inputModalTitle').html ('Login');
									
																					$('#classifiedPostModal').hide ();
																					$('#reviewPostModal').hide ();
																					$('#signupModal').hide ();
																					$('#loginModal').show ();
																			 }
																 );
																 
																 
																 
																 
																 
																 
																 
																 
							
							  }
				  );
				  
				  

			
			
/*Submit the Information entered into the Classified Post Modal*/			
function classifiedModalSubmit (){
	
	alert ('Entered the classifiedModalSubmit function');
	
	
	//Capture the data entered into the CLASSIFIED POST Modal by the user
	var classifiedTopic = document.getElementById ('classifiedTopicInput').value,
		classifiedSubtopic = document.getElementById ('classifiedSubtopicInput').value,
		classifiedStatement = document.getElementById ('classifiedStatementInput').value,
		classifiedImages = document.getElementById ('classifiedPhotosInput').files;
		
		alert ('In the classifiedPostSubmit function in classifiedReviews.js.... the Number of of Images uploaded: ' + classifiedImages.length);
		
		alert ('The Selected images for uploading are: ' + classifiedImages[0].name + '      and ' + classifiedImages[1].name);
		
		alert ('These selected files are of type: ' + Object.prototype.toString.call (classifiedImages[0]) + '      and ' + Object.prototype.toString.call (classifiedImages[1]));
	//alert ('Post Submitted Successfully');
	
	alert ('Finished capturing the Topic, Subtopic, and Statement input values');
	
	//Monitor the readyState and status of the XMLHttpRequest object
	xmlhttp.onreadystatechange = function (){
		
		//Once the RETURN transmission is successfully received AFTER sending data TO PHP/Database, notify about the successful transmission
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			
			alert (xmlhttp.responseText);
			
		}
	}
	
	alert ('Arranging the classifiedModalSubmit AJAX request');
	//Arrange the transmission to SEND the user-submitted informaiton TO PHP/Database
	xmlhttp.open('GET', 'classifiedReviews_process.php? classifiedSubmit='+'classifiedPostModal'+'&classifiedTopic='+classifiedTopic+'&classifiedSubtopic='+classifiedSubtopic+'&classifiedStatement='+classifiedStatement+'&classifiedImages='+classifiedImages, true);
	
	alert ('Sending the classifiedModalSubmit AJAX request');
	
	//SEND the data
	xmlhttp.send();
	
	alert ('Sent the classifiedModalSubmit AJAX request');
	
	//Hide the CLASSIFIED POST Modal NOTE This works for Microsoft Edge Browser, but does not work for Chrome
	//$('#inputModal').hide ();
	
	
	//Reset the FORM that was submitted NOTE This works for Microsoft Edge Browser, but does not work for Chrome
	//$('#classifiedPostForm').reset ();
	
	return false;
	
}










//This function is used to set up the navbar on pageload for EVERY page
function navbarPageLoad (){
	
	alert ('entered navbarPageLoad');
	
	/*
	alert ('loggedInBoolean is: ' + loggedInBoolean);
	
	if (loggedInUser != null){
		
		$('#signupSelector').hide ();
		$('#loginSelector').hide ();
		
		$('#usernameText').html (loggedInUser);
		$('#usernameSelector').show ();
		
		
		
		alert ('loggedInUser is: ' + loggedInUser);
		
		
	}
	
	
	if (loggedInUser == null){
		
		$('#usernameSelector').hide ();
		
		$('#signupSelector').show ();
		$('#loginSelector').show ();
		
		$('#usernameAccountOptions').html ('Signup/Login to Access Account Information');
	}
	
	*/
	
	//This NEW XMLHttpRequest object is needed because some pages require sending asynchronous XMLHttpRequest calls, and if I use a SINGLE XMLHttpRequest object, then the calls conflict,
	//and end up canceling each other out somewhere in the middle of the two processes
	var xmlhttpNavbarLoadRequest = new XMLHttpRequest ();
	
	xmlhttpNavbarLoadRequest.onreadystatechange = function (){
		if (xmlhttpNavbarLoadRequest.readyState == 4 && xmlhttpNavbarLoadRequest.status == 200){
			
			
			alert ('Got a response from the PHP request to check if a user is logged in currently:    readyState is ' + xmlhttpNavbarLoadRequest.readyState + '       and Status is ' + xmlhttpNavbarLoadRequest.status);
			
			//If the responseText is an empty string, then a user is NOT currently logged in, and the navbar should be set to display that a user is NOT currently logged in
			if (xmlhttpNavbarLoadRequest.responseText == ''){
				
				alert ('The value returned from checking if a user is logged in was the EMPTY string');
				
				//$('#usernameSelector').hide ();
		
				//$('#signupSelector').show ();
				//$('#loginSelector').show ();
				
				//if (window.location == 'http://localhost/ajax/classifiedReviews_ConfEmail/classifiedReviews_Post_Submit.html')
				//{
					//document.getElementById ('classifiedPostModal').innerHTML ('');
					//document.getElementById ('classifiedPostModal').innerHTML = 'Please sign up and sign in to submit a listing.';
					
				/*If the user is not logged in, this is to prevent him/her from submitting a listing*/
				/*If the classifiedPostButon exists on the current page, then proceed with preventing submission of listing, if the current user is not logged in*/
				if (document.getElementById ('classifiedPostButton') != null)
				{
					document.getElementById ('classifiedPostButton').setAttribute ('onclick', "");
					document.getElementById ('classifiedPostButton').setAttribute ('data-toggle', 'tooltip');
					document.getElementById ('classifiedPostButton').setAttribute ('title', 'sign in to submit');
				}
				
					
					
				//}
				
				
				
				if (window.location == 'http://localhost/ajax/classifiedReviews_ConfEmail/classifiedReviews_SignupLogin.html?signup')
				{
					$('#accountSelectorPane').html ("<li> <a class='navbar-option signup-login-user-navigation-option' href='classifiedReviews_SignupLogin.html?login' id='loginSelector'>login</a> </li> \
													 <li> <!-- <a class='navbar-option signup-login-user-navigation-option hidden' href='classifiedReviews_SignupLogin.html?signup' id='signupSelector'>signup</a>  --> </li>");
				}
				
				else if (window.location == 'http://localhost/ajax/classifiedReviews_ConfEmail/classifiedReviews_SignupLogin.html?login')
				{
					$('#accountSelectorPane').html ("<li> <a class='navbar-option signup-login-user-navigation-option' href='classifiedReviews_SignupLogin.html?signup' id='signupSelector'>signup</a> </li> \
													 <li> <!-- <a class='navbar-option signup-login-user-navigation-option hidden' href='classifiedReviews_SignupLogin.html?login' id='loginSelector'>login</a> --> </li>");
				}
				
				else
				{
					//$('#accountSelectorPane').html ("<li> <a class='navbar-option signup-login-user-navigation-option' href='classifiedReviews_SignupLogin.html?signup' id='signupSelector'>signup</a> </li> \
					//							 <li> <a class='navbar-option signup-login-user-navigation-option' href='classifiedReviews_SignupLogin.html?login' id='loginSelector'>login</a> </li>");
				
					$('#accountSelectorPane').html ("<li> <form class='form-inline' action='classifiedReviews_signIn.php' enctype='multipart/form-data' method='POST'> \
														<input type='email' class='modal-text-input input-text form-control' placeholder='Email' name='emailSubmit' required></input> \
													\
														<input type='password' class='modal-text-input input-text form-control' placeholder='Password' name='passwordSubmit' required></input> \
													\
														<button class='btn btn-success' name='signinSubmit'>sign in</button> \
													</form> </li><br> \
													\
													\
														<span style='margin-top:25px;' class='navbar-span'>Don't have an account?</span> </li> \
														<a href='javascript:' class='navbar-option'>sign up</a> </li> \
													\
													");
				}
				
		
				$('#usernameAccountOptions').html ('Signup/Login to Access Account Information');
				
				//If the user is currently on the CLASSIFIEDS page and is NOT logged in, notify the user to Signup and/or Login to post a classified, if they click on the classified post button
				if (window.location == 'http://localhost/ajax/classifiedReviews_ConfEmail/classifiedReviews.html'){
					
					$('#classifiedPostModal').html ('Please Signup and | or Login to Post a Classified').css ({'text-align': 'center', 'color': '#5cb85c', 'font-size': '18px', 'font-weight': 'bold'});
				}
				
				//If the user is currently on the REVIEWS page and is NOT logged in, notify the user to Signup and/or Login to post a review, if they click on the review post button
				if (window.location == 'http://localhost/ajax/classifiedReviews_ReviewsHome.html'){
					$('#reviewPostModal').html ('Please Signup and | or Login to Post a Review').css ({'text-align': 'center', 'color': '#5cb85c', 'font-size': '18px', 'font-weight': 'bold'});
				}
			}
			
			//If the responseText is NOT an empty string, then a user IS logged in, and the navbar should be set to display the email = username of user logged in
			else{
				
				alert ('loggedInUser is: ' + xmlhttpNavbarLoadRequest.responseText);
				
				//$('#signupSelector').hide ();
				//$('#loginSelector').hide ();
				
				$('#accountSelectorPane').html ("<li class='dropdown pull-right'> <a class='navbar-dropdown-option' href='#' class='dropdown-toggle' data-toggle='dropdown' id='usernameSelector'> <span id='usernameText'>Account Info</span> <span class='caret'></span> </a> \
													<ul class='dropdown-menu' id='usernameAccountOptions'> \
														<li>submitted reviews</li> \
														<li> <a class='navbar-option dropdown-user-navigation-option' href='classifiedReviews_Post_UserList.html' id='userPostedClassifiedSelector'>my classifieds</a> </li> \
														<li>messages</li> \
														<li> <a class='navbar-option dropdown-user-navigation-option' href='' id='userLogout'>logout</a> </li> \
													</ul> \
												</li>");
				
				$('#usernameText').html (xmlhttpNavbarLoadRequest.responseText);
				$('#usernameSelector').show ();
				
				alert ('loggedInUser is: ' + xmlhttpNavbarLoadRequest.responseText);
				
				alert ('Window Location is: ' + window.location);
				
				if (window.location == 'http://localhost/ajax/classifiedReviews_SignupLogin.html')
				{
					document.location.href = 'http://localhost/ajax/classifiedReviews.html';
				}
				
				
				
				
				/*
				if (window.location == 'http://localhost/ajax/classifiedReviews.html'){
					$('#classifiedPostButton').show ();
				}
				
				if (window.location == 'http://localhost/ajax/classifiedReviews_ReviewsHome.html'){
					$('#reviewPostButton').show ();
				}
				*/
			}
			
			
			
			
			
		}
	}
	
	alert ('Setting up PHP request to check if a user is logged in currently');
	
	xmlhttpNavbarLoadRequest.open ('GET', 'http://192.168.1.174/ajax/classifiedReviews_ConfEmail/classifiedReviews_process.php? loginStatus=inquiry', true);// 'http://localhost/ajax/classifiedReviews_process.php?loginStatus=inquiry', true);// 
	
	alert ('Finished arranging the PHP request to check of a user is logged in currently');
	
	xmlhttpNavbarLoadRequest.send ();
	
	alert ('Sent the PHP request to check if a user is logged in currently');
}








//This function SIGNS Out the User NOTE NOTE NOTE: I will need to incorporate setting the SESSION PHP Variable to NULL
function logout (){
	
	/*
	localStorage.removeItem ('loggedInUser');
	localStorage.removeItem ('loggedInBoolean');
	
	
	$('#usernameText').html ('Account Info');
	$('#usernameAccountOptions').html ('Signup/Login to Access Account Information');
	
	$('#usernameSelector').hide ();
	
	$('#signupSelector').show ();
	$('#loginSelector').show ();
	*/
	
	//alert ('Entered the Signout Script in classifiedReviews.js');
	
	//xmlhttpSignoutRequest = new xmlHttpRequest ();
	
	
	xmlhttp.onreadystatechange = function (){
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			alert ('Signout Successful');
		}
	}
	
	
	alert ('Setting up the Signout Request to send to process.php');
	
	xmlhttp.open ('GET', 'http://192.168.1.174/ajax/classifiedReviews_ConfEmail/classifiedReviews_process.php? logoutSubmit=true', true);
	
	alert ('Finished constructing the Signout Request to send to process.php');
	
	xmlhttp.send ();
	
	alert ('Sent the Signout Request to process.php');
	
}












//This Section of code determines whether the user clicked the SIGNUP or LOGIN button and then displays the appropriate information on "classifiedReviews_SignupLogin.html"
var userSignupLoginInitiationValue;

var userSignupLoginSelection;


//This function identifies whether the user chose the SIGNUP or the LOGIN navigation option and sets a variable to store the selection
$(document).on ('click', '.signup-login-user-navigation-option', function (){
	
	userSignupLoginInitiationValue = this.id;
	
	localStorage.setItem ('userSignupLoginSelection', userSignupLoginInitiationValue);

	//userSignupLoginPopup ();
});


/*
function userSignupLoginPopup (href, this)
{
	alert ('Entered the SignupLoginPopup function and the item selected is: ' + this.id);
	
	window.open (href);
}
*/


function signupLoginPageLoad (){
	
	navbarPageLoad ();
	
	alert ('Entered signupLoginPageLoad function');
	
	userSignupLoginSelection = localStorage.getItem ('userSignupLoginSelection');
	
	alert ('user selection is: ' + userSignupLoginSelection);
	
	/* This needs to be done ONLY when NOONE is logged in... If someone is logged in, redirect to the user's account page*/
	switch (userSignupLoginSelection){
		
		case 'signupSelector':
			
			$('#signupLoginContainer').html ("<div class='col-md-3 col-md-offset-5' id='signupModal'> \
								\
								<div class='col-md-12'> \
									\
									<h3 class='col-md-4 col-md-offset-2' id='signupID'>Signup</h3> \
									\
								</div> \
								\
								\
								\
								\
								<form id='signupForm' onsubmit='signupModalSubmit ();'> \
									<!-- This is the SIGNUP modal onsubmit = return false;--> \
									\
									<div class='form-group'> \
										<label for='emailSignup'>Email</label> \
										\
										<input class='form-control modal-text-input' type='email' placeholder='Enter Email Address' id='emailSignup' required></input> \
									</div> \
									\
									\
									\
									<div class='form-group'> \
										<label for='firstNameSignup'>First Name</label> \
										\
										<input class='form-control modal-text-input' type='text' placeholder='Enter First Name' id='firstNameSignup' required></input> \
									</div> \
									\
									\
									\
									<div class='form-group'> \
										<label for='lastNameSignup'>Last Name</label> \
										\
										<input class='form-control modal-text-input' type='text' placeholder='Enter Last Name' id='lastNameSignup' required></input> \
									</div> \
									\
									\
									\
									<div class='form-group'> \
										<label for='pwInitialSignup'>Enter Password</label> \
										\
										<input class='form-control modal-text-input' type='password' placeholder='Enter Password' id='pwInitialSignup' required></input> \
									</div> \
									\
									\
									\
									\
									<div class='form-group'> \
										<label for='pwConfirmSignup'>Confirm Password</label> \
									\
										<input class='form-control modal-text-input' type='password' placeholder='Confirm Password' id='pwConfirmSignup' required></input> \
									</div> \
									\
									<!-- \
									<div class='col-md-6'> \
										<h6 id='pwCheckSignup'></h6> \
									</div> \
									--> \
									\
									\
									<div class='form-group col-md-12'> \
										<div class='col-md-3 col-md-offset-3 text-left'> \
											<button class='btn btn-success' id='signupSubmit'>Submit</button> \
										</div> \
										\
										<!-- \
										<div class='col-md-6 text-right'> \
											<button class='btn btn-post-close' data-dismiss='modal'>Cancel</button> \
										</div> \
										--> \
									</div> \
								</form> \
							</div> \
							");
			//$('#signupModal').show ();
			//$('#loginModal').hide ();
			break;
			
		case 'loginSelector':
			$('#signupLoginContainer').html ("<div class='col-md-3 col-md-offset-5' id='loginModal'> \
								\
								<div class='col-md-12'> \
									<h3 class='col-md-4 col-md-offset-2' id='loginID'>Login</h3> \
								</div> \
								\
								\
								\
								<form id='loginForm' action='classifiedReviews_signIn.php' enctype='multipart/form-data' method='POST'> \
									<!-- This is the LOGIN modal onsubmit='return loginModalSubmit ();' --> \
									<div class='form-group'> \
										<label for='emailLogin'>Email</label> \
										\
										<input type='email' class='form-control modal-text-input' id='emailLogin' name='emailSubmit' placeholder='Enter Email' required></input> \
									</div> \
									\
									<div class='form-group'> \
										<label for='pwLogin'>Password</label> \
										\
										<input type='password' class='form-control modal-text-input' id='pwLogin' name='passwordSubmit' placeholder='Enter Password' required></input> \
									</div> \
									\
									<div class='form-group col-md-12'> \
										<div class='col-md-3 col-md-offset-3 text-left'> \
											<button class='btn btn-success' id='loginSubmitButton' name='loginSubmit'>Submit</button> \
										</div> \
										\
										<!-- \
										<div class='col-md-2'></div> \
										\
										<div class='col-md-3 text-right'> \
											<button class='btn btn-post-close' data-dismiss='modal'>Cancel</button> \
										</div> \
										--> \
									</div> \
								</form> \
							</div> \
							");
			//$('#loginModal').show ();
			//$('#signupModal').hide ();
			break;
	}

	//For some reason the Logged In User is being lost once the loginProcess completes inside loginModalSubmit function(and classifiedReivews_SignupLogin.html refreshes)
	
	
	alert ('in the signupLoginPageLoad function... loggedInUser is: ' + loggedInUser);
	
	
	/*This should be done on EVERY single page on page load, IF someone is logged in*/
	
}






function signupModalSubmit (){
	
	alert ('Entered the Signup Modal Submit Function');
	
	var initialPassword = document.getElementById ('pwInitialSignup').value,
		confirmPassword = document.getElementById ('pwConfirmSignup').value;
		
	alert ('Verifying if Passwords match');
	
	if (initialPassword != confirmPassword){
		
		alert ('Passwords Do Not Match. Please Enter Matching Passwords');
		
		//return false;
		document.getElementById ('pwCheckSignup').style.color = 'red';
		document.getElementById ('pwCheckSignup').innerHTML = 'Password Match Failure';
		//document.getElementById ('pwCheckSignup').css ('color', 'red');
		
		//$('#signupSubmit').disable = true;
		
		return false;
	}
	
	
	alert ('Passwords Matched!');
		
		//document.getElementById ('pwCheckSignup').style.color = 'white';
		//document.getElementById ('pwCheckSignup').innerHHTML = '';
		
		var email = document.getElementById ('emailSignup').value,
		firstName = document.getElementById ('firstNameSignup').value,
		lastName = document.getElementById ('lastNameSignup').value;
	
	
		xmlhttp.onreadystatechange = function (){
			
			alert ('SIGN UP readyState: ' + xmlhttp.readyState + '       SIGN UP status: ' + xmlhttp.status);
			
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200 || xmlhttp.readyState == 4 && xmlhttp.status == 0){
				//alert ('Submitted Signup Info to Database');
				
				//$('#inputModal').hide ();
		
		//$('#signupForm').reset ();
		
		//return false;
		
				//window.location.replace ("http://localhost/ajax/classifiedReviews_ConfEmail/classifiedReviews.html");
				$('#signupLoginContainer').html ('Please respond to confirmation request sent to the email provided');
				//alert (xmlhttp.responseText);
				
				//$('#inputModal').show ();
				
				//alert ('This comes after trying to show the inputModal following user registration');
				
			}
			
		}
		
		
		alert ('Setting up the AJAX xmlhttprequest to send to classifiedReviews_process.php');
		
		
		xmlhttp.open ('GET', 'classifiedReviews_process.php? signupSubmit=true&emailSubmit='+email+'&firstNameSubmit='+firstName+'&lastNameSubmit='+lastName+'&passwordSubmit='+confirmPassword, true);
		
		alert ('SENDING the AJAX xmlhttprequest to classifiedReviews_process.php');
		
		xmlhttp.send ();
		
		alert ('SENT the AJAX xmlhttprequest to classifiedReviews_process.php');
		

	//Why does the 'return false' line cause 'data-background=static' to hang for the 'inputModal' in 'classifiedReviews.html'? this isn't a problem with the other functions
	//in this 'js' file.
	//$('#inputModal').hide ();
	
	
	//The 'return false' line was allowing the 'data-backdrop=static' to hang because the 'hide.bs.modal' operation wasn't being allowed to fully complete, so I added this function
	//to resolve the problem mentioned above. It seems to work properly now.
	//$('#inputModal').on ('hidden.bs.modal', function (){
		
		//alert ('Attempting to close without returning');
		
		//return false;
	//});
		//$('#signupForm').reset ();
		
		//return false;
	
}














function loginModalDisplay (){
	$('#inputModal').show ();
	$('#loginModal').show ();
}


function loginModalControl (){
	
	/*
	alert ('Entered the loginModalCONTROL function');
	
	//var resultString = loginModalSubmit ();
	//loginModalSubmit ();
	
	alert ('The RESULT STRING in the loginModalCONTROL is: ' + loggedInUser);
	
	//if (resultString == '' || resultString == undefined){
	if (loggedInBoolean == false || loggedInUser == ''){
		alert ('user FAILED to Login');
		
		$('#inputModal').on ('hide.bs.modal', function (){
			//$('#inputModal').show ();
			//$('#loginModal').show ();
			loginModalDisplay ();
		});
		
		
		//return false;
	}
	
	
	else {
			alert ('Log In SUCCESS Result: ' + loggedInBoolean + '        AND User is: ' + loggedInUser);
			
			alert ('back in the loginModalCONTROL function getting ready to HIDE the Modal');
			
			$('#inputModal').hide ();
			
			
			//The 'return false' line was allowing the 'data-backdrop=static' to hang because the 'hide.bs.modal' operation wasn't being allowed to fully complete, so I added this function
			//to resolve the problem mentioned above. It seems to work properly now.
			$('#inputModal').on ('hide.bs.modal', function (){
				
				alert ('Attempting to close without returning');
				
				return false;
			});
	}
	*/
	
	loginModalSubmit ();
	
	//loginSuccess ();
	alert ('In the loginModalCONTROL function and about to call navbarPageLoad RIGHT AFTER calling loginModalSubmit');
	
	navbarPageLoad ();
}



function loginSuccess(){
	
	alert ('entered loginSuccess function');
	
	loggedInBoolean = localStorage.getItem ('loggedInBoolean');
	
	alert ('loggedInBoolean has a value of: ' + loggedInBoolean);
	
	if (loggedInBoolean == false){
		
		alert ('User Failed to Login... Please Try to Login Again');
		
		$('#inputModal').show ();
	$('#loginModal').show ();
		
	}
	
	else{
		
		loggedInUser = localStorage.getItem ('loggedInUser');
		
		alert ('The person logged in is: ' + loggedInUser);
	}
	
	return alert ('entered loginSuccess Function');
	
}



//This is a variable to monitor whether a user is logged in 
var loggedInBoolean = localStorage.getItem ('loggedInBoolean');

//This is a variable to store WHO is logged in (WHEN a user is logged in)
var loggedInUser = localStorage.getItem ('loggedInUser');


//This function allow the user to LOG IN NOTE NOTE NOTE: I need to utilize the SESSION PHP variable
function loginModalSubmit (){
	alert ('Entered the Login Modal Submit function');
	
	var email = document.getElementById ('emailLogin').value,
		loginPassword = document.getElementById ('pwLogin').value;
		
		
	var xmlhttpLoginRequest = new XMLHttpRequest ();
		
	var ajaxUserLoginQueryResponseString = '';
	
	alert ('Submitted LOGIN Email is: ' + email + 'AND Submitted LOGIN Password is: ' + loginPassword);
	
	xmlhttpLoginRequest.onreadystatechange = function (){
		
		alert ('Entered onreadystatchange function     readyState is: ' + xmlhttpLoginRequest.readyState + '     and status is: ' + xmlhttpLoginRequest.status);
		
		if (xmlhttpLoginRequest.readyState == 4 && xmlhttpLoginRequest.status == 200 && xmlhttpLoginRequest.responseText != ''){
			
			
			//alert (xmlhttp.responseText);
			
			//return;
			
			
			window.location.replace ("http://localhost/ajax/classifiedReviews_ConfEmail/classifiedReviews.html");
			
			
			/*
			//return xmlhttp.responseText;
			
			alert ('Response Text from Login Query is: ' + xmlhttp.responseText);
			
			ajaxUserLoginQueryResponseString = xmlhttp.responseText;
			
			//return ''+ ajaxUserLoginQueryResponseString;
			
			alert ('Still Evaluating the Response STring inside of loginModalSUBMIT');
			
			if (ajaxUserLoginQueryResponseString == ''){
				//loggedInBoolean = false;
				localStorage.setItem ('loggedInBoolean', false);
				
				//loggedInUser = '';
				localStorage.setItem ('loggedInUser', '');
				
				//loggedInBoolean = localStorage.getItem ('loggedInBoolean');
				//loggedInUser = localStorage.getItem ('loggedInUser');
				
				alert ('user Failed to Login');
				
				return false;
				
				//
			}
			
			else{
				//loggedInBoolean = true;
				localStorage.setItem ('loggedInBoolean', true);
				
				//loggedInUser = ajaxUserLoginQueryResponseString;
				localStorage.setItem ('loggedInUser', ajaxUserLoginQueryResponseString);
				
				//loggedInBoolean = localStorage.getItem ('loggedInBoolean');
				//loggedInUser = localStorage.getItem ('loggedInUser');
				
				alert ('user SUCCESSFULLY Logged in. That user is: ' + ajaxUserLoginQueryResponseString);
				
				$('#usernameText').innerHTML = loggedInUser;
				
				return false;
				
				//return 'SUCCESS/loggedInUser is: ' + loggedInUser;
				
				//$('#inputModal').hide ();
				
				//return;// false;
				//loginModalControl ();
			}
			*/
			
			
			
			
			
			
			
			
			
			
			
			/*
			if (xmlhttp.responseText != ''){
				
				alert ('User SUCCESSFULLY Logged In');
				
				alert (xmlhttp.responseText);
				
				//I'm not sure how to get the user name TEXT to update in the navigation bar area
				document.getElementById ('usernameText').value = xmlhttp.responseText;
				
				alert ('Username is now: ' + document.getElementById ('usernameText').value);
				
				$('#inputModal').hide ();
	
				//$('#loginForm').reset ();
	
				return false;
			}
			
			else{
				alert ('User FAILED to Log In');
				
				$('#inputModal').on ('hide.bs.modal', function (){
					preventDefault ();
				});
				
				//$('#inputModal').show ();
				return false;
			}
			*/
		}
		
		else
		{
			window.location.replace ("http://localhost/ajax/classifiedReviews_ConfEmail/classifiedReviews_SignupLogin.html?login");
		}
		
	}
	
	alert ('Setting up AJAX xmlhttprequest to send to classifiedReviews_signIn.php');
	
	xmlhttpLoginRequest.open ('GET', 'http://192.168.1.174:80/ajax/classifiedReviews_ConfEmail/classifiedReviews_signIn.php? loginSubmit=true&emailSubmit='+email+'&passwordSubmit='+loginPassword, true);
	
	alert ('Sending AJAX xmlhttprequest to classifiedReviews_process.php');
	
	xmlhttpLoginRequest.send ();
	
	alert ('Sent AJAX xmlhttprequest to classifiedReviews_process.php');
	
	//$('#inputModal').hide ();
	
	//$('#loginForm').reset ();
	
	//return false;
	
	
	
}




























/* This was a really Effective way of figuring out which item was clicked from two COMPLETELY separate locations on the home page:
The first location was the dropdown USER navigation menu, and the second location was any one of the classified SUBTOPIC links
This system allowed me to identify which of these two kinds of "unrelated" links was pressed AND that then enabled me to
display the appropriate information, using only one single webpage*/

/*
//This variable is used to identify whether the User's dropdown menu OR a classified subtopic was used to call the "classified list display" html page
var triggerClass_ClassifiedPosts_List;

var dropdownSelection = null;

//If the User's dropdown navigation menu was used to call the 'classified list display' html page, then arrange for the page to display the classifieds POSTED BY the User
$(document).on ('click', '.dropdown-user-navigation-option', function (){
	alert ('The User Navigation Menu item that was selected is: ' + this.text);
	
	//classifiedPosts_LoggedInUser_Display ();
	dropdownSelection = this.text;
	
	sessionStorage.setItem ('dropdownSelection', dropdownSelection);
	
	//This is used to inform the 'classified list display' html page that it will be dislpaying the User's CLASSIFIED POSTS List
	triggerClass_ClassifiedPosts_List = '.dropdown-user-navigation-option';
	
	localStorage.setItem ('triggerClass_ClassifiedPosts_List', triggerClass_ClassifiedPosts_List);
});



//Display ALL CLASSIFIED POSTS created by the CURRENT LOGGED IN User
function classifiedPosts_LoggedInUser_Display (){
	
	//This monitors the xmlhttp ready state and status for a response from PHP/Database
	xmlhttp.onreadystatechange = function (){
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			
			//This sets the BODY of Table with ID 'postedClassifiedTableDisplay' to be the response text from PHP/Database
			document.getElementById ('postedClassifiedTableDisplay').innerHTML = xmlhttp.responseText;
			
			alert ('Finished Displaying the CURRENT User\'s posted classifieds!');
			
		}
		
	}
	
	//This sets the AJAX call to PHP/Database
	xmlhttp.open ('GET', 'classifiedReviews_process.php? classifiedPosts_LoggedInUser=yes', true);
	//This sends the AJAX call
	xmlhttp.send ();
}





//This variable captures the SPECIFIC SUBTOPIC item that was selected (so the correct List of Classified Ads can be displayed)
var subtopicSelection = null;

//Display ALL CLASSIFIED POSTS related to the CLICKED SUBTOPIC
//This first function identifies WHICH subtopic item was clicked
$(document).on ('click', '.classified-subtopic', function (){
	//alert (this.id);
	//classifiedPosts_Subtopic_Display (this);
	alert ('Selected Subtopic BEFORE trying to store its value: ' + this.text);
	
	//This captures the classified subtopic item that was pressed
	subtopicSelection = this.text;
	
	localStorage.setItem ('subtopicSelection', subtopicSelection);
	
	alert ('subtopicSelection set to be: ' + subtopicSelection);
	
	//This informs the 'classified list display' html page that it will be displaying the Classified Ad List for a SUBTOPIC
	triggerClass_ClassifiedPosts_List = '.classified-subtopic';
	
	localStorage.setItem ('triggerClass_ClassifiedPosts_List', triggerClass_ClassifiedPosts_List);
	
});

//This function sets up the AJAX call in order for PHP to display all posts related to the clicked subtopic
function classifiedPosts_Subtopic_Display(/*subtopicSelection* /){
	subtopicSelection = localStorage.getItem ('subtopicSelection');
	alert ('Subtopic Selected: ' + subtopicSelection);
	
	//Display ONLY the classified posts related to the SUBTOPIC that was selected
	//$('#classified').hide ();
	//$('#review').hide ();
	//$('#postedClassified').show ();
	
	
	//alert ('Testing for what the selected subtopic is: ' + subtopicSelection.text);
	
	xmlhttp.open ('GET', 'classifiedReviews_process.php? subtopicSelection='+subtopicSelection, true);
	
	xmlhttp.send ();
	
	xmlhttp.onreadystatechange = function (){
		
		if (xmlhttp.readyState == 0){
			alert ('xmlHttpRequest NOT Initialized for displaying SubTopic Classified Ads');
			alert ('The Selected Subtopic, though, is: ' + subtopicSelection);
		}
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			//Set the Table Data for (postedClassifiedTableDisplay) to be the classified posts related to the SUBTOPIC element that was selected
			//$('postedClassified').show ();
			//alert ('The Subtopic that was clicked on the classifieds home page is: ' + subtopicSelection.text);
			document.getElementById ('postedClassifiedTableDisplay').innerHTML = xmlhttp.responseText;
		}
	}
}


//When the 'classified list display' html page is loaded, it will be calling either the SUBTOPTIC or USER display function, and the correct function is called based on
//the value of the varible 'triggerClass_ClassifiedPosts_List', the value for hte variable is set in the two preceding sections
function classifiedListPageLoad (){
	
	alert ($(location).attr ('pathname'));
	
	if ($(location).attr ('pathname') == '/ajax/classifiedReviews_Post_ClassifiedList.html'){
		
	triggerClass_ClassifiedPosts_List = localStorage.getItem ('triggerClass_ClassifiedPosts_List');
		
	alert ('Now showing the Posted Classifieds LIST html page... trying to figure out how to call the appropriate list population function');
		
		
		
		switch (triggerClass_ClassifiedPosts_List){
			case '.classified-subtopic':
				classifiedPosts_Subtopic_Display ();
				break;
				
			case '.dropdown-user-navigation-option':
				classifiedPosts_LoggedInUser_Display ();
				break;
		}
	
	}
	
	
}
*/



















/*This section of code is CALLED BY clicking one of the DROPDOWN USER NAVIGATION MENU links in the NAVBAR ALSO
This section is the code that runs to DISPLAY data on 'classifiedReviews_Post_UserList.html' */


var userListDisplayInitiationValue;

var userListDisplaySelection;

$(document).on ('click', '.dropdown-user-navigation-option', function (){
	alert ('The User Navigation Menu item that was selected is: ' + this.text);
	
	//classifiedPosts_LoggedInUser_Display ();
	
	if (this.id != 'userLogout'){
		
		userListDisplayInitiationValue = this.id;
	
		localStorage.setItem ('userListDisplaySelection', userListDisplayInitiationValue);
	
	}
	
	else{
		logout();
	}
	
	
	//loggedInUserList_Display (userListDisplaySelection);
});

//Display ALL CLASSIFIED POSTS created by the CURRENT LOGGED IN User
function loggedInUserList_Classified_Display (/*userListDisplaySelection*/){
	
	//userListDisplaySelection = localStorage.getItem ('userListDisplaySelection');
	
	alert ('Now the User List Display html page has loaded. The user selected to display the list associated with: ' + userListDisplaySelection);
	
	//This monitors the xmlhttp ready state and status for a response from PHP/Database
	xmlhttp.onreadystatechange = function (){
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
				
				//$('#userClassified').show ();
				$('#userReview').hide ();
				
				alert ('Populating the Logged In User CLASSIFIED Table');
				
				//This sets the BODY of Table with ID 'postedClassifiedTableDisplay' to be the response text from PHP/Database
				//$('#userClassifiedTableDisplay').innerHTML = xmlhttp.responseText;
				document.getElementById ('userClassifiedTableDisplay').innerHTML = xmlhttp.responseText;
				alert ('Response for Logged In User Classifieds LIST: ' + xmlhttp.responseText);
			
			alert ('Finished Displaying the CURRENT User\'s posted classifieds!');
			
		}
		
	}
	
	//This sets the AJAX call to PHP/Database
	//If the link pressed is the 'my classifieds' link, then make this CLASSIFIED call
	xmlhttp.open ('GET', 'classifiedReviews_process.php? classifiedPosts_LoggedInUser=yes', true);
	
	
	//This sends the AJAX call
	xmlhttp.send ();
}




function loggedInUserList_Review_Display (){
	
	xmlhttp.onreadystatechange = function (){
	
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
				
				if (userListDisplaySelection == 'userPostedReviewSelector'){
					
					
					alert ('Populating the Logged In User REVIEW Table');
					
					//This sets the BODY of Table with ID  'userReviewTableDisplay' to be a response text from PHP/Database
					document.getElementById ('userReviewTableDisplay').innerHTML = xmlhttp.responseText;
					
				}
				
		}
	}
	
	//This sets the AJAX call to PHP/Database
	//If the link pressed is the 'my reviews' link, then make this REVIEW call
	xmlhttp.open ('GET', 'classifiedReviews_process.php? reviewPosts_LoggedInUser=yes', true);
	
	//This sends the AJAX call
	xmlhttp.send ();
	
}



function userListPageLoad (){
	
	alert ('Deciding whether to call the CLASSIFIED List Display function or the REVIEW List Display Function');
	
	userListDisplaySelection = localStorage.getItem ('userListDisplaySelection');
	
	alert ('RETRIEVED userListDisplaySelection is: ' + userListDisplaySelection);
	
	switch (userListDisplaySelection){
		
		case 'userPostedClassifiedSelector':
		
			$('#userClassified').show ();
			$('#userReview').hide ();
			loggedInUserList_Classified_Display ();
			
			break;
			
			
		case 'userPostedReviewSelector':
		
			$('#userReview').show ();
			$('#userClassified').hide ();
			loggedInUserList_Review_Display ();
			
			break;
		
	}
	
}


















/*This section of code is CALLED BY clicking one of the SUBTOPIC links on 'classifiedReviews.html' ALSO
This section is the code that runs to DISPLAY data on 'classifiedReviews_Post_ClassifiedList.html' */
var classifiedListDisplayInitiationValue;

var subtopicListDisplaySelection;

$(document).on ('click', '.classified-subtopic', function (){
	classifiedListDisplayInitiationValue = this.text;
	
	alert ('subtopicListDisplaySelection is being set to value of: ' + classifiedListDisplayInitiationValue);
	
	localStorage.setItem ('subtopicListDisplaySelection', classifiedListDisplayInitiationValue);
	
	alert ('subtopicListDisplaySelection HAS BEEN set to: ' + subtopicListDisplaySelection);
	
	//subtopicList_Display (subtopicListDisplaySelection);
});


function subtopicListPageLoad (/*subtopicListDisplaySelection*/){
	
	navbarPageLoad ();
	
	subtopicListDisplaySelection = localStorage.getItem ('subtopicListDisplaySelection');
	
	alert ('RETRIEVED subtopicListDisplaySelection is: ' + subtopicListDisplaySelection);
	
	var xmlhttpSubtopicListRequest = new XMLHttpRequest ();
	
	xmlhttpSubtopicListRequest.onreadystatechange = function (){
		
		if (xmlhttpSubtopicListRequest.readyState == 4 && xmlhttpSubtopicListRequest.status == 200){
			
			alert ('Populating the SUBTOPIC Classified List Table with the appropriate informaiton');
			
			document.getElementById ('postedClassifiedTableDisplay').innerHTML = xmlhttpSubtopicListRequest.responseText;
			
			$('#postedClassifiedTableDisplay').show ();
			
			alert ('Information matching the selected subtopic: ' + xmlhttpSubtopicListRequest.responseText);
		}
		
	}
	
	
	xmlhttpSubtopicListRequest.open ('GET', 'classifiedReviews_process.php? subtopicSelection=' + subtopicListDisplaySelection, true);
	
	xmlhttpSubtopicListRequest.send ();
	
	
	
}









$(document).on ('click', '.classified-statement list-display', function (){
	
	alert ('Clicked on a classified list display STATEMENT item');
	
	//classifiedListDisplayInitiationValue = this.text;
	
	//alert ('subtopicListDisplaySelection is being set to value of: ' + classifiedListDisplayInitiationValue);
	
	//localStorage.setItem ('subtopicListDisplaySelection', classifiedListDisplayInitiationValue);
	
	//alert ('subtopicListDisplaySelection HAS BEEN set to: ' + subtopicListDisplaySelection);
	
	//subtopicList_Display (subtopicListDisplaySelection);
});



function classifiedPostPageLoad ()
{
	navbarPageLoad ();
	
	alert ('Entered classifiedPost_Display');
	
	var postID = location.href.split ('?') [1];
	
	alert ('Preparing to display information for post id: ' + postID);
	
	xmlhttp.onreadystatechange = function (){
		
		alert (xmlhttp.readyState + " " + xmlhttp.status);
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			//alert ('Hooray, classifiedPost_Display function response FROM PHP has been reached');
			//document.getElementById ('postDisplayTitleTopic').innerHTML = 'This is a test';
			
			alert (xmlhttp.responseText);
			
			var postArray = JSON.parse (xmlhttp.responseText);
			//$postInfo ['post_id'], $postInfo ['post_date'], $postInfo ['post_topic'], $postInfo ['post_subtopic'], $postInfo ['post_statement'], $postInfo ['post_imageNameString']
			
			var classifiedPostTopic = postArray ['resultArray'][2];
			document.getElementById ('postDisplayTitleTopic').innerHTML = classifiedPostTopic;
			
			var classifiedPostSubtopic = postArray ['resultArray'][3];
			document.getElementById ('postDisplayTitleSubtopic').innerHTML = classifiedPostSubtopic;
			
			var classifiedPostDate = postArray ['resultArray'][1];	
			var classifiedPostDescription = postArray ['resultArray'][4];
			//alert ("classified Post Description extracted from the php json response: " + classifiedPostDescription);
			document.getElementById ('classifiedPostDescriptionDisplay').innerHTML = classifiedPostDate + "<br><br>" + classifiedPostDescription;
			
			
			
			
			
			var classifiedPostFileString = postArray ['resultArray'][5];
			var classifiedPostFileArray = classifiedPostFileString.split (' ');
			
			document.getElementById ('classifiedPostFileDisplay').innerHTML = "";
			
			for (var i=0; i<classifiedPostFileArray.length; i++)
			{
				//I need to replace '/' with whatever the path separator is for the server OS
				var currentFileName = classifiedPostFileArray [i].replace ('\\', '');
				var currentFileRepresentation = document.createElement ('img');
				
				currentFileRepresentation.src = currentFileName;
				currentFileRepresentation.setAttribute ('height', '100px');
				
				document.getElementById ('classifiedPostFileDisplay').appendChild (currentFileRepresentation);//classifiedPostFileArray [i]);
			}
			
			
			//alert (postArray);
		}
		
	}
	
	xmlhttp.open ('GET', 'classifiedReviews_process.php? postDisplayBool=true&postSelection=' + postID, true);
	
	xmlhttp.send ();
}











function postSubmit (signinStatus)
{
	//navbarPageLoad ();
	
	var screenHeight = screen.height;
	
	window.open ('http://192.168.1.174/ajax/classifiedReviews_ConfEmail/classifiedReivews_Post_Submit.html',"", "width=500, height="+screenHeight);
	
	if (signinStatus == 'false')
	{
		//alert ('No User signed in for Listing Submit');
		//document.getElementById ('classifiedPostModal').innerHTML = "";
		//document.getElementById ('classifiedPostModal').innerHTML = 'Please sign up and sign in to submit a listing';
		//alert ("Tried to reset classifiedPostModal div innerHTML content");
		
		document.getElementById ('classifiedPostModal').append ("Please sign up and sign in to submit listings");
	}
	
	else
	{
		document.getElementById ('classifiedPostModal').append ("")
	}
	
	//document.getElementById ('classifiedSubtopicInput').disabled = true;
	$('#self-employmentSubtopicInput').hide ();
	$('#formal-employmentSubtopicInput').hide ();
	$('#buy-sell-tradeSubtopicInput').hide ();
	$('#housing-resourcesSubtopicInput').hide ();
	$('#community-resourcesSubtopicInput').hide ();
}


function setSubcategoryInput (value)
{
	alert ('Entered setSubcategoryInput function');
	
	var categoryInput = value;//document.getElementById ('classifiedTopicInput').value ();
	
	alert ('Category Selected is: ' + categoryInput);
	
	
	
	
	if (categoryInput == 'self employment')
	{
		/*
		accessory | clothing
account | finance
advertise | brand | market
advise | consult
art | media | design
automotive | maint
beauty | hair | spa
b and b | lodging
child care
construction | maint
culinary
decoration | design
delivery | transport
education
entertain | event
errand
farm | produce
fitness | nutrition
general business
general labor
health care
hospice
landscape | maint
legal
manufacturing
model | promote
organize | plan
pet care
technology
	*/
		
		document.getElementById ('classifiedSubtopicContainer').innerHTML = "";
		
		$('#classifiedSubtopicContainer').append ("<label for='classifiedSubtopicInput'>Post Subtopic</label> \
																			\
																			\
																			<select type='text' class='form-control modal-text-input' id='self-employmentSubtopicInput' name='classifiedSubtopic'> \
																				<!-- <option selected disabled>Subcategory</option> --> \
																				<option>accesory | clothing</option> \
																				<option>account | finance</option> \
																				<option>advertise | brand | market</option> \
																				<option>advise | consult</option> \
																				<option>art | media | design</option> \
																				<option>automotive | maint</option> \
																				<option>beauty | hair | spa</option> \
																				<option>b and b | lodge</option> \
																				<option>child care</option> \
																				<option>construction | maint</option> \
																				<option>culinary</option> \
																				<option>decoration | design</option> \
																				<option>deliver | transport</option> \
																				<option>education</option> \
																				<option>entertain | event</option> \
																				<option>errand</option> \
																				<option>farm | produce</option> \
																				<option>fitness | nutrition</option> \
																				<option>general business</option> \
																				<option>general labor</option> \
																				<option>health care</option> \
																				<option>hospice</option> \
																				<option>landscape | maint</option> \
																				<option>legal</option> \
																				<option>manufacture</option> \
																				<option>model | promote</option> \
																				<option>organize | plan</option> \
																				<option>pet care</option> \
																				<option>technology</option> \
																			</select> \
																			");
	}
	
	
	
	else if (categoryInput == 'formal employment')
	{
		
/*
	        account | finance
    admin | office
    advertise | brand | market
    arch | engineer
    art | media | design
    biotech | science
    business
    craft | skilled trade
    customer service
    dental | health | medical
    edit | write
    education
    film | tv | video
    fitness | nutrition
    food | beverage
    general labor
    government
    graphic | web design
    it | network | systems
    hospitality
    human resource
    legal
    management
    manufacture
    nonprofit
    real estate
    retail | wholesale
    sales
    salon | spa
    security
    software | qa
    tech support
    transport

    miscellaneous
    part-time
    resumes
    ride share


*/
		document.getElementById ('classifiedSubtopicContainer').innerHTML = "";
		
		$('#classifiedSubtopicContainer').append ("<label for='classifiedSubtopicInput'>Post Subtopic</label> \
																			\
																			\
																			<select type='text' class='form-control modal-text-input' id='formal-employmentSubtopicInput' name='classifiedSubtopic'> \
																				<!-- <option selected disabled>Subcategory</option> --> \
																				<option>account | finance</option> \
																				<option>admin | office</option> \
																				<option>arch | engineer</option> \
																				<option>art | design | media</option> \
																				<option>biotech | science</option> \
																				<option>business | development</option> \
																				<option>craft | skilled trade</option> \
																				<option>customer service</option> \
																				<option>dental | health | medical</option> \
																				<option>edit | write</option> \
																				<option>education</option> \
																				<option>film | tv | video</option> \
																				<option>food | beverage</option> \
																				<option>general labor</option> \
																				<option>government</option> \
																				<option>graphic | web design</option> \
																				<option>it | network | systems</option> \
																				<option>hospitality</option> \
																				<option>human resource</option> \
																				<option>legal</option> \
																				<option>management</option> \
																				<option>manufacture</option> \
																				<option>nonprofit</option> \
																				<option>real estate</option> \
																				<option>retail | wholesale</option> \
																				<option>sales</option> \
																				<option>salon | spa</option> \
																				<option>security</option> \
																				<option>software | qa</option> \
																				<option>tech support</option> \
																				<option>transport</option> \
																				<option disabled></option> \
																				<option>miscellaneous</option> \
																				<option>part time</option> \
																				<option>resume</option> \
																				<option>ride share</option> \
																			</select> \
																			");
	}
	
	
	
	else if (categoryInput == 'buy | sell | trade')
	{
		
		/*
			

    antique
    appliance | household
    art | craft
    athletic | sport
    atv | snow | utv
    auto part
    baby | child
    barter
    beauty | health
    bicycle
    boat | camper | rv | trailer
    book
    car | truck
    cds | dvd | vhs
    clothes | accessory
    collectible
    computer
    electronic
    farm | garden
    free
    furniture | household
    game | toy
    general
    heavy equipment
    jewelry
    material
    motorcycles
    music instrument
    office
    outdoor | sport
    photo | video
	
    phone | tablet
    ticket
    tool
    video game
    wanted


		*/
		
		document.getElementById ('classifiedSubtopicContainer').innerHTML = "";
		
		$('#classifiedSubtopicContainer').append ("<label for='classifiedSubtopicInput'>Post Subtopic</label> \
																			\
																			\
																			<select type='text' class='form-control modal-text-input' id='formal-employmentSubtopicInput' name='classifiedSubtopic'> \
																				<!-- <option selected disabled>Subcategory</option> --> \
																				<option>accessory | clothing</option> \
																				<option>antique</option> \
																				<option>appliance | household</option> \
																				<option>art | craft</option> \
																				<option>athletic | sport</option> \
																				<option>atv | snow | utv</option> \
																				<option>auto part</option> \
																				<option>baby | child</option> \
																				<option>barter</option> \
																				<option>beauty | health</option> \
																				<option>bicycle</option> \
																				<option>boat | camper | rv | trailer</option> \
																				<option>book</option> \
																				<option>car | truck</option> \
																				<option>cd | dvd | vhs</option> \
																				<option>collectible</option> \
																				<option>computer</option> \
																				<option>electronic</option> \
																				<option>farm | garden</option> \
																				<option>furniture | household</option> \
																				<option>game | toy</option> \
																				<option>general</option> \
																				<option>heavy equipment</option> \
																				<option>jewelry</option> \
																				<option>material</option> \
																				<option>motorcycles</option> \
																				<option>music instrument</option> \
																				<option>office</option> \
																				<option>outdoor | sport</option> \
																				<option>photo | video</option> \
																				<option>phone | tablet</option> \
																				<option>ticket</option> \
																				<option>tool</option> \
																				<option>video game</option> \
																				<option disabled></option> \
																				<option>free</option> \
																				<option>wanted</option> \
																			</select> \
																			");
	}
	
	
	
	else if (categoryInput == 'housing resources')
	{
		//updateSubcategoryList (categoryInput);
		//var subcategoryInputList = $('#classifiedSubtopicInput');//document.getElementById ('classifiedSubtopicInput');
		
		//document.getElementById ('classifiedSubtopicInput').disabled=false;
		//subcategoryListInput.disabled = false;		
		
		/*
		var option1 = document.createElement ('option');
		option1.textContent = 'apts | housing';
		subcategoryListInput.add (option1);
		*/
		
		/*
		$('#self-employmentSubtopicInput').hide ();
		$('#formal-employmentSubtopicInput').hide ();
		$('#buy-sell-tradeSubtopicInput').hide ();
		$('#housing-resourcesSubtopicInput').show ();
		$('#community-resourcesSubtopicInput').hide ();
		*/
		
		/*
    apts | housing
	for sale | real estate
    housing offered
    housing wanted
    office | commercial
    parking | storage   
    rooms | shared
    rooms wanted
    sublets | temporary
    vacation | time share
	*/
		
		
		document.getElementById ('classifiedSubtopicContainer').innerHTML = "";
		
		$('#classifiedSubtopicContainer').append ("<label for='classifiedSubtopicInput'>Post Subtopic</label> \
																			\
																			\
																			<select type='text' class='form-control modal-text-input' id='housing-resourcesSubtopicInput' name='classifiedSubtopic'> \
																				<!-- <option selected disabled>Subcategory</option> --> \
																				<option>apts | housing</option> \
																				<option>for sale | real estate</option> \
																				<option>housing offered</option> \
																				<option>housing wanted</option> \
																				<option>office | commercial</option> \
																				<option>park | storage</option> \
																				<option>room | offered</option> \
																				<option>room | wanted</option> \
																				<option>sublet | temporary</option> \
																				<option>vacation | time share</option> \
																			</select> <br>\
																			\
																			\
																			\
													<label for='hrSubtopicTransaction'>Transaction Type</label> <br>\
													<input type='radio' id='hrTransactionOffer' class='' name='hrSubtopicTransaction' value='offer' required>Offer</input> \
													<input type='radio' id='hrTransactionWant' class='' name='hrSubtopicTransaction' value='want' required>Want</input> <br><br>\
																			\
																			\
																			\
													<label for='hrSubtopicIntent'>Transaction Intent</label> <br>\
													<input type='radio' id='hrIntentOwn' class='' name='hrSubtopicIntent' value='own' required>Own</input> \
													<input type='radio' id='hrIntentRent' class='' name='hrSubtopicIntent' value='rent' required>Rent</input> <br><br>\
																			\
																			\
																			\
													<label for='hrSubtopicSQFT'>Size (square feet)</label> \
													<input type='text' class='form-control modal-text-input' id='hrSubtopicSize' pattern='[0-9]{1,4}' placeholder='measurement in 0 - 9999 format' required></input> <br>\
																			\
																			\
																			\
													<label for='hrSubtopicValue'>Price (local currency)</label> <br>\
													<input type='text' class='form-control modal-text-input' id='hrSubtopicPrice' pattern='[0-9]{1,7}' placeholder='price in 0 - 9999999 format' required></input> \
																			");
																   
														   
	}
	
	else if (categoryInput == 'community resources')
	{
		
		/*
		

    activities
    artists
    childcare
    classes
    events
    general
    groups
    localÂ news
    musicians
    pets
    politics
    rideshare
    volunteers
    garage sale
    lost | found


		*/
		
		document.getElementById ('classifiedSubtopicContainer').innerHTML = "";
		
		
		$('#classifiedSubtopicContainer').append ("<label for='classifiedSubtopicInput'>Post Subtopic</label> \
																			\
																			\
																			<select type='text' class='form-control modal-text-input' id='community-resourcesSubtopicInput' name='classifiedSubtopic'> \
																				<!-- <option selected disabled>Subcategory</option> --> \
																				<option>activity</option> \
																				<option>art</option> \
																				<option>child care</option> \
																				<option>class</option> \
																				<option>event</option> \
																				<option>garage sale</option> \
																				<option>general</option> \
																				<option>group</option> \
																				<option>local news</option> \
																				<option>lost | found</option> \
																				<option>music</option> \
																				<option>pet</option> \
																				<option>politic</option> \
																				<option>ride share</option> \
																				<option>service | volunteer</option> \
																			</select> \
																			\
																			\
																			\
																			\
													<label for='community-resourcesSubtopicDate'>Event Time</label> \
													<input type='text' id='crSubtopicDate' class='form-control modal-text-input' pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}' placeholder='Date in MM/DD/YYYY format' required></input> \
													\
													\
													\
													<label for='community-resourcesSubtopicLocation'>Event Location</label> \
													<input type='text' id='crSubtopicLocation' class='form-control modal-text-input' placeholder='Location' required></input> \
																			");
		
	}
	
}





function classifiedSubmitCheck ()
{
	alert ('Entered the classifiedSubmitCheck function');
	
	if (document.getElementById ('classifiedPhotosInput').value != '')
	{
		alert ('The classifiedPhotosInput FILE input did NOT have emptyString value');
		
		if (document.getElementById ('classifiedTopicInput').value == 'housing resources')
		{
			alert ('The classifiedTopicInput SELECT input has a value of: housing resources');
			
			var hrSubtopicTransaction = '';
			if (document.getElementById ('hrTransactionOffer').checked == true)
			{
				hrSubtopicTransaction = document.getElementById ('hrTransactionOffer');
			}
			else
			{
				hrSubtopicTransaction = document.getElementById ('hrTransactionWant');
			}
			
		
			var hrSubtopicIntent = '';
			if (document.getElementById ('hrIntentOwn').checked == true)
			{
				hrSubtopicIntent = document.getElementById ('hrIntentOwn');
			}
			else
			{
				hrSubtopicIntent = document.getElementById ('hrIntentRent');
			}
			
			var hrSubtopicSize = document.getElementById ('hrSubtopicSize');
			var hrSubtopicPrice = document.getElementById ('hrSubtopicPrice');
			
			var hrSubtopicStatement = document.getElementById ('classifiedStatementInput');
			
			
			alert ('hrSubtopicIntent has value: ' + hrSubtopicIntent.value);
			alert ('hrSubtopicTransaction has value: ' + hrSubtopicTransaction.value);
			
			alert ('hrSubtopicSize has value: ' + hrSubtopicSize.value);
			alert ('hrSubtopicPrice has value: ' + hrSubtopicPrice.value);
			
			alert ('hrSubtopicStatement has value: ' + hrSubtopicStatement.value);
			
			if (hrSubtopicIntent.value != '' && hrSubtopicTransaction.value != '' && hrSubtopicSize.value != '' && hrSubtopicPrice.value != '' && hrSubtopicStatement.value != '')
			{
				//alert ('Ready to Submit.. now need to enable the Post SUBMIT Button');
				document.getElementById ('classifiedSubmitButton').disabled = false;
			}
			
		}
		
		
		
		
		if (document.getElementById ('classifiedTopicInput').value == 'community resources')
		{
			alert ('The classifiedTopicInput SELECT input has a value of: community resources');
			
			var crSubtopicDate = document.getElementById ('crSubtopicDate');
			var crSubtopicLocation = document.getElementById ('crSubtopicLocation');
			var crSubtopicStatement = document.getElementById ('classifiedStatementInput');
			
			alert ('crSubtopicDate has value: ' + crSubtopicDate.value);
			alert ('crSubtopicLocation has value: ' + crSubtopicLocation.value);
			alert ('crSubtopicStatement has value: ' + crSubtopicStatement.value);
			
			if (crSubtopicDate.value != '' && crSubtopicLocation.value != '' && crSubtopicStatement.value != '')
			{
				//alert ('Ready to Submit.. now need to enable the Post SUBMIT Button');
				document.getElementById ('classifiedSubmitButton').disabled = false;
			}
		}
	}
}
