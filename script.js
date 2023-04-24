"use strict";

function randomNumber() {
  const number = Math.floor(Math.random() * 100);

  function repeatsQuestion() {
    const userNumber = prompt("Угадай числа от 0 до 100");

    console.log(userNumber);
    console.log(number);

    if (userNumber == null) {
      return alert(`Игра окончена`);
    }
    if (userNumber == "") {
      alert(`Введите число!`);
      return repeatsQuestion();
    }
    if (userNumber == number) {
      return alert(`Поздравляю, Вы угадали!!!`);
    }
    if (userNumber > number) {
      alert(`Загаданное число больше`);
      return repeatsQuestion();
    }
    if (userNumber < number) {
      alert(`Загаданное число меньше`);
      return repeatsQuestion();
    }
    if (typeof userNumber !== Number) {
      alert(`Введите число!`);
      return repeatsQuestion();
    }
  }
  return repeatsQuestion();
}

randomNumber();
