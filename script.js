var password = "password";



(function promptPass() {

  var psw = prompt("Enter your Password");

  while (psw !== password) {
    alert("Incorrect Password");
    return promptPass();
  }

}());


alert('WELCOME');
