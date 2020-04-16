// ~~ array of all of my advice
var allMyAdvice = [
  {
    language: "en",
    motivation: true,
    advice:
      "Sometimes you just have to push through the hard stuff to enjoy the outcome"
  },
  {
    language: "en",
    motivation: true,
    advice: "Ask yourself: How does this connect to my larger goals?"
  },
  {
    language: "en",
    motivation: true,
    advice: "Try for 5 minutes"
  },
  {
    language: "de",
    motivation: true,
    advice: "Manchmal muss man sich durchsetzen, um das Ergebnis zu genießen"
  },
  {
    language: "de",
    motivation: true,
    advice:
      "Frag dich selbst: Wie verbindet diese Situation sich mit meinen Lebensziele?"
  },
  {
    language: "de",
    motivation: true,
    advice: "Versuche es für fünf Minuten"
  },
  {
    language: "en",
    motivation: false,
    advice: "Enjoy nature - go for a walk"
  },
  {
    language: "en",
    motivation: false,
    advice: "Ask yourself: Why do I have to prove myself?"
  },
  {
    language: "en",
    motivation: false,
    advice: "Take a break offline"
  },
  {
    language: "de",
    motivation: false,
    advice: "Öffne einem Fenster und denk an einen Spaziergang"
  },
  {
    language: "de",
    motivation: false,
    advice: "Frag dich selbst: Warum sollte ich mich beweisen?"
  },
  {
    language: "de",
    motivation: false,
    advice: "Mach eine Pause... ohne Internet"
  }
];

// ~~ user input variables
var myMotivation, myAdvice;
var eligibleAdvice = [];

function chooseAdvice() {
  let myAdvice =
    eligibleAdvice[Math.floor(Math.random() * eligibleAdvice.length)];
  console.log(myAdvice);
  adviceElement.textContent = myAdvice;
  adviceElement.style.display = "block";
}

function filterAdvice() {
  eligibleAdvice = [];
  for (let i = 0; i < allMyAdvice.length; i++) {
    if (allMyAdvice[i].motivation == myMotivation && allMyAdvice[i].language == languageOfPage) {
      eligibleAdvice.push(allMyAdvice[i].advice);
    }
  }
}

function resetAdvice() {
  adviceElement.textContent = "";
  adviceElement.style.display = "none";
}

// ~~ page variables
var languageOfPage = "de";
const buttonMotivate = document.getElementById("motivate");
const buttonDemotivate = document.getElementById("demotivate");
const buttonLanguage = document.getElementById("language");
const adviceElement = document.getElementById("advice");

// ~~ buttons
buttonMotivate.addEventListener("click", function motivateYou() {
  myMotivation = true;
  filterAdvice();
  chooseAdvice();
});

buttonDemotivate.addEventListener("click", function demotivateYou() {
  myMotivation = false;
  filterAdvice();
  chooseAdvice();
});

buttonLanguage.addEventListener("click", function changeLanguage() {
  let headline = document.getElementById("headline");
  let spanOne = document.getElementById("span-one");
  let spanTwo = document.getElementById("span-two");

  let deText = {
    headline: "Ich habe keinen Bock!",
    buttonMotivate: "Motivieren",
    buttonDemotivate: "Demotivieren",
    buttonLanguage: "To English",
    spanOne: "Foto von ",
    spanTwo: " auf "
  };
  let enText = {
    headline: "I don't want to!",
    buttonMotivate: "Motivate",
    buttonDemotivate: "Demotivate",
    buttonLanguage: "Auf Deutsch",
    spanOne: "Photo by ",
    spanTwo: " from "
  };

  resetAdvice();

  console.log(languageOfPage);
  if (languageOfPage === "de") {
    languageOfPage = "en";
    headline.textContent = enText.headline;
    buttonMotivate.textContent = enText.buttonMotivate;
    buttonDemotivate.textContent = enText.buttonDemotivate;
    buttonLanguage.textContent = enText.buttonLanguage;
    spanOne.textContent = enText.spanOne;
    spanTwo.textContent = enText.spanTwo;
    return languageOfPage;
  } else {
    languageOfPage = "de";
    headline.textContent = deText.headline;
    buttonMotivate.textContent = deText.buttonMotivate;
    buttonDemotivate.textContent = deText.buttonDemotivate;
    buttonLanguage.textContent = deText.buttonLanguage;
    spanOne.textContent = deText.spanOne;
    spanTwo.textContent = deText.spanTwo;
    return languageOfPage;
  }
});

/* ~~ todo

add more advice to the object?

1. javascript - classes
convert to a class - see bottom
make it work again

2. css - fun
make ui more fun, nice effects
layout for phones

3. publish - remove console logs, write up for blog
remove console logs, remove/rename testing variables and unnecessary comments

goals from this 

decreasing html complexity
first made it too complicated in HTML with boxes for +- and by language - when i can just dynamically change content all of the time in the same box and the user can change the language between German and English - thinking of HTML as the box i put the content in made it easier - and close to taking content from JSON and doing something with it

JavaScript
-- classes - an instance of MyAdvice from allMyAdvice object
-- toggling
-- mapping / for each an array

UI of language changes on a website / what does a fun website feel like
-- what would the language default be - for a german phrase... german
-- color and big buttons

work on css transitons and animations
*/

/*
// class
class RandomAdvice {}

const adviceObject = {
  language: "xx",
  motivation: true, // demotivation is false
  advice: "words"
};

// convert functions to class methods
//instance is MyAdvice
*/
