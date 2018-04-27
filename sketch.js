var serial;
var latestData = "waiting for data";


function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = new p5.SerialPort();

  serial.list();

  serial.open("/dev/cu.usbmodem1411");

  serial.on('connected', serverConnected);

  serial.on('list', gotList);

  serial.on('data', gotData);

  serial.on('error', gotError);

  serial.on('open', gotOpen);

}

function serverConnected() {
  println("Connected to Server");
}

function gotList(thelist) {
  println("List of Serial Ports:");
  for (var i = 0; i < thelist.length; i++) {
    println(i + " " + thelist[i]);
  }
}

function gotOpen() {
  println("Serial Port is Open");
}

function gotError(theerror) {
  println(theerror);
}

function gotData() {
  var currentString = serial.readLine();  
  trim(currentString);
  if (!currentString) return;
  console.log(currentString);
  latestData = currentString;
}

function gotRawData(thedata) {
  println("gotRawData" + thedata);
}

function draw() {
  background(255,255,255);
  fill(0,0,0);
  text(latestData, 10, 10);
 
    var x = map(latestData, 450, 759, 0, 50);
    var vol = map(latestData, 600, 759, 0, 1);
    
    
    
var vid = document.getElementById("myAudio");
//vid.volume = 0.5;
    
if(latestData<600){
    vid.volume = 1;
    }else if(lastestdata=700-750){
    vid.volume = 0; 
    }else if (lastestdata<751){
    vid.volume = 0.1;
    };
    
//    
//var vid = document.getElementById('myAudio');
//var volu3 = document.getElementById('vol-control');
//
//window.setInterval(changevolume(), 1);
//
//function changevolume() {
//
// var x = volu3.value;
// var y = x / 100;
//
// video.volume = y;
//
//}
//    
//    
    
    

document.getElementById("circle").style.width = x;
document.getElementById("circle").style.height = x;
}