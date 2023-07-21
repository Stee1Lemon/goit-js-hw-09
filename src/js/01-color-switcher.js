const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  bodyColor: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', startRandomBodyColorInterval);
refs.btnStop.addEventListener('click', stopRandomBodyColorInterval);

let intervalID;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = randomColor;
}

function startRandomBodyColorInterval() {
  refs.btnStart.disabled = true;
    intervalID = setInterval(() => {
      changeBodyColor();
    }, 1000);
}

function stopRandomBodyColorInterval(playRandomColor) {
  refs.btnStart.disabled = false;
  clearInterval(intervalID);
}

changeBodyColor();