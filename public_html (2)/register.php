<?php
$error="";
					$link = mysqli_connect("localhost","u472303742_mainwebsite","Udaykiran@0","u472303742_mainwebsite");
                    if(mysqli_connect_error())
					{
						die("Database connection Error");
					}
					if($error != "")
					{
						$error = "<p>There were errors in your sign up!</p>".$error;
					}
					else
					{
					$query = "INSERT INTO users(name,email,password) VALUES ('".mysqli_real_escape_string($link, $_POST['name'])."',
																		'".mysqli_real_escape_string($link, $_POST['email'])."',
																		'".mysqli_real_escape_string($link, $_POST['password'])."') ";
													if((mysqli_query($link, $query)))
													{
														header("Location:index.html");
													}
													else
													{
													    echo '<script>alert("User name already exists")</script>';
													    header("Location:register.html");
													}
				
					}

				
 ?>

 <div id="error"><?php echo $error; ?></div>
