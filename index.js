"use strict";

// store questions and answer choices, correct answer
const QUESTIONSANSWERS = [
  {
  question: "Which of these volcanoes is the highest peak in the Cascades?",
  incorrect: ["Mt Shasta", "Mt Saint Helens", "Mt Hood", "Mt Baker"],
  correct: "Mt Rainier",
  explanation: "At 14,411', <strong>Mt Rainier</strong> is the highest peak in the Cascades. Mt Shasta (14,179'), Mt Hood (11,249'), Mt Baker (10,781'), Mt Saint Helens (8,365')",
  imgSrc:"https://www.fb.pics/img/2018/04/23/mtrainier.jpg",
  imgAlt: "Mt Rainier",
  imgCap: "Mt Rainier"
  },

  {
  question: "The last major eruption of Mt Saint Helens occurred in what year?",
  incorrect: ["1972", "2010", "1995", "1999"],
  correct: "1980",
  explanation: "The eruption occurred May 18, <strong>1980</strong>, killing 57 people. The mountain lost 1,314' in elevation.",
  imgSrc: "https://www.fb.pics/img/2018/04/23/sthelens.jpg",
  imgAlt: "Eruption of Mt Saint Helens",
  imgCap: "Eruption of Mt Saint Helens, by <a href=\"https://www.flickr.com/photos/wastatednr/\">Washington DNR</a>"
  },

  {
  question: "The Cascades are located in all of the following states/provinces EXCEPT:",
  incorrect: ["British Columbia", "Washington", "Oregon", "California"],
  correct: "Idaho",
  explanation: "The Cascades run 700 miles from British Columbia in the north, through Washington and Oregon, and to California in the south.",
  imgSrc: "https://www.fb.pics/img/2018/04/23/4.jpg",
  imgCap: "Lake Valhalla and Lichtenberg Mountain, WA, by Michael Allain"
  },

  {
  question: "The world record for annual snowfall occurred in 1998-99 in which of the following Cascade locations?",
  incorrect: ["Paradise, Mt Rainier", "Snoqualmie Pass", "Crater Lake", "Mt Shasta"],
  correct: "Mt Baker Ski Area",
  explanation: "1,140\" fell at <strong>Mt Baker Ski Area</strong> that winter, breaking the previous record held by Paradise, Mt Rainier",
  imgSrc: "https://www.fb.pics/img/2018/04/23/mountbaker.jpg",
  imgAlt: "Mt Baker",
  imgCap: "Mt Baker"
  },

  {
  question: "The Cascades were formed by the subduction of which tectonic plate under the North American Plate?",
  incorrect: ["Nazca Plate", "Eurasian Plate", "Cocos Plate", "Indian Plate"],
  correct: "Juan de Fuca Plate",
  explanation: "The <strong>Juan de Fuca</strong> plate pushes beneath the North American Plate. High temperatures and pressures generate volcanic activity.",
  imgSrc: "https://www.fb.pics/img/2018/04/27/temp.png",
  imgAlt: "Diagram of Juan de Fuca Plate subduction",
  imgCap: "Diagram of Juan de Fuca Plate subduction, by <a href=\"https://commons.wikimedia.org/wiki/User:Surachit\">Sucharit</a>"
  },

  {
  question: "Mt Rainier, Mt Hood, Mt St Helens, and Mt Baker were named during a 1792 expedition led by whom?",
  incorrect: ["James Cook", "Meriwether Lewis", "William Clark", "John Jacob Astor"],
  correct: "George Vancouver",
  explanation: "<strong>George Vancouver</strong> was a Bristish Royal Navy Captain who led voyage around the world and charted the PNW coast",
  imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Probably_George_Vancouver_from_NPG.jpg",
  imgAlt: "Portrait of George Vancouver",
  imgCap: "George Vancouver"
  },

  {
  question: "Which of the following are Native American names for Mt Rainier and Mt Hood, respectively?",
  incorrect: ["Klickitat, Denali", "Kulshan, Seekseekqua", "Walmsini, Ako-Yet", "Puyallup, Snoqualmie"],
  correct: "Tahoma, Wy'east",
  explanation: "Rainier is known as Tahoma or Tacoma, and Hood is named Wy'east, although names differ among tribes",
  imgSrc: "https://www.fb.pics/img/2018/04/23/wyeast.jpg",
  imgAlt: "Mt Hood (Wy'east)",
  imgCap: "Mt Hood (Wy'east)"
  },

  {
  question: "With a maximum depth of 1,949' deep, this Cascade lake is the deepest in the United States:",
  incorrect: ["Lake Washington", "Klamath Lake", "Snow Lake", "Lake Chelan"],
  correct: "Crater Lake",
  explanation: "<strong>Crater Lake</strong> was formed around 7,700 years ago by the collapse of Mount Mazama",
  imgSrc: "https://www.fb.pics/img/2018/04/23/craterlake.jpg",
  imgAlt: "Crater Lake",
  imgCap: "Crater Lake"
  },

  {
  question: "Which trail, stretching from Mexico to Canada, follows the entire length of the Cascade Range?",
  incorrect: ["Continental Divide Trail", "Appalachian Trail", "Great Western Tail", "Oregon Trail"],
  correct: "Pacific Crest Trail",
  explanation: "The Pacific Crest Trail (PCT) is 2,659 miles long and also follows the Sierra Nevada mountain range in California",
  imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Pacific_Crest_Trail_Mount_Rainier.jpg",
  imgAlt: "PCT sign in front of mountain trail",
  imgCap: "PCT sign in front of mountain trail by <a href=\"https://www.flickr.com/people/88714478@N04\">Samantha Levang</a>"
  },

  {
  question: "Which of the following was the first established route through the Cascade Range and final portion of the Oregon Trail?",
  incorrect: ["Northwest Passage", "Santiam Wagon Road", "California Trail", "Bozeman Trail"],
  correct: "Barlow Road",
  explanation: "Built in 1846, the <strong>Barlow Road</strong> allowed travelers to avoid floating the treacherous rapids of the Columbia River",
  imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Barlow_Road_segment_near_Wamic_Oregon.jpg",
  imgAlt: "Barlow Road near Wamic, Oregon",
  imgCap: "Barlow Road near Wamic, OR, by Ian Poellet"
  },

];

