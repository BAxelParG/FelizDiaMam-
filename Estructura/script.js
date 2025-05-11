TweenLite.defaultEase = Linear.easeNone;
const time = 3;
const d = 0.2;
const master = new TimelineMax({repeat:-1, yoyo:true, paused:true});

TweenMax.set(".flower, .leftleaf, .rightleaf", { transformOrigin:"center bottom"});

for (i = 1; i < 5; i++) {
  tl = new TimelineMax();
  tl.to("#tulip" + i + " .flower", time, {rotation: -20}, 0);
  tl.to("#tulip" + i + " .leftleaf", time, {rotation: 5}, 0);
  tl.to("#tulip" + i + " .rightleaf", time, {rotation: 5}, 0);
  tl.to(".stemStart" + i , time, {morphSVG:".stemEnd" + i}, 0);
  master.add(tl, (i-1) * d);
}

master.play();

document.addEventListener("DOMContentLoaded", function () {
  const numStars = 100; // Cantidad de estrellas
  const starsContainer = document.querySelector(".stars");

  for (let i = 0; i < numStars; i++) {
      let star = document.createElement("div");
      star.classList.add("star");

      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let size = Math.random() * 2 + 1; // Tamaño entre 1px y 3px
      let duration = Math.random() * 2 + 1.5; // Parpadeo entre 1.5s y 3.5s

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDuration = `${duration}s`;

      starsContainer.appendChild(star);
  }
});