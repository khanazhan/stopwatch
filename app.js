var hr=0;
var min=0;
var Sec=0;
var count=0;

var timer=false;




function start( ){
timer=true;
stopwatch();
}
function stop(){
timer=false;
}
function restart(){
    timer=false;
    hr=0;
     min=0;
     Sec=0;
    count=0;
    document.getElementById("hr").innerHTML=hr;
    document.getElementById("min").innerHTML=min;
    document.getElementById("Sec").innerHTML=Sec;
    document.getElementById("count").innerHTML=count;
}


function stopwatch(){
if( timer==true){
    count=count+1;
if(count==100){
Sec=+1;
count=0;

if(Sec ==60){
    min=min+1;
    count=0;
}


if(Sec ==60){
    hr=hr+1;
min=0;
Sec=0;
}
}

document.getElementById("Sec").innerHTML=Sec;
    document.getElementById("count").innerHTML=count;
    setTimeout("stopwatch()",10);
}
}