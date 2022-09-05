//user sample
//username = mor_2314
//password = 83r5^_
var result;
function loginn(){
    //Store email and password input by user in variables
    var email = document.getElementById("email").value
    var userpassword = document.getElementById("password").value
    //Send data (user's email and password) to https://fakestoreapi.com/auth/login
    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: email,
                password: userpassword
            }),
            headers:{
                'Content-Type':'application/json; charset=UTF-8'
            }
        })
        /*
            Get login token in json format from fakestoreapi if username
            and password is correct
        */
        .then((res)=>res.json())
        .then(function(data){
            var result = data.token;
            //Store token as a cookie in browser
            document.cookie = 'token = '+result+";secure;expires=Fri, 20 Jan 5000 23:59:59 GMT;path=/;SameSite=Strict";;
            window.location.href = "products.html";
        })
            //Get error message in console log if there's an error
        .catch((err)=>{
            console.log(err);
            //Shows error message as alert
            alert("wrong username or password")
        })
}