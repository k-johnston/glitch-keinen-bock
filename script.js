function chooseAdvice() {
  
}

var myChoice = document.getElementsByClassName("choose");
var myAdvice = document.getElementsByClassName("advice");


/*
colorOne.addEventListener("click", function findRandomColor() {
  colorOne.className = "color";
  let colorRandom = colorArray[Math.floor(Math.random() * colorArray.length)];
  colorRandomValue = colorRandom.toString();
  colorOne.classList.add(colorRandomValue);

  let valueRandom = colorRandom;
  valueOne.innerHTML = valueRandom;
});

addEventListener("click", function() {
  console.log("it works");
});



// Function to change the content of t2
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// Add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);







fix toggle language
        <ul>
          <li id="en" class="">EN</li>
          <li id="de" class="active">DE</li>
        </ul>
        
        function toggleLanguage() {
  var languageEnglish = document.getElementById("en");
  var classEnglish = document.getElementsByClassName("en");

  var languageDeutsch = document.getElementById("de");
  var classDeutsch = document.getElementsByClassName("de");

  if (languageEnglish.classList.contains("active") == true) {
    classDeutsch.style.display = "none";
    classEnglish.style.display = "block";
  } else if (languageDeutsch.classList.contains("active") == true) {
    classEnglish.style.display = "none";
    classDeutsch.style.display = "block";
  }  
} // needs an event handler


on click
the other side goes away
the advice shows up and then goes away to reset to the original / randomly selected motivation
          <h2 class="en">Motivate</h2>
          <h2 class="de">Motivieren</h2>
          <p class="advice en hidden">Sometimes you just have to push through the hard stuff to enjoy the outcome</p>
          <p class="advice en hidden">Ask yourself: How does this connect to my larger goals?</p>
          <p class="advice en hidden">Try for 5 minutes</p>
          <p class="advice de hidden">Sometimes you just have to push through the hard stuff to enjoy the outcome</p>
          <p class="advice de hidden">Ask yourself: How does this connect to my larger goals?</p>
          <p class="advice de hidden">Try for 5 minutes</p>
        </div>


some nice effects in loading it, transitions

*/

/* todo 
design 
JS
what to do to switch langauge? https://stackoverflow.com/questions/32008125/using-javascript-to-change-website-language
responsive of course 
buttons
*/
