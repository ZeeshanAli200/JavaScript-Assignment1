var mess3="Not even close Haha",mess2="Close enough to the correct answer",mess1="Bingo! Correct answer",secretNum=6;
var guess=+prompt("Guess the number from 0-10!!");
if(guess===secretNum){
    document.write(mess1.bold().fontsize(6),"<br/>");

}
else if(guess === --secretNum){

    document.write(mess2.bold().fontsize(6),"<br/>");

}
else{
    document.write(mess3.bold().fontsize(6),"<br/>");

}