"use strict";

function randomNumber() {
  const number = Math.floor(Math.random() * 100);
  let count = 10;

  function repeatsQuestion() {
    const userNumber = prompt("Угадай числа от 0 до 100");
    count--;

    console.log(userNumber);
    console.log(number);

    if (count > 0) {
      if (userNumber == null) {
        return alert(`Вы выбрали отмена. Пока`);
      }
      if (userNumber == "") {
        alert(`Введите число!`);
        return repeatsQuestion();
      }
      if (userNumber == number) {
        let newGame = confirm(`Поздравляю, Вы угадали!!!Хотите сыграть еще?`);
        if (newGame == true) {
          return randomNumber();
        } else {
          alert("Вы отказались продолжить.");
        }
      }
      if (userNumber > number) {
        alert(`Загаданное число меньше, осталось попыток ${count}`);
        return repeatsQuestion();
      }
      if (userNumber < number) {
        alert(`Загаданное число больше, осталось попыток ${count}`);
        return repeatsQuestion();
      }
      if (typeof userNumber !== Number) {
        alert(`Введите число!`);
        return repeatsQuestion();
      }
    } else {
      let que = confirm("Попытки закончились, хотите сыграть еще?");
      if (que == true) {
        return randomNumber();
      } else {
        return alert("Игра завершена");
      }
    }
  }
  return repeatsQuestion();
}

randomNumber();
