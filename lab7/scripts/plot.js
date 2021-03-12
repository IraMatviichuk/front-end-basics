const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const axes = {
  x0: 0.5 + 0.5 * canvas.width,
  y0: 0.5 + 0.5 * canvas.height,
  scale: 40,
};

showAxes();

function plot(func) {
  let xx;
  let yy;
  const dx = 4;
  const x0 = axes.x0;
  const y0 = axes.y0;
  const scale = axes.scale;
  const iMax = Math.round((context.canvas.width - x0) / dx);
  const iMin = Math.round(-x0 / dx);
  context.setLineDash([]);
  context.beginPath();
  context.lineWidth = 2;
  context.strokeStyle = getRandomColor();

  for (let i = iMin; i <= iMax; i++) {
    xx = dx * i;
    yy = scale * func(xx / scale);
    if (i == iMin) context.moveTo(x0 + xx, y0 - yy);
    else context.lineTo(x0 + xx, y0 - yy);
  }
  context.stroke();
}

function showAxes() {
  const x0 = axes.x0;
  const w = context.canvas.width;
  const y0 = axes.y0;
  const h = context.canvas.height;
  const xMin = 0;
  context.beginPath();
  context.strokeStyle = "rgb(0, 0, 0)";
  context.setLineDash([20, 15]);
  context.moveTo(xMin, y0);
  context.lineTo(w, y0);
  context.moveTo(x0, 0);
  context.lineTo(x0, h);
  context.stroke();
}

function getRandInt(max) {
  return Math.ceil(Math.random() * max);
}

function getRandomColor() {
  const r = getRandInt(255);
  const g = getRandInt(255);
  const b = getRandInt(255);

  return `rgb(${r}, ${g}, ${b})`;
}

plot(x => 3 * x + 4);
plot(x => x * x);
plot(x => 2 * Math.pow(x, 5) + Math.pow(x, 3) + Math.pow(x, 2) + 4);
plot(x => 3 * Math.pow(x, 3) - Math.cos(x));
