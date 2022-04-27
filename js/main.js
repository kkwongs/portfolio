const btnTop = document.querySelector('.btn__top');

window.addEventListener(
  'scroll',
  _.throttle(function () {
    if (this.window.scrollY > 300) {
      gsap.to(btnTop, 0.1, {
        opacity: 1,
        display: 'block',
      });
    } else {
      gsap.to(btnTop, 0.1, {
        opacity: 0,
        display: 'none',
      });
    }
  }, 300)
);

const swiper = new Swiper('.swiper', {
  allowTouchMove: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const projectEl = document.querySelector('.projects');
const dialogEl = document.createElement('div');
dialogEl.classList.add('dialog', 'hidden');
dialogEl.innerHTML = `
<div class="inner">
  <span class="cancel btn">닫기</span>
  <div class="title">포트폴리오 웹 사이트</div>
  <hr />
  <ul class="info">
    <li>
      <div class="title">
        <span class="material-icons">link</span>URL
      </div>
      <a
        href="https://kkwongs.github.io/portfolio/"
        target="_blank"
        class="description"
        >https://kkwongs.github.io/portfolio/</a
      >
    </li>
    <li>
      <div class="title">
        <span class="material-icons">summarize</span>Summary
      </div>
      <div class="description">
        포트폴리오 용도로 제작한 웹사이트입니다.<br /><br />
        애니메이션 라이브러리인 GSAP을 통해 특정 위치에서 자연스럽게
        TOP버튼이 나타나고 사라지도록 하였습니다. 그리고 특정 위치를
        알기위해 Window 인터페이스의 scrollY 속성을 사용했는데 스크롤할
        때마다 계속해서 호출되는 것을 방지하기 위해 Lodash 라이브러리의
        _.throttle 메소드를 사용하였습니다. Projects section을 구현하기
        위해 Swiper 라이브러리를 사용하여 하나의 프로젝트씩 나올 수
        있도록 슬라이드를 구현하였습니다.
      </div>
    </li>
    <li>
      <div class="title">
        <span class="material-icons">construction</span>Technology
      </div>
      <div class="description">
        Frontend: HTML, CSS, JavaScript<br />
        Deployment: GitHub Pages
      </div>
    </li>
  </ul>
</div>
`;
projectEl.appendChild(dialogEl);

const detailEl = document.querySelector('.projects .btn');
const cancelEl = document.querySelector('.projects .cancel');

detailEl.addEventListener('click', () => {
  dialogEl.classList.remove('hidden');
});
cancelEl.addEventListener('click', () => {
  dialogEl.classList.add('hidden');
});
