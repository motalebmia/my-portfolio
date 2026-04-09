// Typing effect
const texts = ["Creative Mind","Editor","Marketer"];
let i=0,j=0,del=false;
function type(){
  let cur=texts[i];
  document.getElementById("typing").innerHTML=cur.substring(0,j);
  if(!del){ j++; if(j>cur.length){del=true; setTimeout(type,1000); return;}}
  else{ j--; if(j==0){del=false; i=(i+1)%texts.length;}}
  setTimeout(type, del?50:100);
}
type();

// Heart background
const container=document.querySelector(".hearts-container");
const popSound = new Audio("assets/pop.mp3");

function createHeart(){
  const heart=document.createElement("div");
  heart.classList.add("heart");
  heart.style.fontSize=(Math.random()*30+15)+"px";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(Math.random()*5+5)+"s";
  heart.innerHTML="❤️";

  heart.addEventListener("click",()=>{
    heart.classList.add("blast");
    popSound.currentTime=0;
    popSound.play();
    setTimeout(()=>heart.remove(),500);
  });

  container.appendChild(heart);
  setTimeout(()=>heart.remove(),10000);
}
setInterval(createHeart,300);

// Scroll animation
const obs=new IntersectionObserver(e=>{
 e.forEach(x=>{
   if(x.isIntersecting) x.target.classList.add("show");
 });
});
document.querySelectorAll(".card, section").forEach(el=>obs.observe(el));
