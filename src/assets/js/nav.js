import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function nav() {
  const navBtns = gsap.utils.toArray("#header .nav__btn");
  const sections = gsap.utils.toArray(".section");
  const navDots = gsap.utils.toArray("#header .nav__dot");
  const sectionsHeight = sections.reduce((total, element) => total + element.offsetHeight, 0);

  // nav 이동
  navBtns.forEach((navBtn) => {
    navBtn.addEventListener("click", navClick);
  });

  function navClick(e) {
    const navIndex = parseInt(e.target.dataset.index);
    let navTo = ScrollTrigger.create({
      trigger: sections[navIndex],
      start: "top 20px",
    });
    gsap.to(window, {
      duration: 1,
      scrollTo: navTo.start,
      overwrite: "auto",
    });
  }

  // section, btn 설정
  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 30%",
      end: "bottom 30%",
      onToggle: (self) => {
        self.isActive && setActive(index);
      },
      onUpdate: (self) => {
        setDots(index, self.progress);
      },
      // markers: true,
    });
  });

  // active
  function setActive(activeIndex) {
    navBtns.forEach((navBtn) => navBtn.classList.remove("active"));
    navBtns[activeIndex].classList.add("active");
  }

  // btn
  function setDots(activeIndex, activeProgress) {
    const tl = gsap.timeline({});

    gsap.set(navDots[activeIndex], {
      top: `calc((100% - 45px) * ${activeProgress} + 15px)`,
    });

    tl.to(navBtns, { height: 0, duration: 0.5 }, 0);
    tl.to(navDots, { autoAlpha: 0 }, 0);
    tl.to(navDots[activeIndex], { autoAlpha: 1 }, 0);
    tl.to(
      navBtns[activeIndex],
      {
        height: `${(sections[activeIndex].offsetHeight / sectionsHeight) * 100}vh`,
        duration: 0.5,
        overwrite: true,
      },
      0
    );
  }
}

export default nav;
