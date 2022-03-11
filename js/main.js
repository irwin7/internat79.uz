const elMenuBtn = document.querySelector(".header__btn");
const elHeader = document.querySelector(".header");
const elMain = document.querySelector("#main");
const elBtnPrev = document.querySelector(".slick-prev");
const elBtnNext = document.querySelector(".slick-next");
const elActivities = document.querySelectorAll(".activities__control");
const elActivity = document.querySelector(".activity");
const template = document.querySelector('#activityTemplate');

addItemHandler(template,activityData[0])

function removeActiveHandler(items,className) {
  for(let item of items){
    item.classList.remove(className);
  }
}

function addItemHandler(templ,currentData) {
  const clone = templ.content.cloneNode(true);
  const title = clone.querySelector('.activity__title');
  const text = clone.querySelector('.activity__text');
  const staticText = clone.querySelector('.activity__static-text');
  const advantages = clone.querySelectorAll('.activity__inner-text');
  const activityImg = clone.querySelector('.activity__img');
  
  title.textContent = currentData.title;
  text.textContent = currentData.text;
  staticText.textContent = currentData.staticText;
  activityImg.src = currentData.img;
  for(let i = 0; i < currentData.advantages.length; i++){
    advantages[i].textContent = currentData.advantages[i];
  }

  elActivity.innerHTML = "";
  elActivity.appendChild(clone)
}

elMenuBtn.addEventListener("click", () => {
  elHeader.classList.toggle("header--active");
});

elHeader.addEventListener("blur", () => {
  elHeader.classList.remove("header--active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    elMain.classList.add("scrolled");
  } else {
    elMain.classList.remove("scrolled");
  }
});

for(let i = 0; i < elActivities.length; i++) {
  elActivities[i].addEventListener("click", () => {
    const actValue = elActivities[i].attributes.activitytype.nodeValue;
    const currentData = activityData.filter((item) => item.type === actValue);
    addItemHandler(template,currentData[0]);
    removeActiveHandler(elActivities,'activities__control--active');
    elActivities[i].classList.add('activities__control--active');
  });
}

$(".wrapper__list").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
});













