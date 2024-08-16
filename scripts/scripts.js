// const btnGogo = document.querySelector(".btn-gogo");

const btnFlashcard = document.querySelector(".btn-flashcard");

const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-inner");

let interval = 0;

// Specify Time Limit for Progress Bar
let timeLimit = 5;

btnFlashcard.addEventListener("click", () => {

  interval = 5;

  var countDown = setInterval (() => {
    interval = interval - 0.01;

    let progressWidth = interval * 20;

    if (interval > 0) {
      progressBar.style.width = progressWidth + '%';
      timeSpan.innerHTML = Math.floor((interval) + 1) + 's';
      checkColors(progressWidth);
    } else {
      clearInterval(countDown);
      progressBar.style.width = '0%';
      timeSpan.innerHTML = 'Game Over';
    }
  }, timeLimit * 2);
});

// btnGogo.addEventListener("click", () => {

//   // Report Time Remaining on Progress Bar (used for calculating Points)
  
//   alert((Math.floor(interval * 10)) / 10);
// });


const checkColors = (width) => {
  if (width > 30) {
    progressBar.style.background = "green";
  } else if (width > 25) {
    progressBar.style.background = "yellowgreen";
  } else if (width > 20) {
    progressBar.style.background = "yellow";
  } else if (width > 15) {
    progressBar.style.background = "orange";
  } else if (width > 10) {
    progressBar.style.background = "orangered";
  } else if (width > 5) {
    progressBar.style.background = "red";
  } else {
    progressBar.style.background = "purple";
  } 
};  


