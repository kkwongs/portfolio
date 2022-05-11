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
  loop: true,

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

function fetchProject(project) {
  fetch(project).then(function (res) {
    res.text().then(function (text) {
      gsap.to(dialogEl, 0.2, {
        opacity: 1,
        display: 'block',
      });
      dialogEl.innerHTML = text;
      projectEl.appendChild(dialogEl);

      const cancelEl = dialogEl.querySelector('.cancel');

      cancelEl.addEventListener('click', () => {
        gsap.to(dialogEl, 0.2, {
          opacity: 0,
          display: 'none',
        });
      });
    });
  });
}
