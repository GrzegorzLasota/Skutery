const ONE_SECOND = 1000;

class Clock {
  constructor() {
    this.limitTime = null;
    this.currentTime = 0;
    this.$clock = document.querySelector(".hours");
    this.clock = null;
  }

  render(string) {
    this.$clock.textContent = string;
  }

  start(formattedTime) {
    this.limitTime = Clock.parseSeconds(formattedTime);
    this.update();
    this.clock = setInterval(() => {
      this.currentTime += ONE_SECOND;
      this.update();

      if (this.isFinished()) {
        this.stop();
      }
    }, ONE_SECOND);
  }

  update() {
    let remain = this.getRemainingTime();
    let time = Clock.formattedTime(remain);
    this.render(time);
  }

  getRemainingTime() {
    return this.limitTime - this.currentTime;
  }

  stop() {
    clearInterval(this.clock);
    this.$clock.classList.add("stop-time");
    // playAudio("alarm.mp3");
  }

  isFinished() {
    return this.currentTime === this.limitTime;
  }

  static parseSeconds(time) {
    let [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 * ONE_SECOND + seconds * ONE_SECOND;
  }

  static formattedTime(miliseconds) {
    let minutes = Math.floor(miliseconds / ONE_SECOND / 60);
    let seconds = (miliseconds / ONE_SECOND) % 60;
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }
}

function setup() {
  let clock1 = new Clock();
  clock1.start("00:59");
}

// Jeśli chcesz włączyć odliczanie do zamknięcia salonu gdy będzie otwarty:

// window.addEventListener("DOMContentLoaded", setup);

////////////////////////////////////////Zegar///////////////////////////////////////////////////////
function timer() {
  const time = new Date();

  const year = time.getFullYear();

  elRok = document.getElementById("year");
  elRok.textContent = year + " ";
}

document.body.onload = timer;

//////////////////////////////////////////odlicznaie dni///////////////////////////////////////////////////////

function days() {
  // Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
  const current = new Date();
  const aim = new Date("Mar 1 2025 09:00:00");

  // wyliczanie roznicy
  let secondsLeft = Math.abs(current - aim) / 1000;
  let minutesLeft = parseInt(secondsLeft / 60);
  let hoursLeft = parseInt(minutesLeft / 60);
  let daysLeft = parseInt(hoursLeft / 24);
  let yearsLeft = parseInt(daysLeft / 365);

  // wyliczanie calego okresu
  secondsLeft = parseInt(secondsLeft - minutesLeft * 60);
  minutesLeft = parseInt(minutesLeft - hoursLeft * 60);
  hoursLeft = parseInt(hoursLeft - daysLeft * 24);
  daysLeft = parseInt(daysLeft - yearsLeft * 365);

  const timeDays = document.querySelector(".hours");

  timeDays.textContent = `${daysLeft}d i ${hoursLeft}g`;
}

window.addEventListener("DOMContentLoaded", days);
