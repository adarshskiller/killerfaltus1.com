//Redirecting the login page from the home page
function Opening_login_page(){
    location.replace("Login.html")
}

// EMail , UserName , Password , Confirm Password from the form 
var Email = document.getElementById('Email');
var username = document.getElementById('UserName');
var passsword = document.getElementById('Password');
var Confirm_Password = document.getElementById('Confirm Password');

//storing the values from the signup form 
function store_signup_info(){
    localStorage.setItem('EMail' , EMail.EMail)
}
