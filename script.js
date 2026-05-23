window.addEventListener("DOMContentLoaded", () => {

gsap.registerPlugin(ScrollTrigger);
AOS.init({ duration: 1000, once: true });

// -------------------------
// ELEMENTS
// -------------------------
const startBtn = document.getElementById("startStory");
const intro = document.getElementById("intro");
const storybook = document.getElementById("storybook");
const music = document.getElementById("bgMusic");

// -------------------------
// SAFETY CHECK (IMPORTANT)
// -------------------------
if (!startBtn || !intro || !storybook || !music) {
    console.error("Missing elements in HTML");
    return;
}

// -------------------------
// INTRO ANIMATION (SAFE)
// -------------------------
gsap.to(".intro-line", {
    opacity: 1,
    y: -10,
    stagger: 1,
    duration: 1.2,
    ease: "power2.out"
});

// -------------------------
// START BUTTON FIXED
// -------------------------
startBtn.addEventListener("click", async () => {

    try {
        music.volume = 0.6;
        await music.play();
    } catch (e) {
        console.log("Music blocked until interaction");
    }

    gsap.to("#intro", {
        opacity: 0,
        scale: 1.05,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {

            intro.style.display = "none";
            storybook.style.display = "block";

            // IMPORTANT: refresh GSAP after display change
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 300);

            // Entrance animation
            gsap.from("#summer", {
                opacity: 0,
                y: 60,
                duration: 1.5,
                ease: "power3.out"
            });
        }
    });

});

// -------------------------
// POLAROID FLOAT (SAFE)
// -------------------------
gsap.utils.toArray(".polaroid").forEach((el) => {

    gsap.to(el, {
        y: "+=25",
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
        },
        opacity: 0,
        scale: 0.5,
        duration: 1
    });

});

// -------------------------
// BUTTON NAVIGATION
// -------------------------
window.goSpring = () => {
    document.getElementById("spring").scrollIntoView({
        behavior: "smooth"
    });
};

window.goAutumn = () => {
    document.getElementById("autumn").scrollIntoView({
        behavior: "smooth"
    });
};

window.goWinter = () => {
    document.getElementById("winter").scrollIntoView({
        behavior: "smooth"
    });

    confetti({
        particleCount: 250,
        spread: 140
    });
};

// -------------------------
// DEBUG HELP (IMPORTANT)
// -------------------------
console.log("Website loaded successfully ❤️");

});
