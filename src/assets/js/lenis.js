import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function lenis() {
  const lenis = new Lenis();

  // lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export default lenis;
