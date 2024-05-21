
var users=[{username:'ali', password:'20242024'},{username:'amine',password:'20242024'}]



function add (){
 var usernamevalue=document.getElementById('in1').value ;
 var passvalue=document.getElementById('in2').value ;

if (passvalue.length<8){
document.getElementById('s1').innerHTML='passeword most cantains 8 caracts'
}
else{
  var user ={};
user.username=usernamevalue ;
user.password=passvalue ;
users.push(user) ;
console.log(users) ;
}
}



function login()  {
    var userNameIn3 = document.getElementById('in3').value;
    var passwordIn4 = document.getElementById('in4').value;
    
    if(userNameIn3==''){
    document.getElementById('s2').innerHTML = "email must be filled out";
    return false;
    
    }else if(passwordIn4==''){
    document.getElementById('s2').innerHTML = "password must be filled out";
    return false;
    }
    
    for (var i=0; i<users.length; i++){
    if(userNameIn3==users[i].username && passwordIn4==users[i].password){
    return true;
    } 
      }

    document.getElementById('s2').innerHTML = "password and username (email) do not match" ;
    
    return false;
    
    }
    