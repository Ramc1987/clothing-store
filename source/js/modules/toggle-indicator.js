const togglePages = document.querySelectorAll('.header__control-button');
const indicatorToggle = document.querySelector('.header__indicator');

function toogleIndicator() {
  togglePages.forEach((item) => {
    item.addEventListener('click', () => {
      if (indicatorToggle.classList.contains('current')) {
        indicatorToggle.classList.remove('current');
      } else {
        indicatorToggle.classList.add('current');
      }
    });
  });
}

export { toogleIndicator };
