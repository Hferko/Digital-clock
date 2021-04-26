function szinesOra(){
var most;
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var hexColor = '#' + hours + minutes + seconds;
var oraSzin = '#' + 99 + 99 + seconds;
//var meret = hours + 'px';

if (hours < 10) {
  hours = '0' + hours; 
}

if (minutes < 10) {
  minutes = '0' + minutes; 
}

if (seconds < 10) {
  seconds = '0' + seconds;
}

var clockFace = hours+" : "+minutes+" : "+seconds;
document.getElementById('clock').innerHTML = (clockFace);

setTimeout(function() {
  szinesOra();
}, 1000);

document.body.style.background = 'brown';
document.getElementById('clock').style.background = 'brown';
document.body.style.background = hexColor;
document.getElementById('hello').style.color = oraSzin;
//document.getElementById('clock').style.padding = meret;
}

szinesOra();

document.getElementById('hello').innerHTML = 'hello world<br>';

//document.write(clockFace);

  