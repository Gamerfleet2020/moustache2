moustache_X=0; 
moustache_Y=0;
function setup(){
canvas=createCanvas(400, 400)
canvas.center()
canvas.position(550,150)
video= createCapture(VIDEO)
video.hide()
video.size(400, 400)

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
moustache_X=0;
moustache_Y=0;
}
function preload(){
    moustache=loadImage("moustache.png")
}
function draw(){
image(video, 0, 0, 400, 400);
 image(moustache, moustache_X, moustache_Y, 30, 30);

}

function take_snapshot(){
save('tyranitar.jpg')

}

function modelLoaded(){
console.log('PoseNet is Great')

}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
console.log("nose x=" + results[0].pose.nose.x)
moustache_X= results[0].pose.nose.x
moustache_Y= results[0].pose.nose.y
console.log("nose y=" + results[0].pose.nose.y)
}

}