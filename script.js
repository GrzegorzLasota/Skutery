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

  if (timeDays) {
    timeDays.textContent = `${daysLeft}d i ${hoursLeft}g`;
  }
}

window.addEventListener("DOMContentLoaded", days);

//////////////////////////////////////////transition section///////////////////////////////////////////////////////

const boxes = document.querySelectorAll(".fading-box");
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = window.innerHeight + 50;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

const drops = document.querySelectorAll(".fading-drop");
window.addEventListener("scroll", checkDrops);

function checkDrops() {
  const triggerBot = window.innerHeight - 200;

  drops.forEach((drop) => {
    const dropTop = drop.getBoundingClientRect().top;

    if (dropTop < triggerBot) {
      drop.classList.add("visible");
    } else {
      drop.classList.remove("visible");
    }
  });
}

const dropsLeft = document.querySelectorAll(".fading-drop-left");
window.addEventListener("scroll", checkDropsLeft);

function checkDropsLeft() {
  const triggerBot = window.innerHeight - 200;

  dropsLeft.forEach((drop) => {
    const dropTop = drop.getBoundingClientRect().top;

    if (dropTop < triggerBot) {
      drop.classList.add("visible-left");
    } else {
      drop.classList.remove("visible-left");
    }
  });
}

const dropsRight = document.querySelectorAll(".fading-drop-right");
window.addEventListener("scroll", checkDropsRight);

function checkDropsRight() {
  const triggerBot = window.innerHeight - 200;

  dropsRight.forEach((drop) => {
    const dropTop = drop.getBoundingClientRect().top;

    if (dropTop < triggerBot) {
      drop.classList.add("visible-right");
    } else {
      drop.classList.remove("visible-right");
    }
  });
}

//////////////////////////////////////////slidery pojazdów///////////////////////////////////////////////////////

const btnFactLeft = document.querySelector(".switch-color__arrow--fact_left");
const btnFactRight = document.querySelector(".switch-color__arrow--fact_right");

const btnViesteLeft = document.querySelector(
  ".switch-color__arrow--vieste_left"
);
const btnViesteRight = document.querySelector(
  ".switch-color__arrow--vieste_right"
);

const btnVersiliaLeft = document.querySelector(
  ".switch-color__arrow--versilia_left"
);
const btnVersiliaRight = document.querySelector(
  ".switch-color__arrow--versilia_right"
);

if (btnFactLeft) {
  btnFactLeft.addEventListener("click", function () {
    $(".pro-colors--fact_hide").removeClass("pro-colors--fact_show");
    $(".pro-colors--fact_one").removeClass("pro-colors--fact_run");
  });
}
if (btnFactRight) {
  btnFactRight.addEventListener("click", function () {
    $(".pro-colors--fact_one").addClass("pro-colors--fact_run");
    $(".pro-colors--fact_hide").addClass("pro-colors--fact_show");
  });
}

if (btnViesteLeft) {
  btnViesteLeft.addEventListener("click", function () {
    $(".pro-colors--vieste_hide").removeClass("pro-colors--vieste_show");
    $(".pro-colors--vieste_one").removeClass("pro-colors--vieste_run");
  });
}
if (btnViesteRight) {
  btnViesteRight.addEventListener("click", function () {
    $(".pro-colors--vieste_one").addClass("pro-colors--vieste_run");
    $(".pro-colors--vieste_hide").addClass("pro-colors--vieste_show");
  });
}

if (btnVersiliaLeft) {
  btnVersiliaLeft.addEventListener("click", function () {
    $(".pro-colors--versilia_hide").removeClass("pro-colors--versilia_show");
    $(".pro-colors--versilia_one").removeClass("pro-colors--versilia_run");
  });
}
if (btnVersiliaRight) {
  btnVersiliaRight.addEventListener("click", function () {
    $(".pro-colors--versilia_one").addClass("pro-colors--versilia_run");
    $(".pro-colors--versilia_hide").addClass("pro-colors--versilia_show");
  });
}
