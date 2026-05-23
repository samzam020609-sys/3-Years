// =========================================================
// TO MY WIFEYY ❤️
// PART 3 - SCRIPT.JS
// GSAP + SCROLLTRIGGER + MUSIC + CINEMATIC EFFECTS
// =========================================================

gsap.registerPlugin(ScrollTrigger);

// =========================================================
// AOS
// =========================================================

AOS.init({
    duration: 1200,
    once: true,
    offset: 100
});

// =========================================================
// ELEMENTS
// =========================================================

const startButton = document.getElementById("startStory");
const intro = document.getElementById("intro");
const storybook = document.getElementById("storybook");
const music = document.getElementById("bgMusic");

// =========================================================
// INTRO ANIMATION
// =========================================================

gsap.to(".intro-line", {
    opacity: 1,
    y: -10,
    duration: 1.5,
    stagger: 1.2,
    ease: "power2.out"
});

gsap.from("#startStory", {
    opacity: 0,
    scale: 0.7,
    duration: 1.5,
    delay: 4,
    ease: "back.out(1.7)"
});

// =========================================================
// START STORY
// =========================================================

startButton.addEventListener("click", () => {

    music.play();

    gsap.to("#intro", {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",

        onComplete: () => {
            intro.style.display = "none";
            storybook.style.display = "block";

            gsap.from("#summer", {
                opacity: 0,
                scale: 1.1,
                duration: 2
            });
        }
    });
});

// =========================================================
// SUMMER HERO
// =========================================================

gsap.from("#summer .season-hero h1", {
    scrollTrigger: {
        trigger: "#summer",
        start: "top center"
    },
    y: 100,
    opacity: 0,
    duration: 1.5
});

gsap.from("#summer .season-quote", {
    scrollTrigger: {
        trigger: "#summer",
        start: "top center"
    },
    y: 60,
    opacity: 0,
    duration: 2,
    delay: 0.3
});

// =========================================================
// FLOATING POLAROID MAGIC
// =========================================================

const polaroids = document.querySelectorAll(".polaroid");

polaroids.forEach((photo, index) => {

    gsap.from(photo, {

        scrollTrigger: {
            trigger: photo,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },

        opacity: 0,
        scale: 0.5,
        rotate: gsap.utils.random(-20,20),
        y: 150,

        duration: 1.5,
        ease: "back.out(1.8)"

    });

    gsap.to(photo, {

        y: gsap.utils.random(-30,30),
        x: gsap.utils.random(-15,15),

        repeat: -1,
        yoyo: true,

        duration: gsap.utils.random(3,6),

        ease: "sine.inOut"

    });

});

// =========================================================
// HERO PHOTO PARALLAX
// =========================================================

gsap.to(".hero-photo img", {

    yPercent: 20,

    ease: "none",

    scrollTrigger: {
        trigger: ".hero-photo",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }

});

// =========================================================
// STORY CARDS
// =========================================================

gsap.utils.toArray(".story-card").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        opacity: 0,
        y: 100,
        duration: 1.2

    });

});

// =========================================================
// SPRING TIMELINE
// =========================================================

gsap.from(".timeline-line", {

    scaleY: 0,
    transformOrigin: "top center",

    scrollTrigger: {

        trigger: ".timeline-container",
        start: "top center",
        end: "bottom center",

        scrub: true

    }

});

// =========================================================
// TIMELINE ITEMS
// =========================================================

gsap.utils.toArray(".timeline-item").forEach(item => {

    gsap.from(item, {

        scrollTrigger: {
            trigger: item,
            start: "top 85%"
        },

        opacity: 0,

        x: item.classList.contains("left")
            ? -150
            : 150,

        duration: 1.5

    });

});

// =========================================================
// SPRING PETALS
// =========================================================

gsap.to(".spring-particles", {

    y: -100,

    scrollTrigger: {

        trigger: "#spring",

        start: "top bottom",
        end: "bottom top",

        scrub: true

    }

});

// =========================================================
// AUTUMN DREAM CARDS
// =========================================================

gsap.utils.toArray(".dream-card").forEach((card,index)=>{

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 90%"
        },

        opacity: 0,
        y: 80,

        duration: 1,

        delay: index * 0.1

    });

});

