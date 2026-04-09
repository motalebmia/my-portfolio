const container = document.querySelector(".hearts-container");
const popSound = new Audio("assets/pop.mp3");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.fontSize = (Math.random()*30+15) + "px";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (Math.random()*5+5) + "s";
  heart.innerHTML = "❤️";
  
  heart.addEventListener("click", () => {
    heart.classList.add("blast");
    popSound.currentTime = 0;
    popSound.play();
    setTimeout(() => heart.remove(), 500);
  });

  container.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);
