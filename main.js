function take_snapshot()
{
    save('myfilterimage.png')
}


function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(results)
{
    if(results.lenght>0)
    {
        console.log(results);
        console.log("nose X = " + results[0].pose.nose.X);
        console.log("nose Y = " + results[0].pose.nose.Y);
    }
}

function modelLoaded()
{
    console.log('posenet is initialized');
}

function preload()
{

}

function draw()
{
   image(video, 0, 0, 300 ,3000);
}