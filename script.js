var tl = gsap.timeline();

tl.from("#navbar", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power2.out"
});

tl.from("#move .move", {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2
});

gsap.from("#me", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power2.out"
});

tl.from("#work", {
  duration: 0.8,
  opacity: 0,
  scale: 0.5,
  ease: "power2.out",
  stagger: 0.2
});
