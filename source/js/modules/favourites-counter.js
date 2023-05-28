const addedButton = document.querySelectorAll('.product__favourites-icon');
const favoritesConter = document.querySelector('.nav__favourites-counter');
const linkProduct = document.querySelectorAll('.product__link');

let counter = 0;

function counterFavorites() {
  linkProduct.forEach((product) => {
    product.addEventListener('click', function (evt) {
      evt.preventDefault();
    });
  });

  addedButton.forEach((item) => {
    item.addEventListener('click', function () {
      if (!item.classList.contains('product__favourites-icon--favor')) {
        favoritesConter.classList.add('nav__favourites-counter--product');
        counter++;
        favoritesConter.textContent = counter;
      } else {
        favoritesConter.classList.remove('nav__favourites-counter--product');
        counter--;
        favoritesConter.textContent = counter;
      }
      item.classList.toggle('product__favourites-icon--favor');
    });
  });
}

export { counterFavorites };
