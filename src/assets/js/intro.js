import { gsap } from "gsap";

function intro() {
  const spansTop = gsap.utils.toArray(".logo__top span");
  const spanBottom = gsap.utils.toArray(".logo__bottom span");
  const topRight = document.querySelector(".top__right > span");
  const bottomLeft = document.querySelector(".bottom__left > span");
  const logoTop = document.querySelector(".logo__top");
  const logoBottom = document.querySelector(".logo__bottom");

  let tl3 = gsap.timeline({
    defaults: {
      ease: "Since.easeOut",
    },
  });
  tl3.fromTo(spansTop, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 }, "a");
  tl3.fromTo(spanBottom, { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 }, "a");
  tl3.fromTo(topRight, { right: 0 }, { left: 0, duration: 0.8 }, "b+=0.2");
  tl3.fromTo(bottomLeft, { left: "auto" }, { right: 0, duration: 0.8 }, "b+=0.2");
  tl3.fromTo(logoTop, { top: 0, yPercent: 0 }, { top: "50%", yPercent: -50, duration: 0.5 }, "c+=0.2");
  tl3.fromTo(logoBottom, { bottom: 0, yPercent: 0 }, { bottom: "50%", yPercent: 50, duration: 0.5 }, "c+=0.2");
}
export default intro;
