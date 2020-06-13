var m1="Must Stop",m2="Ready to Move",m3="Move Now";
var sig=prompt("Enter Signal Color: ");
if(sig=="red"||sig=="Red"||sig=="RED"){
    document.write(m1.bold().fontsize(6));
}
else if(sig=="yellow"||sig=="Yellow"||sig=="YELLOW"){
    document.write(m2.bold().fontsize(6));
}
else if(sig=="green"||sig=="Green"||sig=="GREEN"){
    document.write(m3.bold().fontsize(6));
}