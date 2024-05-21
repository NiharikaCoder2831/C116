nx = 0
ny = 0

function preload() {
cn = loadImage("clown-nose.png");
}

function setup() {
canv = createCanvas(500, 400)
canv.center()
vid = createCapture(VIDEO)
vid.size(500, 400)
vid.hide()
pn = ml5.poseNet(vid, modelLoaded)
pn.on("pose", gotPoses)
}

function draw() {
background('white')
image(vid, 0, 0, 500, 400)
fill("pink")
stroke("pink")
// circle(nx, ny, 25);
image(cn, nx-10, ny-10, 30, 30)
}

    function snapshot() {
    save('image.png');
}

function modelLoaded() {
console.log("Model has loaded successfully")
}

function gotPoses(results) {
if (results.length > 0) {
    console.log(results)
nx = results[0].pose.nose.x
ny = results[0].pose.nose.y
console.log(nx)
console.log(ny)
}
}