//restart the quiz app
function handleRestart() {
  $(".restart-btn").click(function(event){
    // set score = 0
    $(".container").data("score", 0);
    // set question = 0
    $(".container").data("question", 0);
    //render new quiz
    renderQuestionHeader()
    renderQuestion();
    handleAnswerButtons();
  });
}

function getClassIcon(classification) {
  if (classification === "Master Mountaineer") {
    return "https://www.fb.pics/img/2018/04/25/master.png";
  } else if (classification === "Avid Outdoorsman") {
    return "https://www.fb.pics/img/2018/04/25/avid.png";
  } else if (classification === "Casual Explorer") {
    return "https://www.fb.pics/img/2018/04/25/casual.png";
  } else {
    return "https://www.fb.pics/img/2018/04/25/novice.png";
  }
}

function getClassification(finalScore){
  if (finalScore >= 8){
    return "Master Mountaineer";
  } else if (finalScore >=6) {
    return "Avid Outdoorsman";
  } else if (finalScore >=4) {
    return "Casual Explorer";
  } else {
    return "Novice";
  }
}

function renderFinalScreen() {
  // get final score
  const finalScore = getScore();
  // get classification
  const classification = getClassification(finalScore);
  // get class icons
  const classIcon = getClassIcon(classification);
  // display "start over" button and start handler
  $(".container").html(
    `<h2 class="final-score">Final Score</h2>
    <h2 class="final-score">${finalScore}/10</h2>
    <h3 class="final-class">You're a ${classification}</h3>
    <img class="final-icon" src=${classIcon}>
    <button type="button" name="restart-button" class="restart-btn">Restart Quiz</button>`
  );
  handleRestart();
}

function incrementQuestIndex() {
  const currQuestIndex = getQuestionIndex();
  $(".container").data("question", currQuestIndex+1);
  $(".currQuest").html(`${currQuestIndex+2}`);
}

// moves on to next question or final page when "next" is clicked
function handleNextButton() {
  $(".next-btn").click(function(event){
    const currQuestIndex = getQuestionIndex();
    // if last question => render final page; else, render next question
    if (currQuestIndex === QUESTIONSANSWERS.length-1) {
      renderFinalScreen();
    } else {
      incrementQuestIndex();
      // remove CSS style classes for previous answer
      $(".js-question-cont").removeClass("correct incorrect");
      // render next question and answer buttons
      renderQuestion();
      handleAnswerButtons();
    }
  })
}

//render answer with image and next button
function renderAnswer(){
  const currQuestIndex = getQuestionIndex();
  // render correct answer
  $(".js-question-cont").append("<p class=\"answer-text\">" + QUESTIONSANSWERS[currQuestIndex].explanation + "</p>");
  // render "Next" button
  $(".answer-text").after(`<button type="button" name="next" id="next" class="next-btn">Next</button>`);
  handleNextButton();
  // render answer image if screen size > 768px
  if (window.matchMedia("(min-width: 768px)").matches) {
    const imgSrc = QUESTIONSANSWERS[currQuestIndex].imgSrc;
    const imgAlt = QUESTIONSANSWERS[currQuestIndex].imgAlt;
    const imgCap = QUESTIONSANSWERS[currQuestIndex].imgCap;
    $(".js-question-cont").append(
      `<figure>
        <img src="${imgSrc}" alt="${imgAlt}" class="ans-img">
        <figcaption>${imgCap}</figcation>
      </figure>`
    );
  }
}

