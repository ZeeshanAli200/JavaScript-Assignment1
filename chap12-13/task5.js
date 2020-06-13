var passOr = "321";

var userPass = prompt("Enter Password: ");



if (userPass === passOr) {
    alert("Correct! ");
}
else if(userPass !== passOr&& userPass!=="") {
    alert("Incorrect password");
}
else{
    alert("Please enter your password");

}
