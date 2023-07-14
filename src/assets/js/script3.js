import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer, ScrollTrigger);

function script() {
  const scripts = gsap.utils.toArray(".script");
  // const scriptTitle = gsap.utils.toArray(".script h3");
  // const scriptIframe = gsap.utils.toArray(".script iframe");
  let totalHeight = scripts.reduce((total, element) => total + element.offsetHeight, 0);

  let scriptScroll = gsap.to(scripts, {
    // yPercent: -100 * (scripts.length - 1),
    // ease: "none",
    scrollTrigger: {
      trigger: ".script__wrap",
      pin: true,
      scrub: true,
      start: "top 20px",
      end: `+=${totalHeight}px`,
      // markers: true,z
    },
  });

  scripts.forEach((script, index) => {
    ScrollTrigger.create({
      trigger: script,
      start: "bottom bottom",
      onEnter: () => goScript(index),
      markers: true,
    });
    ScrollTrigger.create({
      trigger: script,
      start: "bottom bottom",
      onEnterBack: () => goScript(index),
      // markers: true,
    });
  });

  function goScript(index) {
    gsap.to(".script__wrap", {
      scrollTo: {
        y: index * scripts[0].offsetHeight,
        autoKill: false,
        ease: "Power3.easeInOut",
      },
      duration: 1,
    });

    gsap.to(scripts[index], {
      opacity: 1,
      duration: 0.8,
    });
    // 이전 요소에 대한 애니메이션을 적용하기 전에 해당 요소가 존재하는지 확인
    if (index - 1 >= 0) {
      gsap.to(scripts[index - 1], {
        opacity: 0,
        duration: 0.8,
      });
    }

    // 다음 요소에 대한 애니메이션을 적용하기 전에 해당 요소가 존재하는지 확인
    if (index + 1 < scripts.length) {
      gsap.to(scripts[index + 1], {
        opacity: 0,
        duration: 0.8,
      });
    }
  }
}
export default script;
