bensound1 = ""
bensound2 = ""
bensound3 = ""
beatles = ""
function preload(){
    bensound1 = loadSound("bensound-creativeminds.mp3")
bensound2 = loadSound("bensound-happyrock.mp3")
bensound3 = loadSound("bensound-hey.mp3")
beatles = loadSound("Let It Be (Remastered 2009).mp3")
}
function setup(){
canvas = createCanvas(600, 500)
canvas.center()
video = createCapture(VIDEO)
video.hide()
}
function draw(){
image(video, 0, 0, 600, 500)
}