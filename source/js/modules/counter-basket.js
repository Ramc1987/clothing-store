const addedButton = document.querySelectorAll('.product__button-added');
const basketConter = document.querySelector('.nav__basket-counter');
const linkProduct = document.querySelectorAll('.product__link');

let counter = 0;

function counterProduct() {
  linkProduct.forEach((product) => {
    product.addEventListener('click', function (evt) {
      evt.preventDefault();
    });
  });

  addedButton.forEach((item) => {
    item.addEventListener('click', function () {
      if (!basketConter.classList.contains('nav__basket-counter--product')) {
        basketConter.classList.add('nav__basket-counter--product');
      }
      counter += 1;
      basketConter.textContent = counter;
    });
  });
}

export { counterProduct };
