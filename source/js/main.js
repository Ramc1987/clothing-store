import { iosVhFix } from './utils/ios-vh-fix';
import { toogleIndicator } from './modules/toggle-indicator';
import { initSwiperArticles } from './modules/catalog-swiper';
import { counterProduct } from './modules/counter-basket';
import { counterFavorites } from './modules/favourites-counter';
import { activateMobMenu } from './modules/mobile.menu';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const swiper = document.querySelector('.swiper');
  // Utils
  // ---------------------------------
  initSwiperArticles(swiper);

  iosVhFix();

  // Modules

  toogleIndicator();
  counterProduct();
  counterFavorites();
  activateMobMenu();
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {});
});
