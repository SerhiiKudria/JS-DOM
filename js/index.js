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
