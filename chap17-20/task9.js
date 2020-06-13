var arr1= [24, 53, 78, 91, 12];
large=0;

for(var i=0;i<arr1.length;i++){
    if(arr1[i]>large){
        large=arr1[i]

    }

}

var arr2= [24, 53, 78, 91, 12];


for(var j=0;j<arr1.length;j++){
    if(arr2[j]<large){
        large=arr2[j]

    }

}

document.write("Array items: ",arr1,"<br>")
document.write("The smallest number is: ",large)