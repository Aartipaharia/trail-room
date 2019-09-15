let video;
let poseNet;
let noseX = 0;
let noseY = 0;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}


function gotPoses(poses){
  //console.log(poses); 
  if(poses.length > 0){
  let newx = poses[0].pose.keypoints[0].position.x;
  let newy = poses[0].pose.keypoints[0].position.y;
  noseX = lerp(noseX, newx, 0.5);
  noseY = lerp(noseY, newy, 0.5);
  }
}


function modelReady(){
  console.log('model Ready');

}


function draw() {
  background(220);
  image(video,0,0);
  
  fill(255,0,0);
  ellipse(noseX, noseY, 50);
  
}