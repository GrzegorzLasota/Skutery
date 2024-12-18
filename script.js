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
    }
    // else {
    //   box.classList.remove("show");
    // }
  });
}
