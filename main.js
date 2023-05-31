noseX=0;
noseY=0;
difference=0;
rightWrist=0;
leftWrist=0;

function setup(){

    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(600,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){

    console.log('Posenet is Initialized');
}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX + "noseY = "+ noseY);

        rightWrist = results[0].pose.rightWrist.x;
        leftWrist = results[0].pose.leftWrist.x;
        difference = floor(leftWrist - rightWrist);
        console.log("rightWrist = "+ rightWrist + "leftWrist = "+ leftWrist );
    }
}
function preload(){


}
function draw(){
    background('#33cccc');
    document.getElementById("square_size").innerHTML="Width and height of the square is = "+difference+"px";
    fill('rgb(37, 150, 190)');
    stroke('rgb(37, 150, 190)');
    square(noseX,noseY,difference);
}