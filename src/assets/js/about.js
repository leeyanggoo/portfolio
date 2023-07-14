import p5 from "p5";

function aboutME() {
  let fontSize = parseInt(window.getComputedStyle(document.querySelector(".about__ascii")).getPropertyValue("font-size"));
  // const aboutWrap = document.querySelector(".about__me");

  const density = " ·:-=+*#%@";
  // const density = "⣿ ⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿⡀⡁⡂⡃⡄⡅⡆⡇⡈⡉⡊⡋⡌⡍⡎⡏⡐⡑⡒⡓⡔⡕⡖⡗⡘⡙⡚⡛⡜⡝⡞⡟⡠⡡⡢⡣⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺⡻⡼⡽⡾⡿⢀⢁⢂⢃⢄⢅⢆⢇⢈⢉⢊⢋⢌⢍⢎⢏⢐⢑⢒⢓⢔⢕⢖⢗⢘⢙⢚⢛⢜⢝⢞⢟⢠⢡⢢⢣⢤⢥⢦⢧⢨⢩⢪⢫⢬⢭⢮⢯⢰⢱⢲⢳⢴⢵⢶⢷⢸⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣈⣉⣊⣋⣌⣍⣎⣏⣐⣑⣒⣓⣔⣕⣖⣗⣘⣙⣚⣛⣜⣝⣞⣟⣠⣡⣢⣣⣤⣥⣦⣧⣨⣩⣪⣫⣬⣭⣮⣯⣰⣱⣲⣳⣴⣵⣶⣷⣸⣹⣺⣻⣼⣽⣾"
  let profile;
  const heightPixelNum = Math.floor(930 / fontSize);

  /** 이미지 로드 */
  new p5((m) => {
    m.preload = () => {
      profile = m.loadImage("./assets/images/about/profile.png", (img) => {
        const originalWidth = profile.width;
        const originalHeight = profile.height;
        img.resize(m.floor(((originalWidth * 1.75) / originalHeight) * heightPixelNum), heightPixelNum);
      });
    };

    m.setup = () => {
      let aobutAscii = m.select(".about__ascii");

      m.noCanvas();
      m.background(0);
      profile.loadPixels();

      for (let j = 0; j < profile.height; j++) {
        let row = "";
        for (let i = 0; i < profile.width; i++) {
          const pixelIndex = (i + j * profile.width) * 4;
          const r = profile.pixels[pixelIndex + 0];
          const g = profile.pixels[pixelIndex + 1];
          const b = profile.pixels[pixelIndex + 2];
          const a = profile.pixels[pixelIndex + 3];
          const avg = (r + g + b) / 3;
          const len = density.length;
          const charIndex = m.floor(m.map(avg, 0, 255, 0, len));

          /** 공백 처리를 위한 변수 */
          const c = a === 0 ? " " : density.charAt(charIndex);
          if (c == " ") row += "<span>&nbsp;</span>";
          else row += "<span>" + c + "</span>";
        }
        aobutAscii.child(m.createDiv(row));
      }
    };
  });
}

export default aboutME;
