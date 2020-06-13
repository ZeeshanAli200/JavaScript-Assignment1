var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

var search1 = prompt("Welcome to ABC bakery, What do you want to order sir/ma'am?");
for (var i = 0; i < arr.length; i++) {
    if (search1 === arr[i]) {
        document.write(arr[i], " is available at index ", i, " in our bakery");
        break;
    }    
}
if (search1 != arr[i] && search1 != "") {
    document.write("We are sorry ", search1, " is not available in our bakery");   
}

    


    



