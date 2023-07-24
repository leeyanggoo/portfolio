# Leeyanggoo Portfolio
![leeyanggoo-portfolio web app_ (1)](https://github.com/leeyanggoo/portfolio/assets/125417787/06abfc96-777f-456a-ad9c-26381fcedae1)

> ## Hellow, World! 👋
> + Live Demo : https://leeyanggoo-portfolio.web.app/
> + Refer to : https://www.therawmaterials.com/

# 사용 스택
+ **Vite**를 사용하여 사이트를 번들링하고 관리합니다.
+ **firebase**를 이용하여 사이트를 배포합니다.
+ **SCSS**를 사용하여 사이트의 레이아웃을 설계합니다.
+ **GSAP**를 사용하여 패럴랙스 효과를 줍니다.
+ **lenis**를 이용하여 부드러운 스크롤 효과를 줍니다.
+ **p5**를 이용하여 ascii art를 만들고 랜더링합니다.

# 구현 내역
+ GSAP의 ScrollTrigger를 이용한 pin 효과 (가로 / 세로)
+ GSAP의 ScrollTrigger를 이용한 nav 효과
  + 각각 nav의 길이는 section의 전체 길이를 100vh로 비율로 설정
  + 반응형을 고려한 nav 위치 하단 변경 (1023px)
  + scrollTo를 이용한 section 이동
+ section의 tab 메뉴 설정
  + tab의 data-index와 요소의 index 일치 및 active
+ ascii art의 비율 설정
  + 사용자의 화면 높이를 폰트 크기로 나눠서 폰트 개수 측정
  + 해당 개수를 이용해 사진 크기 조정 후 랜더링
  + 프로필 사진을 흑백 -> 픽셀화 -> rgba 과정으로 변환

# 프로젝트 실행
+ Vite를 설치합니다. `npm create vite@latest`
+ GSAP를 설치합니다. `npm install gsap`
+ lenis를 설치합니다. `npm install @studio-freight/lenis`
+ p5를 설치합니다. `npm install p5`
+ Vite 환경설정은 `vite.config.js` 파일을 만들고 다음과 같이 작성합니다.

```
export default {
    root: 'src',
    build: {
        outDir: '../public',
    }
}
```
