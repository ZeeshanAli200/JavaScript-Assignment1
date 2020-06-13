var arr1= [24, 53, 78, 91, 12];
large=0;

for(var i=0;i<arr1.length;i++){
    if(arr1[i]>large){
        large=arr1[i]

    }

}
document.write("Array items: ",arr1,"<br>")
document.write("The largest number is: ",large)