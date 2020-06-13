var quan1=+prompt("Quantity of item 1");
var quan2=+prompt("Quantity of item 2");

var shipping=100,price1=650,price2=100,hed1="Shopping Cart";
document.write(hed1.bold().fontsize(6),"<br/><br/><br/>");
document.write("Price of item 1 is ",price1,"<br/>");

document.write("Quantity of item 1 is ",quan1,"<br/>");


document.write("Price of item 2 is ",price2,"<br/>");

document.write("Quantity of item 2 is ",quan2,"<br/>");

document.write("Shipping Charges ",shipping,"<br/><br/><br/>");

document.write("Total Cost of your order is ",(price1*quan1)+(price2*quan2)+shipping,"<br/>");
