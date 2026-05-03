let img; //mona lisa image

let fit = {
  x:0,
  y:0,
  w:0,
  h:0
};


function preload(){
  img = loadImage("libraries/assets/Mona_Lisa_by_Leonardo_da_Vinci_500_x_700.jpg")
}

function windowResized(){
  resizeCanvas()
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  image(img,fit.x, fit.y, fit.w, fit.h)
}

function calculateFit(){
  let imgAspect = img.width / img.height;
  let canvasAepect = width / height;

  if (imgAspect > canvasAscept){
    fit.w = width;
    fit.h = width / imgAspect;
  }else{
    fit.h = height;
    fit.w = height * imgAspect;
  }
  fit.x = (width - fit.w)/2;
  fit.y = (height - fit.h)/2;
}

class imageSegment {
  constrocteor(row,col){
    this.row = row;
    this.col = col;
  }
  sampleColor{}
}
