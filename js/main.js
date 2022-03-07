const elMenuBtn = document.querySelector('.header__btn');
const elHeader = document.querySelector('.header');

elMenuBtn.addEventListener('click',() => {
  elHeader.classList.toggle('header--active');
})

elHeader.addEventListener('blur',() => {
  elHeader.classList.remove('header--active');
})

$('.wrapper__list').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
});