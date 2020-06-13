var markshet="Marksheet";
var sub1=+prompt("Enter Obtained Marks of Subj 1: ");

var sub2=+prompt("Enter Obtained Marks Subj 2: ");

var sub3=+prompt("Enter Obtained Marks Subj 3: ");
var total=+prompt("Enter Total Marks: ");

document.write(markshet.bold().fontsize(6),"<br/><br/>");
calPer=((sub1+sub2+sub3)/total)*100;
if(calPer>=80&&calPer<=100){
document.write("Total Marks: ",total,"<br/>","Marks Obtained: ",sub1+sub2+sub3,"<br/>","Percentage: ",calPer,"%<br/>","Grade: A one<br/>Remarks: Excellent");    
}
else if(calPer>=70&&calPer<80){
    document.write("Total Marks: ",total,"<br/>","Marks Obtained: ",sub1+sub2+sub3,"<br/>","Percentage: ",calPer,"%<br/>","Grade: A<br/>Remarks: Good");    
    }
    else if(calPer>=60&&calPer<70){
        document.write("Total Marks: ",total,"<br/>","Marks Obtained: ",sub1+sub2+sub3,"<br/>","Percentage: ",calPer,"%<br/>","Grade: B<br/>Remarks: You need to improve");    
        }
        else if(calPer<60&&calPer>0){
            document.write("Total Marks: ",total,"<br/>","Marks Obtained: ",sub1+sub2+sub3,"<br/>","Percentage: ",calPer,"%<br/>","Grade: Fail<br/>Remarks: Sorry");    
            }
            