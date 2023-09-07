const circle = document.querySelector(".circle");
const btnStart = document.querySelector(".btn-start");
const point = document.querySelector(".point");
const inputNumber = document.querySelector(".input-number");
const playNumber = document.querySelector(".play-number");
const playColor = document.querySelector(".play-color");
const winNumberSpan = document.querySelector(".win-number");
const winColor = document.querySelector(".win-color");

btnStart.onclick = () => {
  if (inputNumber.value < 0 || inputNumber.value > 36) {
    alert("Введите номер от 0 до 36");
    inputNumber.value = "";
    return;
  }
  btnStart.disabled = true;

  playNumber.innerHTML = inputNumber.value;
  if (Number(inputNumber.value) === 0) {
    playColor.innerHTML = "green";
  } else {
    playColor.innerHTML = inputNumber.value % 2 === 0 ? "black" : "red";
  }

  circle.style.transform = "rotate(0deg)";
  let number = Math.ceil(Math.random() * 1000);
  circle.style.transform = `rotate(${number}deg)`;
  const x = point.getBoundingClientRect().x;
  const y = point.getBoundingClientRect().y;

  setTimeout(() => {
    const winNumber = document.elementFromPoint(x, y + 5).textContent;
    if (Number(winNumber) === 0) {
      winColor.innerHTML = "green";
    } else {
      winColor.innerHTML = winNumber % 2 === 0 ? "black" : "red";
    }
    winNumberSpan.innerHTML = winNumber;
    inputNumber.value = "";
    btnStart.disabled = false;
  }, 5500);
};
