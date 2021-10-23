function preload(){

}

function setup(){
  canvas=createCanvas(600,600); 
  canvas.position(150,150);

  video=createCapture(VIDEO);
  video.hide();
}
 
function draw(){
  image(video,150,150,300,300);
fill(66, 245, 212);
stroke(66, 245, 212);
circle(70,70,80);
circle(530,70,80);
circle(70,530,80);
circle(530,530,80);
fill(242, 70, 93);
stroke(242, 70, 93);
rect(100,60,400,20);
rect(60,100,20,400);
rect(525,100,20,400);
rect(100,525,400,20);
}