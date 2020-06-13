var num = prompt("Enter any Number: ");

if (num.charCodeAt(0) >= 65 && num.charCodeAt(0) <= 90) {
    document.write(num.charCodeAt(0), " It an Upercase letter");
}
else if (num.charCodeAt(0) >= 97 && num.charCodeAt(0) <= 122) {
    document.write(num.charCodeAt(0), " Its a lowercase letter")

}

if (String.fromCharCode(num) >= "a" && String.fromCharCode(num) <= "z") {
    document.write(String.fromCharCode(num), " 4Its a lowercase letter")
}
else if (String.fromCharCode(num) >= "A" && String.fromCharCode(num) <= "Z") {
    document.write(String.fromCharCode(num), " 5Its an uppercase letter")
}
if (num.charCodeAt(0) >= 48 && num.charCodeAt(0) <= 57) {
    document.write(num.charCodeAt(0), " Its a number")

}


