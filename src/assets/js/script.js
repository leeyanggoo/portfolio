import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function script() {
  const scripts = gsap.utils.toArray(".script");
  const scriptTabWrap = document.querySelector(".script__tabs");
  const scriptTabs = gsap.utils.toArray(".script__tab");
  let totalHeight = scripts.reduce((total, element) => total + element.offsetHeight, 0);

  let scriptScroll = gsap.to(scripts, {
    yPercent: -100 * (scripts.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".script__wrap",
      pin: true,
      scrub: true,
      start: "top 20px",
      end: `+=${totalHeight - scripts[0].offsetHeight}px`,
      // markers: true,
    },
  });

  // 탭 active
  scripts.forEach((script, index) => {
    ScrollTrigger.create({
      trigger: script,
      start: "top center",
      end: "bottom center",
      onToggle: (self) => {
        self.isActive && setScriptTabs(index);
      },
      // markers: true,
    });
  });

  function setScriptTabs(activeTab) {
    scriptTabs.forEach((tab) => tab.classList.remove("active"));
    scriptTabs[activeTab].classList.add("active");
  }

  // // 탭 클릭
  scriptTabs.forEach((tab) => {
    tab.addEventListener("click", scriptTabClick);
  });

  function scriptTabClick(e) {
    const scriptTabIndex = parseInt(e.currentTarget.dataset.index);
    let scriptTo = ScrollTrigger.create({
      trigger: scripts[scriptTabIndex],
      start: `top ${scriptTabWrap.offsetHeight + 20}px`,
    });
    gsap.to(window, {
      duration: 1,
      scrollTo: scriptTo.start,
      overwrite: "auto",
    });
  }
}

export default script;
