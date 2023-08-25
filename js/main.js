gsap.from(".header__menu", { opacity: 0, duration: 1, y: -40 });

gsap.from(".info__box-image", { opacity: 0, duration: 1, x: -400 });


gsap.from(".info__second-hello", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: 200,
});
gsap.from(".info__second-first", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: 200,
});
gsap.from(".info__second-text", {
  opacity: 0,
  duration: 1,
  delay: 0.9,
  x: 200,
});

gsap.from(".element-1", {
  opacity: 0,
  duration: 1.1,
  x: -600,
  scrollTrigger: {
    trigger: ".element-1",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
  },
});
gsap.from(".element-2", {
  opacity: 0,
  duration: 1.6,
  x: -600,
  scrollTrigger: {
    trigger: ".element-1",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
  },
});
gsap.from(".element-3", {
  opacity: 0,
  duration: 1.8,
  x: -600,
  scrollTrigger: {
    trigger: ".element-1",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
  },
});
gsap.from(".element-4", {
  opacity: 0,
  duration: 2,
  x: -600,
  scrollTrigger: {
    trigger: ".element-2",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
  },
});



const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  easing: "easeInOutCubic",
  updateURL: false,
});
