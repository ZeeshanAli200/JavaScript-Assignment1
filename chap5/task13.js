var favSnack="Wavy Chips",curentAge=20,maxAge=60,perday=2,hed1="The Lifetime Supply Calculator";
document.write(hed1.bold().fontsize(6),"<br/><br/><br/>");
document.write("Favourite Snack: ",favSnack,"<br/>Current Age: ",curentAge,"<br/>Estimated Max Age: ",maxAge,"<br/>Amount Of Snack per day: ",perday,"<br/>You Will need ",((maxAge-curentAge)*365)*perday," ",favSnack," to last you until the ripe old age of ",maxAge);