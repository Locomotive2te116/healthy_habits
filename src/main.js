import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const overlay = document.querySelector('.overlay');
  const links = document.querySelectorAll('.menu-nav-link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    overlay.classList.toggle('active');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  links.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

/* Slider Swiper */
const swiper = new Swiper('.reviews-swiper', {
  simulateTouch: true,
  touchRatio: 1,
  grabCursor: true,
  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  loop: true,
  // autoplay: {
  //   delay: 1000, // затримка перед прокручуванням (в мілісекундах)
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  modules: [Pagination],
});
// swiper.slideNext();
