const drawCanvas =
document.getElementById("drawCanvas");

const outlineCanvas =
document.getElementById("outlineCanvas");

const previewCanvas =
document.getElementById("previewCanvas");

const drawCtx =
drawCanvas.getContext("2d");

const outlineCtx =
outlineCanvas.getContext("2d");

const previewCtx =
previewCanvas.getContext("2d");

let currentColor = "red";

let drawing = false;

let eraser = false;

let currentTheme = "animals";

let currentDrawing = null;

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "black",
  "brown",
  "cyan"
];

function setupColors(){

  const sidebar =
  document.getElementById("color-sidebar");

  colors.forEach(color=>{

    const div =
    document.createElement("div");

    div.className = "color";

    div.style.background = color;

    div.onclick = ()=>{

      currentColor = color;

      eraser = false;

    };

    sidebar.appendChild(div);

  });

}

setupColors();

function resizeCanvas(){

  [
    drawCanvas,
    outlineCanvas
  ].forEach(c=>{

    c.width =
    c.offsetWidth;

    c.height =
    c.offsetHeight;

  });

  loadDrawing();

}

window.addEventListener(
  "resize",
  resizeCanvas
);

function selectTheme(theme){

  currentTheme = theme;

  document.getElementById(
    "theme-screen"
  ).style.display = "none";

  document.getElementById(
    "main-app"
  ).style.display = "flex";

  resizeCanvas();

}

function loadDrawing(){

  const list =
  DRAWINGS[currentTheme];

  currentDrawing =
  list[
    Math.floor(
      Math.random()*list.length
    )
  ];

  outlineCtx.clearRect(
    0,0,
    outlineCanvas.width,
    outlineCanvas.height
  );

  currentDrawing.draw(
    outlineCtx,
    outlineCanvas.width,
    outlineCanvas.height,
    false
  );

  previewCanvas.width = 180;
  previewCanvas.height = 180;

  currentDrawing.draw(
    previewCtx,
    180,
    180,
    true
  );

}

function startDraw(x,y){

  drawing = true;

  drawCtx.beginPath();

  drawCtx.moveTo(x,y);

}

function moveDraw(x,y){

  if(!drawing) return;

  drawCtx.lineTo(x,y);

  drawCtx.strokeStyle =
  eraser
  ? "white"
  : currentColor;

  drawCtx.lineWidth =
  document.getElementById(
    "brushSize"
  ).value;

  drawCtx.lineCap = "round";

  drawCtx.stroke();

}

function endDraw(){

  drawing = false;

}

drawCanvas.addEventListener(
  "mousedown",
  e=>{

    startDraw(
      e.offsetX,
      e.offsetY
    );

  }
);

drawCanvas.addEventListener(
  "mousemove",
  e=>{

    moveDraw(
      e.offsetX,
      e.offsetY
    );

  }
);

drawCanvas.addEventListener(
  "mouseup",
  endDraw
);

drawCanvas.addEventListener(
  "touchstart",
  e=>{

    const rect =
    drawCanvas.getBoundingClientRect();

    startDraw(
      e.touches[0].clientX-rect.left,
      e.touches[0].clientY-rect.top
    );

  }
);

drawCanvas.addEventListener(
  "touchmove",
  e=>{

    const rect =
    drawCanvas.getBoundingClientRect();

    moveDraw(
      e.touches[0].clientX-rect.left,
      e.touches[0].clientY-rect.top
    );

  }
);

drawCanvas.addEventListener(
  "touchend",
  endDraw
);

function clearCanvas(){

  drawCtx.clearRect(
    0,
    0,
    drawCanvas.width,
    drawCanvas.height
  );

}

function undoCanvas(){

  clearCanvas();

}

function nextDrawing(){

  clearCanvas();

  loadDrawing();

}

function setEraser(v){

  eraser = v;

}

function goHome(){

  location.reload();

}