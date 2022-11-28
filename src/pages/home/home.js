import '../../css/normalize.css';
import '../../css/home.css';

// burger menu

const mobileBtn = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.mobile-navigation');
const mobileNavLink = document.querySelectorAll('.mobile-navigation__link');
const bodyEl = document.querySelector('body');
const mobOverlay = document.querySelector('.mob-overlay');
let menuOpen = false;

// burger menu button animation

mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('open');
  mobileNav.classList.toggle('is-open');
  bodyEl.classList.toggle('no_scroll');
  mobOverlay.classList.toggle('hidden__overlay');
});

mobOverlay.addEventListener('click', () => {
  mobileBtn.classList.toggle('open');
  mobileNav.classList.toggle('is-open');
  bodyEl.classList.toggle('no_scroll');
  mobOverlay.classList.toggle('hidden__overlay');
});

mobileNavLink.forEach((item) => {
  item.addEventListener('click', function () {
    mobileBtn.classList.toggle('open');
    mobileNav.classList.toggle('is-open');
    bodyEl.classList.toggle('no_scroll');
    mobOverlay.classList.toggle('hidden__overlay');
  });
});

/// go up button

const goUpbtn = document.getElementById('go-up');

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goUpbtn.style.display = 'block';
  } else {
    goUpbtn.style.display = 'none';
  }
};

goUpbtn.addEventListener('click', function () {
  window.scrollTo(0, 0);
});
