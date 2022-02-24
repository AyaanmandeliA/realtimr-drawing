nose_x = 0;
nose_y = 0;

wl = 0;
wr = 0;

lolidc = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(396, 396)
    canvas = createCanvas(396, 396);
    canvas.position(410, 151);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", getposes);
}
function draw() {
    background("yellow");
    fill("red");
    stroke("red");
    square(nose_x , nose_y , lolidc);
    document.getElementById("square_sides").innerHTML = "Side of the square will be "+lolidc+" px";
}
function modelLoaded() {
    console.log("model loaded");
}
function getposes(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = "+nose_x +" nose y = "+nose_y);

        wl = results[0].pose.leftWrist.x;
        wr = results[0].pose.rightWrist.x;
        console.log("left = "+wl +" right = "+wr);

        lolidc = wl - wr;
        console.log(lolidc);
    }
}