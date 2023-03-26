setInterval(setClock);
// Elements selection
const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");
const digitalTime = document.querySelector("[data-digital-time]");
const date = document.querySelector("[data-date]");
//setClock
function setClock() {
  const dateData = new Date();
  date.innerHTML = `${dateData.getDate()}-${dateData.getMonth()}-${dateData.getFullYear()}`;
  digitalTime.innerHTML = `${
    dateData.getHours() != 12 ? dateData.getHours() - 12 : dateData.getHours()
  }-${dateData.getMinutes()}-${dateData.getSeconds()}`;
  const secondRatio = dateData.getSeconds() / 60;
  const minuteRatio = (secondRatio + dateData.getMinutes()) / 60;
  const hourRatio = (minuteRatio + dateData.getHours()) / 12;
  handTurner(secondHand, secondRatio);
  handTurner(minuteHand, minuteRatio);
  handTurner(hourHand, hourRatio);
}
function handTurner(hand, handRatio) {
  hand.style.setProperty("--rotation", handRatio * 360);
}
setClock();
