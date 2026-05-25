const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const now = new Date();
const targetDate = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + 2,
  0,
  0,
  0,
); // Eid after tomorrow

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

function createParticles() {
  const count = Math.max(60, Math.floor(window.innerWidth / 12));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: 1 + Math.random() * 3,
    opacity: 0.15 + Math.random() * 0.35,
    speed: 0.15 + Math.random() * 0.5,
    drift: -0.5 + Math.random() * 1,
    hue: 40 + Math.random() * 35,
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.scale(1 / window.devicePixelRatio, 1 / window.devicePixelRatio);
  particles.forEach((particle) => {
    particle.y -= particle.speed;
    particle.x += particle.drift;
    if (particle.y < -20) particle.y = window.innerHeight + 20;
    if (particle.x < -20) particle.x = window.innerWidth + 20;
    if (particle.x > window.innerWidth + 20) particle.x = -20;

    ctx.beginPath();
    ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, ${particle.opacity})`;
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

const hero = document.querySelector(".hero");
let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth - 0.5) * 20;
  mouseY = (event.clientY / window.innerHeight - 0.5) * 20;
  const visual = document.querySelector(".hero-visual");
  if (visual) {
    visual.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }
});

resizeCanvas();
createParticles();
drawParticles();
