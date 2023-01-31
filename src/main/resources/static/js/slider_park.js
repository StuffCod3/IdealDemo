/* Устанавливаем индекс слайда по умолчанию */
let slideIndexPark = 1;
showSlidesPark(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlidePark() {
    showSlidesPark(slideIndexPark += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlidePark() {
    showSlidesPark(slideIndexPark -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlidePark(n) {
    showSlidesPark(slideIndexPark = n);
}

/* Функция перелистывания */
function showSlidesPark(n) {
    let i1;
    let slides1 = document.getElementsByClassName("item_park");
    
    if (n > slides1.length) {
      slideIndexPark = 1
    }
    if (n < 1) {
        slideIndexPark = slides1.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides1) {
        slide.style.display = "none";
    }   
    slides1[slideIndexPark - 1].style.display = "block"; 
}