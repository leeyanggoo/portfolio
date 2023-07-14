import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function navMobile() {
  const navMoviBtns = gsap.utils.toArray("#footer .nav__btn");
  const sections = gsap.utils.toArray(".section");
  const sectionsHeight = sections.reduce((total, element) => total + element.offsetHeight, 0);

  // nav 이동
  navMoviBtns.forEach((navMoviBtn, index) => {
    navMoviBtn.addEventListener("click", navMoviClick);
    gsap.set(navMoviBtn, {
      width: `${(sections[index].offsetHeight / sectionsHeight) * 100}vw`,
    });
  });

  function navMoviClick(e) {
    const navMoviIndex = parseInt(e.target.dataset.index);
    let navTo = ScrollTrigger.create({
      trigger: sections[navMoviIndex],
      start: "top 20px",
    });
    gsap.to(window, {
      duration: 1,
      scrollTo: navTo.start,
      overwrite: "auto",
    });
  }

  const navMobiProgress = document.querySelector(".nav__progress");
  const main = document.querySelector("#main");

  ScrollTrigger.create({
    trigger: main,
    start: "top center",
    end: () => {
      `+=${sectionsHeight}`;
    },
    // markers: true,
    onUpdate: (self) => {
      setNavi(self.progress);
    },
  });

  function setNavi(pageProgress) {
    gsap.set(navMobiProgress, {
      left: `${pageProgress * 100}%`,
    });
  }
}
export default navMobile;
