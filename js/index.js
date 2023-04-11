/*Отображение модального окна при клике на кнопку*/
/*находим кнопку по id*/ /*.addEventListener действие для кнопки*/
document
  .getElementById("open-modal-btn")
  .addEventListener("click", function () {
    /*находим модальное окно по id*/ /* добавляем класс open чтобы отобразить модальное окно */ document
      .getElementById("my-modal")
      .classList.add("open");
  });

/*Скрытие модального окна. При клике на кнопку Х удаляется класс open*/
document
  .getElementById("close-my-modal-btn")
  .addEventListener("click", function () {
    /*находим модальное окно по id*/ /* добавляем класс open чтобы отобразить модальное окно */ document
      .getElementById("my-modal")
      .classList.remove("open");
  });

/*Закрытие модального окна при нажатии на Esc*/
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal").classList.remove("open");
  }
});

/*Закрытие модального окна при при клике вне окна*/
document
  .querySelector("#my-modal .modal__box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });

document.getElementById("my-modal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
