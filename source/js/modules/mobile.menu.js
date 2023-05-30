const mobileWrapper = document.querySelector('.header__overlay');
const menuToggle = document.querySelector('.menu-toggle');

function removeOverlayClass() {
  if (window.innerWidth >= 767) {
    mobileWrapper.classList.remove('header__overlay--open');
  }
}

function closeMenuOnEsc(event) {
  if (event.key === 'Escape') {
    mobileWrapper.classList.remove('header__overlay--open');
  }
}

function activateMobMenu() {
  menuToggle.addEventListener('click', () => {
    if (mobileWrapper.classList.contains('header__overlay--open')) {
      mobileWrapper.classList.remove('header__overlay--open');
    } else {
      mobileWrapper.classList.add('header__overlay--open');
    }
  });

  window.addEventListener('resize', removeOverlayClass);
  document.addEventListener('keydown', closeMenuOnEsc);
}

export { activateMobMenu };
