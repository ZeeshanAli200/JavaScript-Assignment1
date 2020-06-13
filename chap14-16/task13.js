var devices=[];

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("Devices: <br>",devices,"<br><br>")
document.write("<br>Out:<br>", devices.shift(),"<br>Out:<br>", devices.shift(),"<br>Out:<br>", devices.shift(),"<br>Out:<br>", devices.shift());
