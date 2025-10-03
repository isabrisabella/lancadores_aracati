let aracati;
let icbm;
vX = 50;
vY = 50;
aX = 0;
aY = -10;
tAtual = 0;

function setup() {
  createCanvas(600, 600);
  frameRate(20);
}

function draw() {
  dX = MRU(vX, tAtual);
  dY = MRUV(vY, aY, tAtual);
  dAtual = dX + dY;
  
  image(aracati, 0, 0);
  
  fill(255);
  textSize(14);
  text(`Velocidade Horizontal: ${vX}`, 0, 100, 100, 100);
  text(`Velocidade Vertical: ${vY}`, 0, 150, 100, 100);
  text("Pressione ENTER Para Lançar", 0, 200, 100, 100);
  
  textSize(40);
  fill(255, 0, 0);
  text("LANÇADORES", 300, 150);
  
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text("OBS: SÓ TEMOS VERBA PRA 1 MÍSSIL POR EXECUÇÃO DO PROGRAMA", 300, 550);
  
  if (key === "Enter") {
    drawICBM();
    tAtual++;
  }
  if (dX >= 550) {
    text("VOCÊ ATINGIU O ALCANCE MÁXIMO, AGORA PAGUE.", 300, 400);
  }
}

function MRU(v, t) {
  return v * t;
}

function MRUV(v, a, t) {
  return v * t + (a * t * t) / 2.0;
}

function preload() {
  aracati = loadImage("https://i.imgur.com/LsgwcXw.png");
  icbm = loadImage("https://i.imgur.com/qWG6iYc.png");
}

function keyPressed() {
  switch (key) {
    case "ArrowRight":
      vX += 1;
      break;
    case "ArrowUp":
      vY += 1;
      break;
    case "ArrowDown":
      if (vY != 0) {
        vY -= 1;
      }
      break;
    case "ArrowLeft":
      if (vX != 0) {
        vX -= 1;
      }
      break;
  }
}

function drawICBM() {
  icbm.resize(40, 40);
  image(icbm, 50 + dX, 600 - dY);
}
