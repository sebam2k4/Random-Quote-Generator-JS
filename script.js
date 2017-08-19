// DATA
// 1. dataset of quotes and their authors
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

// 2. dataset of color schemes
var colorsPool = [["#ECF5B7", "#9CB418", "#7D9014"],
                  ["#B7E1CE", "#358260", "#1E4835"],
                  ["#FFAB91", "#FF7043", "#E64A19"],
                  ["#C3C8BC", "#919A84", "#5E6553"],
                  ["#EF9A9A", "#F44336", "#D32F2F"],
                  ["#E6EE9C", "#CDDC39", "#827717"],
                  ["#90CAF9", "#2196F3", "#1565C0"],
                  ["#CE93D8", "#AB47BC", "#6A1B9A"],
                  ["#F8BBD0", "#F06292", "#E91E63"],
                  ["#C5CAE9", "#7986CB", "#3F51B5"],
                  ["#B0BEC5", "#78909C", "#546E7A"],
                  ["#B2EBF2", "#26C6DA", "#0097A7"],
                  ["#BCAAA4", "#795548", "#3E2723"]];


// HELPER FUNCTIONS
// 1. Get random index number based on parameter array length
function pickNew(dataPool) {
  var randomIndex = Math.floor(Math.random() * dataPool.length);
  return randomIndex;
}


// EVENT FUNCTIONS
// 1. ONCLICK - Display new quote on page and update social media share links
// on 'Next Quote' button click event.
function showNewQuote() {
  var index = pickNew(quotesPool);
  var newQuote = quotesPool[index];
  var currentQuote = newQuote[0];
  var currentAuthor = newQuote[1];
  //Display new random quote and author on page
  document.getElementById("quote").innerHTML = currentQuote;
  document.getElementById("author").innerHTML = currentAuthor;
  //Update Tweet button link - modify tweet link to add current quote and author
  var tweet = document.getElementById("tweet-quote");
  tweet.href = 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + currentQuote + '" -' + currentAuthor;
}

// 2. ONCLICK - Dipslay new random color sheeme on 'Next Quote' button click event.
function showNewColor() {
  var index = pickNew(colorsPool);
  var newColor = colorsPool[index];
  var currentLight = newColor[0];
  var currentDark = newColor[1];
  var currentDarker = newColor[2];
  //Assign new random color scheme to HTML inline style
  document.body.style.background = currentLight;
  document.body.style.color = currentDarker;
  document.querySelectorAll(".btn")[0].style.background = currentLight;
  document.querySelectorAll(".btn")[1].style.background = currentLight;
  document.querySelector(".border").style.borderColor = currentDark;
  document.querySelector(".border").style.boxShadow =  "4px 4px 0px 3px " + currentDarker;
  document.querySelectorAll(".border-smaller")[0].style.borderColor = currentDark;
  document.querySelectorAll(".border-smaller")[0].style.boxShadow =  "3px 3px 0px 2px " + currentDarker;
  document.querySelectorAll(".border-smaller")[1].style.borderColor = currentDark;
  document.querySelectorAll(".border-smaller")[1].style.boxShadow =  "3px 3px 0px 2px " + currentDarker;
}

// Show random quote and color scheme on window load
window.onload = function () {
  showNewQuote();
  showNewColor();
};

