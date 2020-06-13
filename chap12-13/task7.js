var time=+prompt("Enter hours in 24hours clock format: ")

if(time>=0000 && time< 1200){
    alert("Good morning");
}
else if(time>=1200 && time <1700){
    alert("Good Afternoon");
}
else if(time>=1700 && time <2100){
    alert("Good Evening");
}
else if(time>=2100 && time <= 2359){
    alert("Good Night");
}
else{
        alert("Incorrect format of hour");
    
}