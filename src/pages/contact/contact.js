import '../../css/normalize.css';
import '../../css/contact.css';

// burger menu

const mobileBtn = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.mobile-navigation');
const mobileNavLink = document.querySelectorAll('.mobile-navigation__link');
const bodyEl = document.querySelector('body');
const mobOverlay = document.querySelector('.mob-overlay');

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

/// go-up button

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

// show popup on submit

const popUp = document.querySelector('.popup');
const sendTxt = document.querySelector('.popup__text-sending');
const successTxt = document.querySelector('.popup__text-success');
const submitBtn = document.getElementById('submit');
const submitOverlay = document.querySelector('.submit-overlay');
const okPopUpBtn = document.querySelector('.popup__ok');
const fullNameInput = document.querySelector('.form__name-input');
const emailInput = document.querySelector('.form__email-input');
const messageInput = document.querySelector('.form__message-textarea');

// disable submit button if input fields not filled

const enableSubmitBtn = function () {
  const fullNameValue = fullNameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();
  if (fullNameValue && emailValue && messageValue) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'disabled');
  }
};

fullNameInput.addEventListener('input', enableSubmitBtn);
emailInput.addEventListener('input', enableSubmitBtn);
messageInput.addEventListener('input', enableSubmitBtn);

const showPopUp = function () {
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    submitOverlay.classList.remove('hidden__overlay');
    popUp.classList.remove('hidden');
    bodyEl.classList.add('no_scroll');
  });
};

const closePopUp = function () {
  okPopUpBtn.addEventListener('click', function (e) {
    submitOverlay.classList.add('hidden__overlay');
    popUp.classList.add('hidden');
    bodyEl.classList.remove('no_scroll');
    window.location.reload();
  });
};

const changeMessage = function () {
  setTimeout(function () {
    sendTxt.classList.add('hidden');
    successTxt.classList.remove('hidden');
    okPopUpBtn.classList.remove('hidden');
  }, 5000);
};

changeMessage();
closePopUp();
showPopUp();