// =========================================================
// FUTURE LETTER
// =========================================================

gsap.from(".future-letter", {

    scrollTrigger: {
        trigger: ".future-letter",
        start: "top 80%"
    },

    opacity: 0,
    scale: 0.9,

    duration: 2

});

// =========================================================
// WINTER SECTION
// =========================================================

gsap.from("#winter .season-hero h1", {

    scrollTrigger: {
        trigger: "#winter",
        start: "top 70%"
    },

    opacity: 0,
    y: 100,

    duration: 1.5

});

gsap.from("#winter .season-quote", {

    scrollTrigger: {
        trigger: "#winter",
        start: "top 70%"
    },

    opacity: 0,
    y: 50,

    duration: 2

});

// =========================================================
// FINAL LETTER
// =========================================================

gsap.from(".final-letter", {

    scrollTrigger: {
        trigger: ".final-letter",
        start: "top 80%"
    },

    opacity: 0,
    scale: 0.8,

    duration: 2

});

// =========================================================
// GIFT BUTTON
// =========================================================

gsap.from(".gift-button", {

    scrollTrigger: {
        trigger: ".gift-button",
        start: "top 85%"
    },

    opacity: 0,
    y: 100,

    duration: 1.5

});

// =========================================================
// FINALE TEXT
// =========================================================

gsap.from("#finale h1", {

    scrollTrigger: {
        trigger: "#finale",
        start: "top 70%"
    },

    opacity: 0,
    scale: 0.5,

    duration: 2

});

gsap.from("#finale h2", {

    scrollTrigger: {
        trigger: "#finale",
        start: "top 70%"
    },

    opacity: 0,
    y: 80,

    duration: 2,
    delay: 0.5

});

// =========================================================
// CONFETTI FINALE
// =========================================================

ScrollTrigger.create({

    trigger: "#finale",

    start: "top center",

    once: true,

    onEnter: () => {

        confetti({

            particleCount: 300,
            spread: 150,

            origin: {
                y: 0.6
            }

        });

    }

});

// =========================================================
// SEASON BUTTONS
// =========================================================

const summerBtn = document.getElementById("summerToSpring");
const springBtn = document.getElementById("springToAutumn");
const autumnBtn = document.getElementById("autumnToWinter");

if(summerBtn){

summerBtn.addEventListener("click",()=>{

    document
        .getElementById("spring")
        .scrollIntoView({
            behavior:"smooth"
        });

});

}

if(springBtn){

springBtn.addEventListener("click",()=>{

    document
        .getElementById("autumn")
        .scrollIntoView({
            behavior:"smooth"
        });

});

}

if(autumnBtn){

autumnBtn.addEventListener("click",()=>{

    document
        .getElementById("winter")
        .scrollIntoView({
            behavior:"smooth"
        });

});

}

// =========================================================
// BACKGROUND MUSIC VOLUME FADE
// =========================================================

music.volume = 0.3;

ScrollTrigger.create({

    trigger: "#winter",

    start: "top center",

    onEnter: () => {

        gsap.to(music, {
            volume: 0.6,
            duration: 5
        });

    }

});

// =========================================================
// GLOWING BUTTON EFFECT
// =========================================================

gsap.utils.toArray("button").forEach(btn=>{

    gsap.to(btn,{

        boxShadow:
        "0 0 30px rgba(255,255,255,.8)",

        repeat:-1,
        yoyo:true,

        duration:2

    });

});

// =========================================================
// ENDLESS FLOATING EFFECT
// =========================================================

gsap.utils.toArray(".dream-card").forEach(card=>{

    gsap.to(card,{

        y:-10,

        repeat:-1,
        yoyo:true,

        duration:
        gsap.utils.random(2,4)

    });

});

// =========================================================
// SNOW PARALLAX
// =========================================================

gsap.to(".snow-container",{

    y:-150,

    scrollTrigger:{

        trigger:"#winter",
        start:"top bottom",
        end:"bottom top",

        scrub:true

    }

});

// =========================================================
// THE END ❤️
// =========================================================
