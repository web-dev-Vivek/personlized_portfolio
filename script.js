var tl = gsap.timeline();

tl.from("#navbar", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power2.out",
});

tl.from("#move p", {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.from("#me", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power2.out",
});

gsap.registerPlugin(ScrollTrigger);

// Title animation (as-is)
gsap.from("#Title h1 span", {
  scrollTrigger: {
    trigger: "#Title",
    start: "top 90%",
    end: "top 10%",
    scrub: 3,
    markers: false,
  },
  duration: 1,
  y: 100,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
});

// Project cards animation
gsap.from("#project_image img", {
  scrollTrigger: {
    trigger: "#project_image",
    start: "top 90%",
    end: "top 10%",
    scrub: 3,
    // adjust if too late/early
  },
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
  // markers: true,
});
gsap.from("#text", {
  scrollTrigger: {
    trigger: "#project_image",
    start: "top 90%",
    end: "top 10%",
    scrub: 3,
    // markers: true, // adjust if too late/early
  },
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
});

const initialPath = "M 10 80 Q 600 80 1300 80";
const string = document.querySelector("#String");

string.addEventListener("mousemove", function (e) {
  const bounds = string.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;

  gsap.to("#String svg path", {
    duration: 1.5,
    attr: { d: `M 10 80 Q ${x} ${y} 1300 80` },
    ease: "elastic.out(1, 0.2)",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("#String svg path", {
    duration: 1.5,
    attr: { d: initialPath },
    ease: "elastic.out(1, 0.01)",
  });
});

const initialPath1 = "M 10 80 Q 600 80 1300 80";
const string1 = document.querySelector("#String1");

string1.addEventListener("mousemove", function (e) {
  const bounds = string1.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;

  gsap.to("#String1 svg path", {
    duration: 1.5,
    attr: { d: `M 10 80 Q ${x} ${y} 1300 80` },
    ease: "elastic.out(1, 0.2)",
  });
});

string1.addEventListener("mouseleave", function () {
  gsap.to("#String1 svg path", {
    duration: 1.5,
    attr: { d: initialPath1 },
    ease: "elastic.out(1, 0.05)",
  });
});

gsap.from("#working .summary ", {
  scrollTrigger: {
    trigger: "#working",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
    markers: true,
  },
  duration: 1,
  scale: 2,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.from("#working div span", {
  scrollTrigger: {
    trigger: "#working",
    start: "top 80%",
    end: "top 60%",

    scrub: 2,
    // adjust if too late/early
  },
  duration: 1,
  scale: 0,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.from("#working_img img", {
  scrollTrigger: {
    trigger: "#working_img",
    start: "top 80%",
    end: "top 10%",
    scrub: 2,
    // adjust if too late/early
  },
  duration: 1,
  x: -100,
  scale: 0,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.from("#working_title", {
  scrollTrigger: {
    trigger: "#working_title",
    start: "top 80%",
    end: "top 10%",
    scrub: 2,
    markers: false,
  },
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power2.out",
});

const initialPath2 = "M 10 80 Q 600 80 1300 80";
const string2 = document.querySelector("#String2");

string2.addEventListener("mousemove", function (e) {
  const bounds = string2.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;

  gsap.to("#String2 svg path", {
    duration: 1.5,
    attr: { d: `M 10 80 Q ${x} ${y} 1300 80` },
    ease: "elastic.out(1, 0.2)",
  });
});

string2.addEventListener("mouseleave", function () {
  gsap.to("#String2 svg path", {
    duration: 1.5,
    attr: { d: initialPath2 },
    ease: "elastic.out(1, 0.05)",
  });
});

const initialPath3 = "M 10 80 Q 600 80 1300 80";
const string3 = document.querySelector("#String3");

string3.addEventListener("mousemove", function (e) {
  const bounds = string3.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;

  gsap.to("#String3 svg path", {
    duration: 1.5,
    attr: { d: `M 10 80 Q ${x} ${y} 1300 80` },
    ease: "elastic.out(1, 0.2)",
  });
});

string3.addEventListener("mouseleave", function () {
  gsap.to("#String3 svg path", {
    duration: 1.5,
    attr: { d: initialPath3 },
    ease: "elastic.out(1, 0.05)",
  });
});
var main = document.getElementById("main");

main.addEventListener("mousemove", (e) => {
  gsap.to("#cursor", {
    duration: 0.5,
    x: e.pageX - 10,
    y: e.pageY - 10,
    ease: "power2.out",
  });
});
