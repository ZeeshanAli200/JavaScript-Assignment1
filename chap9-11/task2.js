var g1 = "Good Morning Sir"; g2 = "Good Morning Ma'am"; gen = prompt("Your Gender: ");

if (gen == "male"||gen == "Male"||gen == "MALE") {
    document.write(g1.bold().fontsize(6));
} else if (gen == "female"||gen == "Female"||gen == "FEMALE") {
    document.write(g2.bold().fontsize(6));

}
else{
    document.write("Incorrect Gender");

}