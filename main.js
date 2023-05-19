nosex=0
nosey=0
function preload(){
    clown_image=loadImage('https://i.postimg.cc/9MG7MMHC/clownnose.png')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
   posenet=ml5.poseNet(video,modelLoaded)
   posenet.on('pose',gotPoses)
}
function take_snapshot(){
    save('boba.png')
}
function draw(){
    image(video,0,0,300,300)
    fill(255,0,0)
    stroke(255,0,0)
    circle(nosex,nosey,20)
    //image(clown_image,nosex,nosey,30,30)
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotPoses(results){
if(results.length>0){
    console.log(results)
    console.log("nosex= "+results[0].pose.nose.x)
    console.log("nosey= "+results[0].pose.nose.y)
    nosex=results[0].pose.nose.x
    nosey=results[0].pose.nose.y
}
}