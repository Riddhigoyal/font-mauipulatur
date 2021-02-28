NoseX= 0;
NoseY= 0;
Difference= 0;
leftwristX= 0;
rightwristX= 0;

function setup(){
    canvas=createCanvas(450,450);
    canvas.position(580,170);

    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log ("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log (results);
        NoseX= results[0].pose.nose.x;
        NoseY= results[0].pose.nose.y;
        console.log ("nose x = "+NoseX+"nose y = "+NoseY);

        leftwristX= results[0].pose.leftWrist.x;
        rightwristX= results[0].pose.rightWrist.x;
        Difference= floor(leftwristX-rightwristX);
        console.log ("left wrist x = "+leftwristX+"right wrist x = "+rightwristX+"difference = "+Difference);
    }
}

function draw(){
    document.getElementById("square").innerHTML="Font size of word are = "+Difference+ " px";
    textSize(Difference);
    text('Riddhi',NoseX,NoseY);
}
