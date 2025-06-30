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
    scrub: true,
    markers: true,
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
    scrub: true,
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
    scrub: true,
    // markers: true, // adjust if too late/early
  },
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
});
