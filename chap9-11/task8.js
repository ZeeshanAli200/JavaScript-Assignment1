var mess2="the given number is not divisible by 3",mess1=" the given number is divisible by 3",num=+prompt("Enter your Number: ");
var calc=num%3;
if(calc===0){
    document.write(mess1.bold().fontsize(6),"<br/>");

}
else{
    document.write(mess2.bold().fontsize(6),"<br/>");
    
}