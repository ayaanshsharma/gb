function preload(){
mustache_png = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on("pose", gotPoses);
}

function modeloaded(){
    console.log('PoseNet Is Initializee');
}

noseX = "";
noseY = "";

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
       noseX = results[0].pose.nose.x-20;
       noseY = results[0].pose.nose.y-1;
    console.log("nose x =" + noseX);
    console.log("nose y =" + noseY);
        
    }
}


function draw(){
    image(video, 0, 0, 300, 300);
   image(mustache_png, noseX, noseY, 50, 50);
}

function take_snapshot(){
    save("filter.png");
}