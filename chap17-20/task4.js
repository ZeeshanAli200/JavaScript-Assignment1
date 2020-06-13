var num1 = +prompt("Enter a number to show its multiplication table: ");
var num2 = +prompt("Enter Length of Multplication table: ");
document.write("Multiplication table of ", num1, "<br>", "Length ", num2, "<br><br>")

for (var j = 1; j <= num2; j++) {
    document.write(num1, " x ", j, "=", num1 * j,"<br>")
}

