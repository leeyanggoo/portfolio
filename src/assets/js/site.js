import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function site() {
  const sites = gsap.utils.toArray(".site");
  const siteTabs = gsap.utils.toArray(".site__tab");
  let totalWidth = sites.reduce(
    (total, element) => total + element.offsetWidth,
    0
  );
  let navWidth = document.querySelector("#header").offsetWidth;

  let siteScroll = gsap.to(sites, {
    xPercent: -100 * (sites.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".site__wrap",
      pin: true,
      scrub: true,
      start: "top 20px",
      end: `+=${totalWidth}px`,
    },
  });

  // 탭 active
  sites.forEach((site, index) => {
    ScrollTrigger.create({
      trigger: site,
      start: "left center",
      end: "right center",
      containerAnimation: siteScroll,
      onToggle: (self) => {
        self.isActive && setSiteTabs(index);
      },
      // markers: true,
    });
  });

  function setSiteTabs(activeTab) {
    siteTabs.forEach((tab) => tab.classList.remove("active"));
    siteTabs[activeTab].classList.add("active");
  }

  // 탭 클릭
  siteTabs.forEach((tab) => {
    tab.addEventListener("click", siteTabClick);
  });

  let getPosition = getScrollLookup(
    sites,
    siteScroll,
    `left ${navWidth + 20}px`
  );

  function siteTabClick(e) {
    const siteTabIndex = parseInt(e.currentTarget.dataset.index);
    gsap.to(window, {
      scrollTo: getPosition(sites[siteTabIndex]),
      duration: 0.5,
      overwrite: "auto",
    });
  }

  function getScrollLookup(targets, containerAnimation, position) {
    let triggers = gsap.utils.toArray(targets).map((target) =>
        ScrollTrigger.create({
          trigger: target,
          start: position || "left left",
          containerAnimation: containerAnimation,
          // markers: true,
        })
      ),
      st = containerAnimation.scrollTrigger;
    return (target) => {
      let t = gsap.utils.toArray(target)[0],
        i = triggers.length;
      while (i-- && triggers[i].trigger !== t) {}
      return i >= 0
        ? st.start +
            (triggers[i].start / containerAnimation.duration()) *
              (st.end - st.start)
        : triggers[i].start;
    };
  }
}
export default site;
