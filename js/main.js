const elMenuBtn = document.querySelector('.header__btn');
const elHeader = document.querySelector('.header');
const elMain = document.querySelector('#main');
const elBtnPrev = document.querySelector('.slick-prev');
const elBtnNext = document.querySelector('.slick-next');

elMenuBtn.addEventListener('click',() => {
  elHeader.classList.toggle('header--active');
})

elHeader.addEventListener('blur',() => {
  elHeader.classList.remove('header--active');
})

window.addEventListener("scroll",() => {
  if(window.scrollY >= 100){
    elMain.classList.add("scrolled");
  }else{
    elMain.classList.remove("scrolled");
  }
})

$('.wrapper__list').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
});