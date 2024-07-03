<?php
	session_start();
		$error="";
						$link = mysqli_connect("localhost","u472303742_mainwebsite","Udaykiran@0","u472303742_mainwebsite");
							if(mysqli_connect_error())
							{
								die("Database connection Error");
							}
							{
									$query = "SELECT * FROM `users` WHERE email = '".mysqli_real_escape_string($link, $_POST['email'])."'";
									$result = mysqli_query($link, $query);
						
									$row = mysqli_fetch_array($result);
                                    if(array_key_exists("email", $row))
									{
                    if($_POST['password'] == $row['password']){
											$_SESSION['email']=$_POST['email'];
				                                        $_SESSION['id']=$row['id'];
											header("Location:index.html");}
										else
										{
										$error = "Incorrect password<br>";
										}
									}
							}
					
 ?>
 <div id="error"><?php echo $error; ?></div>