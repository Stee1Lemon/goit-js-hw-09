import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', startingFn);

function startingFn(event) {
  event.preventDefault();

  let position = 0;
  let delay = Number(document.querySelector('[name="delay"]').value);
  const step = Number(document.querySelector('[name="step"]').value);
  const amount = document.querySelector('[name="amount"]').value;

  for (let i = 0; i < amount; i += 1) {
    position += 1;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
