import { iosVhFix } from './utils/ios-vh-fix';
import { toogleIndicator } from './modules/toggle-indicator';
import { initSwiperArticles } from './modules/catalog-swiper';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const swiper = document.querySelector('.swiper');
  // Utils
  // ---------------------------------
  initSwiperArticles(swiper);

  iosVhFix();

  // Modules

  toogleIndicator();
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {});
});