//increments score
function incrementScore (){
  const currScore = getScore();
  // increment score data attribute
  $(".container").data("score", currScore+1);
  // increment display of score
  $("span.currScore").html(currScore+1);
}

// red tinting and "Incorrect" message
function displayIncorrect() {
  $(".js-question-cont").addClass("incorrect");
  $("form.questions").append("<h3 class=\"feedback\">Incorrect</h3>");
}

// green tinting and "Correct" message
function displayCorrect(){
  $(".js-question-cont").addClass("correct");
  $("form.questions").append("<h3 class=\"feedback\">Correct!</h3>");
}

// evaluate whether selected answer is correct
function evaluateChoice(response) {
  // get index of current question
  const currQuestIndex = getQuestionIndex();
  // get string value of correct answer
  const trueAns = QUESTIONSANSWERS[currQuestIndex].correct;
  //if correct, increment score and display "Correct!", else display "Incorrect"
  if (response === trueAns) {
    incrementScore();
    displayCorrect();
  } else {
    displayIncorrect();
  }
  renderAnswer();
}

// listen for clicks on the answer buttons
function handleAnswerButtons() {
  $("form.questions").on("click", ".ans-btn", function(event){
    // get name (letter) of clicked button
    const btnSelected = $(event.currentTarget).attr("name");
    // get string for selected answer choice
    const ansSelected = ($(`label[for=${btnSelected}]`).html());
    // clear answer choices
    $(".answer-choices").remove();
    //check if answer choice was correct
    evaluateChoice(ansSelected);
  });
}

// shuffle answer choices into random order
// Fisher-Yates shuffle from https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function generateQuestionString (questIndex) {
  // get current question
  const currQuestion = QUESTIONSANSWERS[questIndex].question;
  // get the incorrect answer choices
  const answerChoices = QUESTIONSANSWERS[questIndex].incorrect.slice();
  //add correct answer choice
  answerChoices.push(QUESTIONSANSWERS[questIndex].correct);
  // shuffle the answer choices
  const shuffledChoices = shuffle(answerChoices);
  // generate HTML for the question, answer choices, and buttons
  const questionString =
  `<form class="questions" action="" method="post">
    <fieldset>
      <legend>${currQuestion}</legend>
      <div class="answer-choices">
        <button type="button" name="A" id="A" class="ans-btn">A</button>
        <label for="A">${shuffledChoices[0]}</label><br>
        <button type="button" name="B" id="B" class="ans-btn">B</button>
        <label for="B">${shuffledChoices[1]}</label><br>
        <button type="button" name="C" id="C" class="ans-btn">C</button>
        <label for="C">${shuffledChoices[2]}</label><br>
        <button type="button" name="D" id="D" class="ans-btn">D</button>
        <label for="D">${shuffledChoices[3]}</label><br>
        <button type="button" name="E" id="E" class="ans-btn">E</button>
        <label for="E">${shuffledChoices[4]}</label>
      </div>
    </fieldset>
  </form>`;
  return questionString;
}

// renders specified question in the DOM
function renderQuestion(){
  const currQuestionIndex = getQuestionIndex();
  const questionString = generateQuestionString(currQuestionIndex);
  $(".js-question-cont").html(questionString);
}

function getScore() {
  return $(".container").data("score");
}

function getQuestionIndex() {
  return $(".container").data("question");
}

function renderQuestionHeader(){
  const currScore = getScore();
  const currQuestIndex = getQuestionIndex();
  const questionHeader =
  `<header>
    <div class="question-number">
      <h2>Q<span class="currQuest">${currQuestIndex+1}</span></h2>
    </div>
    <div class="score">
      <h2>Score: <span class="currScore">${currScore}</span>/10</h2>
    </div>
  </header>
  <div class="js-question-cont"></div>`;
  $(".container").html(questionHeader);
}

// Clicking "start" button renders first question, starts answer button handler
function handleStart(){
  // event handler for "Start" button
  $(".js-start").click(function(event) {
    //render the question number and score
    renderQuestionHeader()
    //render the question
    renderQuestion();
    // event handler for the answer choice buttons
    handleAnswerButtons();
  });
};

// on page load, call handleStart
$(handleStart);
