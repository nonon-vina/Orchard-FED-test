export const fadeInUp = () => {
  gsap.defaults({ easeEach: "power3.out" });
  gsap.set(".fadeInUp", { y: 50 });

  if (window.innerWidth > 768) {
    ScrollTrigger.batch(".fadeInUp", {
      interval: 0.7,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.23 }),
    });
  } else {
    ScrollTrigger.batch(".fadeInUp", {
      interval: 0.5,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2 }),
    });
  }
}