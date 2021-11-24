function setup(){
    video = createCapture(VIDEO);
    video.position(100, 175);
    video.size(550, 500);

    canvas = createCanvas(600, 600);
    canvas.position(1200, 175);
    background("#c5ccd6");

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}