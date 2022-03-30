function register()
{
  document.getElementById("error").style.display = "none";


  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var dob = document.getElementById("dob").value;
  var checkbox = document.getElementById("checkbox").checked;

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("checkbox").value = "";

  if(validateCheckBox(checkbox) && validateDOB(dob)  && 
    validateEmail(email) && validatePassword(password) && 
    validateUsername(username)){
      location.replace("../html/home.html")
    }
}

function validateCheckBox(checkbox) {
  if(!checkbox)
  {
    document.getElementById("error").innerHTML = "You must agree the terms and conditions!";
    document.getElementById("error").style.display = "block";
  }
  return true;

}
function validateDOB(dob)
{
  var year = dob.substring(0, 4);
  if(year < 1900 || year > 2022){
    document.getElementById("error").innerHTML = "Please input a valid year!";
    document.getElementById("error").style.display = "block";
  }
  return true;

}

function validateEmail(email)
{
  if(!email.endsWith(".com")){
    document.getElementById("error").innerHTML = "Please input a valid email!";
    document.getElementById("error").style.display = "block";
  }
  return true;

}
  
  function validatePassword(password){
    var lengthPwd = password.length;
    var uppercase = false;
    for(var i = 0; i< lengthPwd; i++)
    {
      if(password.charAt(i) == password.charAt(i).toUpperCase())
      {
        uppercase = true;
        break;
      }
    }
    if(!uppercase)
    {
      document.getElementById("error").innerHTML = "Please input min 1 upper case!";
      document.getElementById("error").style.display = "block";
    }
    return true;
  }
  function validateUsername(username)
  {
    if(username.length < 3 || username.length > 10)
    {
      document.getElementById("error").innerHTML = "Please input 3 - 10 characters in username!";
      document.getElementById("error").style.display = "block";
    }
  return true;

  }