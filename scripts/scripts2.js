// Initialize Flashcard
let currentFlashcard = {
  flashcard: '',
  qstring: '',
  astring: '',
  rstring: '',
  difficulty: 0
};

let encounterStats = {
  // currentFlashcard
  response: '',
  isCorrectResponse: false,
  pointsEarned: 0,
  timeSaved: 0,
  newDifficultyLevel: 0,
}

// Set names for top three boxes and top three buttons
const pointsBox = document.querySelector("#points-display");
const studentNameBox = document.querySelector("#student-name-display");
const proficiencyBox = document.querySelector("#proficiency-display");
const flashcardButton = document.querySelector("#flashcard-display");
const responseButton = document.querySelector("#response-display");
const answerButton = document.querySelector("#answer-display");

// Reset the starting colors for the 3 main buttons 
// Currently not working, not sure why
flashcardButton.style.backgroundColor = 'white';
responseButton.style.backgroundColor = 'lightblue';
answerButton.style.backgroundColor = 'lightpink';
flashcardButton.style.color = 'black';
responseButton.style.color = 'black';
answerButton.style.color = 'black'; 

// Constant assignments for 19 simple input buttons + Go button
const btnPi = document.getElementById('btn-pi');
const btnSqrt = document.getElementById('btn-sqrt');
const btnExp = document.getElementById('btn-exp');
const btnFraction = document.getElementById('btn-fraction');

const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btnTimes = document.getElementById('btn-times');

const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btnMinus = document.getElementById('btn-minus');

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btnPlus = document.getElementById('btn-plus');

const btnDecimal = document.getElementById('btn-decimal');
const btn0 = document.getElementById('btn-0');
const btnPercent = document.getElementById('btn-percent');
const btnGo = document.getElementById('btn-go');


// Event listeners for 19 simple input buttons
btnPi.addEventListener("click", () => {
  updateCalculation('pi');
});

btnSqrt.addEventListener("click", () => {
  updateCalculation('sqrt');
});

btnExp.addEventListener("click", () => {
  updateCalculation('^');
});

btnFraction.addEventListener("click", () => {
  updateCalculation('6');
});

btn7.addEventListener("click", () => {
  updateCalculation('7');
});

btn8.addEventListener("click", () => {
  updateCalculation('8');
});

btn9.addEventListener("click", () => {
  updateCalculation('9');
});

btnTimes.addEventListener("click", () => {
  updateCalculation(' X ');
});

btn4.addEventListener("click", () => {
  updateCalculation('4');
});

btn5.addEventListener("click", () => {
  updateCalculation('5');
});

btn6.addEventListener("click", () => {
  updateCalculation('6');
});

btnMinus.addEventListener("click", () => {
  updateCalculation(' - ');
});

btn1.addEventListener("click", () => {
  updateCalculation('1');
});

btn2.addEventListener("click", () => {
  updateCalculation('2');
});

btn3.addEventListener("click", () => {
  updateCalculation('3');
});

btnPlus.addEventListener("click", () => {
  updateCalculation(' + ');
});

btnDecimal.addEventListener("click", () => {
  updateCalculation('.');
});

btn0.addEventListener("click", () => {
  updateCalculation('0');
});

btnPercent.addEventListener("click", () => {
  updateCalculation('%');
});

// When student clicks Flashcard button, the system starts a new Encounter
flashcardButton.addEventListener("click", startNewEncounter);


btnGo.addEventListener("click", () => {
  // alert((Math.floor(interval * 10)) / 10);

  // Start by assuming answer was wrong.
  encounterStats.isCorrectResponse = false;
          
  // Now check answer.
  if (calculation === currentFlashcard.rstring) {
  // turn both Response and Answer box green
  flashcardButton.style.backgroundColor = 'green';
  responseButton.style.backgroundColor = 'green';
  answerButton.style.backgroundColor = 'green';
  flashcardButton.style.color = 'white';
  responseButton.style.color = 'white';
  answerButton.style.color = 'white'; 
  
  answerButton.textContent = correctStrings[currentFlashcard.difficulty - 1]
  
  // Log to encounterStats that the Response was, in fact, correct.
  encounterStats.isCorrectResponse = true;
} else {
  // turn Response box red and Answer box green 
  flashcardButton.style.backgroundColor = 'red';
  responseButton.style.backgroundColor = 'red';
  answerButton.style.backgroundColor = 'green';
  flashcardButton.style.color = 'white';
  responseButton.style.color = 'white';
  answerButton.style.color = 'white'; 
  answerButton.textContent = currentFlashcard.astring;
}

//Log response to encounterStats
encounterStats.response = calculation;
});

let calculation = '';

// Function displays Student Response in the proper field
function updateCalculation(x) {
  calculation += x;
  document.querySelector('.response-display')
.innerHTML = calculation;
}




function startNewEncounter () {

// Save data from previous Encouter - not yet written

// Clear Response from the previous Encounter
  calculation = "";
  document.querySelector('.response-display').innerHTML = calculation;
    
// Randomize an index value  
  let n = Math.floor(Math.random() * objectFlashcardDeck.length);

// Use this index value to pull a flashcard from the deck
  currentFlashcard = objectFlashcardDeck[n];

// Display this Flashcard
  flashcardButton.textContent = currentFlashcard.qstring;

//Clear Answer from the previous Encounter
  answerButton.textContent = '';
}
