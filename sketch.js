//the set up function is performed once when the sketch loads
function setup() {
    createCanvas(1000,800);
    
}

//the draw function's default is performed on a loop 30 times per second
function draw() {
    background(255)
    // for color, one parameter (0-255) determines grayscale
    // for color, two parameters (a,b) determines grayscale and ALPHA (opacity) 
    // for color, three parameters is (r,g,b)
    // stroke(0,1) // the 1 is the lowest opacity which allows it to fade in slowly, but only if the background color is in setup 
    strokeWeight(50);
    stroke(230,0,0,180)
    line(100,100,300,300);
    
    // ellipse(x,y,w,h)
    noStroke();
    fill(200,100,0);
    ellipse(500,500,200,200);
    
    // rect(x,y,w,h)
    stroke(30,52,208,200);
    noFill();
    rect(200,200,500,300);
    
    stroke(100,230,230,200);
    arc(400, 0, 500, 700, 0, radians(90)); 
    
}

//-----------------------------
    //NOTES
    //ellipse(x,y,w,h)
    //fill(0) = black, 0-->255(white) 255 shades of gray
    //fill(r,g,b)
    //fill(255,0,0)=red
    //fill(255,255,0)=yellow
    //noStroke();