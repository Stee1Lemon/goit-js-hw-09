import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  btnStart: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

let selectedTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0].getTime();
    isDateInFuture(selectedDates);
  },
};

flatpickr('#datetime-picker', options);

const timer = {
  timerId: 0,
  timerOn: false,
  timeToCount: 0,

  starTimer() {
    if (this.timerOn) {
      return;
    }
    this.timerOn = true;
    this.timerId = setInterval(() => {
      this.timeToCount = selectedTime - Date.now();
      const time = convertMs(this.timeToCount);
      updateVisual(time);
      console.log(this.timeToCount);
      if (
        time.days === '00' &&
        time.hours === '00' &&
        time.minutes === '00' &&
        time.seconds === '00'
      ) {
        clearInterval(this.timerId);
        return;
      }
    }, 1000);
  },
};

refs.btnStart.addEventListener('click', timer.starTimer);

function updateVisual({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minutesEl.textContent = minutes;
  refs.secondsEl.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function isDateInFuture(selectedDates) {
  if (selectedDates[0] < Date.now()) {
    refs.btnStart.disabled = true;
    showUnableDateMessage();
  } else {
    refs.btnStart.disabled = false;
  }
}

function showUnableDateMessage() {
  Notify.failure('Please choose a date in the future', {
    timeout: 2000,
  });
}
