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

// function playAudio(src) {
//   let audio = new Audio(src);
//   audio.load();
//   audio.play();
// }

function setup() {
  let clock1 = new Clock();
  clock1.start("00:01");
}

window.addEventListener("DOMContentLoaded", setup);
