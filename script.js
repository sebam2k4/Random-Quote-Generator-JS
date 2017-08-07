//dataset of quotes and their authors
var quotesPool = [["Less is More", "Ludwig Mies Van Der Rohe"],
              ["God is in the Details", "Ludwig Mies Van Der Rohe"],
              ["Architecture starts when you carefully put two bricks together. There it begins", "Ludwig Mies Van Der Rohe"],
              ["Good building come from good people and all problems are solved by good design", "Stephen Gardiner"],
              ["There are 360 degrees, so why stick to one?", "Zaha Hadid"],
              ["Form ever follows function", "Louis Sullivan"],
              ["Recognizing the need is the primary condition of design", "Charles Eames"],
              ["Architecture is the learned game, correct and magnificent, of forms assembled in the light", "Le Corbusier"],
              ["An idea is salvation by imagination", "Frank Lloyd Wright"],
              ["When I'm working on a problem, I never think about beauty. But when I've finished, if the solution is not beautiful I know it's wrong", "Buckminster Fuller"],
              ["As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown", "Norman Foster"],
              ["To provide meaningful architecture is not to parody history but to articulate it", "Daniel Libeskind"],
              ["To create, one must first question everything", "Eileen Gray"],
              ["One of the great beauties of architecture is that each time, it is like life starting all over again", "Renzo Piano"],
              ["You’ve got to bumble forward into the unknown", "Frank Gehry"]];


var colorsPool = [["red", "blue", "green"],
                  ["pink", "purple", "magenta"],
                  ["orange", "yellow", "black"]];
  
// HELPER FUNCTION
//Generate & return a random index value based on total array length
function pickRandomIndex(param1) {
  "use strict";
  return param1[Math.floor(Math.random() * param1.length)];
}

//Pick new random quote & assign quote and author to variables
function pickNewQuote() {
  "use strict";
  // Call the pickRandomQuote function to assign random index value
  var randomQuote = pickRandomIndex(quotesPool);
  //assign index values to variables
  var quote = randomQuote[0];
  var author = randomQuote[1];
  return [quote, author];
}

//OnClick EVENT FUNCTION 1
//Display new quote on page and update social media share links
//on 'Next Quote' button click event.
function showNewQuote() {
  "use strict";
  //assign returned values to new variables
  var current = pickNewQuote();
  var currentQuote = current[0];
  var currentAuthor = current[1];
  
  //Display new random quote and author on page
  document.getElementById("quote").innerHTML = currentQuote;
  document.getElementById("author").innerHTML = currentAuthor;

  //Update Tweet button - modify tweet link to add current quote and author
  var tweet = document.getElementById("tweet-quote");
  tweet.href = 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + currentQuote + '" -' + currentAuthor;
}

//onClick EVENT FUNCTION 2
//Pick & dipslay new random color
function showNewColor() {
  "use strict";
  // Call the pickRandomQuote function to assign random index value
  var randomColor = pickRandomIndex(colorsPool);
  //assign index values to variables
  var light = randomColor[0];
  var dark = randomColor[1];
  var darker = randomColor[2];
  
  //Assign new random color
  document.body.style.background = light;
  document.body.style.color = dark;
  document.querySelector(".border").style.borderColor = dark;
  document.querySelector(".border").style.boxShadow =  "4px 4px 0px 3px " + darker;
  document.querySelectorAll(".border-smaller")[0].style.borderColor = dark;
  document.querySelectorAll(".border-smaller")[0].style.boxShadow =  "3px 3px 0px 2px " + darker;
  document.querySelectorAll(".border-smaller")[1].style.borderColor = dark;
  document.querySelectorAll(".border-smaller")[1].style.boxShadow =  "3px 3px 0px 2px " + darker;
  document.querySelectorAll(".border-smaller:active")[0].style.boxShadow =  "none";
}

//Show random quote every time window is loaded or refreshed
window.onload = function() {
  showNewQuote();
  showNewColor();
//Show random new color every time window is loaded or refreshed
};