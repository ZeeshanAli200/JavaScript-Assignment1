var warn1="No need to refuel",warning="Please refill the fuel in your car",remainfuel=+prompt("Remaining fuel in car: ");
var unit=prompt("Unit?");
if(remainfuel<0.25){
    document.write(warning.bold().fontsize(6));

}
else{
    document.write(warn1.bold().fontsize(6));

}