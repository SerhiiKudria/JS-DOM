//1) Після натискання кнопки змінити текст самої кнопки (див. textContent).
const btn = document.querySelector("button");
btn.addEventListener("click", btnClickHandler);
function btnClickHandler() {
  btn.textContent = "New Text";
  //2) При натисканні на кнопку змінюйте її колір.
  btn.style.backgroundColor = "red";
}
//3) Відобразити картинку. Зробити так, щоб при появі сторінки
//відображалася одна картинка, а при наведенні миші на неї відображалася інша.
const mainImg = document.querySelector("img");
mainImg.src =
  "https://ecooboi.com.ua/files/cache/250x250/05/ff/86/ecooboi-fizicheskaya-karta-mira-techeniya-i-poleznye-iscopaemye-i-1554126218.jpg";
mainImg.addEventListener("mouseover", mainImgMouseOverHandler);
mainImg.addEventListener("mouseout", mainImgMouseOutHandler);
function mainImgMouseOverHandler() {
  mainImg.src =
    " https://ecooboi.com.ua/files/cache/848x/18/08/24/865x230px_Ukraine.jpg";
}
function mainImgMouseOutHandler() {
  mainImg.src =
    "https://ecooboi.com.ua/files/cache/250x250/05/ff/86/ecooboi-fizicheskaya-karta-mira-techeniya-i-poleznye-iscopaemye-i-1554126218.jpg";
}
("use strict");

const slides = [
  {
    src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape1",
    description: "description 1",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape2",
    description: "description 2",
  },
  {
    src: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape3",
    description: "description 3",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape4",
    description: "description 4",
  },
];

const prevBtn = document.querySelector("button.prevBtn");
const nextBtn = document.querySelector("button.nextBtn");
const sliderImg = document.querySelector(".sliderWrapper img");
const sliderDescription = document.querySelector("p.sliderDescription");

const slider = new Slider(slides, 3);

updateSlider(slider.currentSlide);

prevBtn.onclick = prevBtnHandler;
nextBtn.onclick = nextBtnHandler;

function prevBtnHandler() {
  slider.decSlideIndex();
  updateSlider(slider.currentSlide);
}

function nextBtnHandler() {
  slider.incSlideIndex();
  updateSlider(slider.currentSlide);
}

function updateSlider(currentSlide) {
  sliderImg.src = currentSlide.src;
  sliderImg.alt = currentSlide.alt;
  sliderDescription.textContent = currentSlide.description;

  sliderImg.onerror = () => {
    sliderImg.src = "./../images/defaultSlide.jpeg";
  };
}
