const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
//using the html tags in order to store the data in a variable

const myQuestions = [
  {
    question: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the best site ever created?",
    answers: {
      a: "SitePoint",
      b: "Simple Steps Code",
      c: "Trick question; they're both the best"
    },
    correctAnswer: "c"
  },
  {
    question: "Where is Waldo really?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Sitting in a tree",
      d: "Minding his own business, so stop asking"
    },
    correctAnswer: "d"
  }
];
  const output = [];
function buildQuiz(){
  // we'll need a place to store the HTML output

  myQuestions.forEach(
    // for each question...
    (currentQuestion, questionNumber) => {

      const answers = [];
      // we'll want to store the list of answer choices

      for(letter in currentQuestion.answers){
        //for each of the answer choices
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
        //adding an html radio button, which means that the options are mutually exclusive and they can only choose one
      }

      output.push(
        //adding this question and its ansers to the output (kind of like appending and it says how many items are there)
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
  quizContainer.innerHTML = output.join('');
  //putting all of our data into a string on HTML
}

myQuestions.forEach( (currentQuestion, questionNumber) => {
  // here goes the code we want to run for each question
  // we'll want to store the list of answer choices
const answers = [];
//making an empty list to store our answer choices

for(letter in currentQuestion.answers){
  //for each possible answer in the choices


  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
  //making it mututally exclusive
}

output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
  //add everything to the big html strong of info
  quizContainer.innerHTML = output.join('');
);
});



function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');
  //defining everything in the quiz container in the answer class as an answer

  let numCorrect = 0;
  //the number that is correct is 0 (keep track of answers)

  myQuestions.forEach( (currentQuestion, questionNumber) => {
    //for each question

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    //see the nuber of the answer
    const selector = 'input[name=question'+questionNumber+']:checked';
    //say that for a question (by name) a certain question is checked
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    //user answer is saved as in the answer container whatever question is being selected in the data's value with the class .value
    // if answer is correct || = or {} the answer is not present
    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}
submitButton.addEventListener('click', showResults);
