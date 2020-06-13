
var num = +prompt('Enter your name');

if (num == "") {
    for (var j = 1; j <= 12; j++) {
        document.write("5 x ", j, " = ", 5 * j, "<br>");

    }
}
else {

    for (var i = 1; i <= 12; i++) {
        document.write(num," x ", i, " = ", num * i, "<br>");
    }
}

