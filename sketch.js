var nave, fondo1, fondo2, kars, met1, met2, met3, limiteIzq, limiteDer
var naveIMG, fondoIMG, karsIMG, met1IMG, met2IMG, met3IMG
var puntuacion = 0
function preload(){
fondoIMG = loadImage("./imagenes/espacio.png")
naveIMG = loadImage("./imagenes/nave.png")
karsIMG = loadImage("./imagenes/kars.png")
met1IMG = loadImage("./imagenes/met1.png")
met2IMG = loadImage("./imagenes/met2.png")
met3IMG = loadImage("./imagenes/met3.png")
met4IMG = loadImage("./imagenes/met4.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 fondo1 = createSprite(2450,500)
 fondo1.addImage(fondoIMG)
 fondo1.scale = 5.2
 fondo1.velocityY = 5
 fondo2 = createSprite(2450,0)
 fondo2.addImage(fondoIMG)
 fondo2.scale = 5.2
 fondo2.velocityY = 5
 nave = createSprite(2400,2000)
 nave.addImage(naveIMG)
 nave.scale=0.3
 limiteIzq = createSprite(0,2000,10,3000)
 limiteIzq.visible = false;
 limiteDer = createSprite(5130,2000,10,3000)
 limiteDer.visible = false;
}
function crearKars(){
  if (frameCount % 1000 === 0){
  kars = createSprite(Math.round(random(0,4800)),0);
  kars.addImage(karsIMG);
  kars.lifetime=100;
  kars.velocityY=30;
  kars.velocityX=15;
  kars.scale=0.7;
}
}
function crearMet1(){
  if (frameCount % 150 === 0){
    met1 = createSprite(Math.round(random(2400,4800)),0);
    met1.addImage(met1IMG);
    met1.lifetime=100;
    met1.velocityY=30;
    met1.velocityX=-15;
    met1.scale=0.7;
  }
  }

function crearMet1_5(){
  if (frameCount % 175 === 0){
    met1 = createSprite(Math.round(random(0,4800)),0);
    met1.addImage(met1IMG);
    met1.lifetime=100;
    met1.velocityY=30;
    met1.velocityX=-15;
    met1.scale=0.7;
  }
}
function crearMet2(){
  if (frameCount % 225 === 0){
    met2 = createSprite(Math.round(random(0,4800)),0);
    met2.addImage(met2IMG);
    met2.lifetime=100;
    met2.velocityY=30;
    met2.velocityX=15;
    met2.scale=0.7;
}
}
  function crearMet2_5(){
    if (frameCount % 250 === 0){
      met2 = createSprite(Math.round(random(0,4800)),0);
      met2.addImage(met2IMG);
      met2.lifetime=100;
      met2.velocityY=30;
      met2.velocityX=15;
      met2.scale=0.7;
    }
}
function crearMet3(){
  if (frameCount % 275 === 0){
    met3 = createSprite(Math.round(random(0,4800)),0)
    met3.lifetime=100;
    met3.addImage(met3IMG)
    met3.velocityY=30;
    met3.velocityX=-15;
    met3.scale=1.2;
  }
}
function crearMet3_5(){
  if (frameCount % 225 === 0){
    met3 = createSprite(Math.round(random(0,4800)),0);
    met3.addImage(met3IMG);
    met3.lifetime=100;
    met3.velocityY=30;
    met3.velocityX=-15;
    met3.scale=1.2;
  }
}
function crearMet4(){
  if (frameCount % 100 === 0){
    met4 = createSprite(Math.round(random(0,4800)),0);
    met4.addImage(met4IMG);
    met4.lifetime=60;
    met4.velocityY=60;
    met4.scale=0.7;
  }
}
function moverNave(){
  if (keyDown(RIGHT_ARROW)){
  nave.x=nave.x+20
  }
  if (keyDown(LEFT_ARROW)){
    nave.x=nave.x-20
    }
}

function añadirPuntuacion(){
  if (frameCount % 100 === 0){
    puntuacion = puntuacion + 1
  }
  if (frameCount % 500 === 0){
    puntuacion = puntuacion + 5
  }
}
function destroy(){
  if (nave.isTouching(met1)){
    nave.destroy();
  }
}

function draw() {
 background(0);
 drawSprites();
 if (fondo1.y > 1100){
   fondo1.y = fondo1.width/2;
 }
 if (fondo2.y > 1100){
   fondo2.y = 0;
 }

 textSize(150)
 stroke("black")
 text("puntaje "+""+puntuacion,250,250)
 
 crearKars();
 crearMet1();
 crearMet2();
 crearMet3();
 crearMet1_5();
 crearMet2_5();
 crearMet3_5();
 crearMet4();
 moverNave();
 añadirPuntuacion();
 
}