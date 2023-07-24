import p5 from "p5";

function p55() {
  const logoWrap = document.querySelector(".intro__logo");
  let profile;
  let cnv;
  /** 이미지 로드 */
  new p5((p) => {
    p.preload = () => {
      profile = p.loadImage("./assets/images/about/profile.png", (img) => {
        const logoWrapHeight = logoWrap.offsetHeight;
        const ratio = img.width / img.height;
        const resizedWidth = logoWrapHeight * ratio;
        img.resize(resizedWidth, logoWrapHeight);
      });
    };

    p.setup = () => {
      cnv = p.createCanvas(profile.width, profile.height);
      cnv.parent(logoWrap);
      // let newCanvasX = (p.windowWidth - profile.width) / 2;
      // let newCanvasY = (p.windowHeight - profile.height) / 2;
      // cnv.position(newCanvasX, newCanvasY);

      for (let col = 0; col < profile.width; col += 5) {
        for (let row = 0; row < profile.height; row += 5) {
          let xPos = col;
          let yPos = row;
          let c = profile.get(xPos, yPos);
          p.push();
          p.translate(xPos, yPos);
          p.rotate(p.radians(p.random(360)));
          p.noFill();
          p.stroke(p.color(c));
          p.strokeWeight(p.random(5));
          p.point(xPos, yPos);
          p.strokeWeight(p.random(3));
          p.curve(
            xPos,
            yPos,
            p.sin(xPos) * p.random(60),
            p.cos(xPos) * p.sin(xPos) * p.random(90),
            p.random(10),
            p.random(80),
            p.cos(yPos) * p.sin(yPos) * p.random(140),
            p.cos(xPos) * p.sin(xPos) * 50
          );
          p.pop();
        }
      }
    };
  });
}

export default p55;
