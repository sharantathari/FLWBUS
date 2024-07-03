<?php
session_start();
 $link = mysqli_connect("localhost","u472303742_mainwebsite","Udaykiran@0","u472303742_mainwebsite");
  if(mysqli_connect_error())
  {
    die("Database connection Error");
  }
    $query = "INSERT into emailsaveinfirstpage(email) VALUES('".mysqli_real_escape_string($link, $_POST['email'])."')";
    if(mysqli_query($link, $query))
    {
        header("Location:index.html");
    }

 ?>