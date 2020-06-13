var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
document.write("var result = --a - --b + ++b + b-- :Output is ",result,"<br/>");
document.write("In --a there is preincrement in which 1 will be subtracted in a so --a=1 in which value of a is also 1<br/>");
document.write("In --b there is preincrement in which 1 will be subtracted in a so --b=0 in which value of b is also 0<br/>");


document.write("In ++b there is preincrement in which 1 will be added in a so ++b=1 in which value of b is also 1<br/>");


document.write("In b-- there is postincrement in which 1 will be subtracted in b so b--=0 in which value of b is also 1<br/>");
document.write("Our Answer is 3 because the first 3 are preincrements in which first calculation is performed so it will become (1-0+1) but in last post increment in which previous calculated value is printed in it that is 1<br/>");
