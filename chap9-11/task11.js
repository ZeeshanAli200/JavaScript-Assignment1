var num1=+prompt("Enter 1st Number: ");
var num2=+prompt("Enter 2nd Number: ");
var op=prompt("Enter Operator (+,-,*,/,%): ");

if(op==="+"){
    document.write("After addition: ",num1+num2);
}
else if(op==="-"){
    document.write("After subtracting: ",num1-num2);
}
else if(op==="*"){
    document.write("After Multiply: ",num1*num2);
}
else if(op==="/"){
    document.write("After divide: ",num1/num2);
}
else if(op==="%"){
    document.write("After Percentage: ",(num1/num2)*100,"%");
}