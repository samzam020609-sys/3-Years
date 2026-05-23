// ================= AOS INIT =================
AOS.init({
  duration: 1000,
  once: true
});

// ================= GSAP INTRO ANIMATION =================
gsap.from(".book", {
  scale: 0.8,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
});

// ================= OPEN DIARY =================
document.getElementById("openDiary").addEventListener("click", () => {

  gsap.to("#intro", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById("intro").style.display = "none";
    }
  });

  gsap.from("#main", {
    opacity: 0,
    y: 50,
    duration: 1.5
  });

});

// ================= MUSIC CONTROL =================
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicControl");

let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    btn.innerText = "🎵 Pause Music";
  } else {
    music.pause();
    btn.innerText = "🎵 Play Music";
  }
  playing = !playing;
});

// ================= GSAP SCROLL EFFECTS =================
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 80,
    duration: 1
  });
});

// ================= CELEBRATION =================
document.getElementById("celebrate").addEventListener("click", () => {

  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

  gsap.to("body", {
    backgroundColor: "#000",
    duration: 2
  });

});
