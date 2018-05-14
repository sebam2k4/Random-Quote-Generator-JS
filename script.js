/* jshint browser: true */
/* jshint esversion: 6 */

//Make sure DOM is ready
document.addEventListener("DOMContentLoaded",function(){
  
// DATA
// 1. dataset of quotes and their authors
  const quotesPool = [["Less is More", "Ludwig Mies Van Der Rohe"],
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
  const colorsPool = [["#ECF5B7", "#9CB418", "#7D9014"],
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

// VARIABLES
  let oldQuoteIndex;
  let oldColorIndex;

//Generate a random number based on argument's length
  function generateNumber(dataPool) {
    return Math.floor(Math.random() * dataPool.length);
  }

//1. Get random number from generateNumber()
//2. check random number to make sure it's not same as last one
//3. Use random number to get new quote from array
//4. Display the quote
  function generateNewQuote() {
    let index = generateNumber(quotesPool);
//While loop so no same quote is generated in a row
    while (index === oldQuoteIndex) {
      index = generateNumber(quotesPool);
    }
    let newQuote = quotesPool[index];
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
//Show new quote and author on page
    quote.innerHTML = newQuote[0];
    author.innerHTML = newQuote[1];
//Update Tweet href attribute with new quote and author
    let tweet = document.getElementById("tweet-quote");
    tweet.href = 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + newQuote[0] + '" -' + newQuote[1];
//update index checker
    oldQuoteIndex = index;
  }

//1. Get random number from generateNumber()
//2. check random number to make sure it's not same as last one
//3. Use random number to get new color scheme from array
//4. Update page with new color scheme
  function generateNewColor() {
    let index = generateNumber(colorsPool);
// While loop so no same color scheme is generated in a row
    while (index === oldColorIndex) {
      index = generateNumber(colorsPool);
    }
    let colorShade = colorsPool[index];
    let randomQuoteButton = document.querySelectorAll(".btn")[0];
    let twitterButton = document.querySelectorAll(".btn")[1];
    let background = document.body;
    let text = document.querySelector(".container");
    let border = document.querySelector(".border");
    let randomQuoteBorder = document.querySelectorAll(".border-smaller")[0];
    let twitterBorder = document.querySelectorAll(".border-smaller")[1];
//Update page with new color scheme
    randomQuoteButton.style.background = colorShade[0];
    twitterButton.style.background = colorShade[0];
    background.style.background = colorShade[0];
    text.style.color = colorShade[1];
    border.style.borderColor = colorShade[1];
    border.style.boxShadow = "4px 4px 0px 3px " + colorShade[2];
    randomQuoteBorder.style.borderColor = colorShade[1];
    randomQuoteBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];
    twitterBorder.style.borderColor = colorShade[1];
    twitterBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];
//update index checker
    oldColorIndex = index;
  }

//Show new quote and change color scheme on 'Random Quote' button click
  function onQuoteButtonClick() {
    let randomQuoteButton = document.querySelector("#random-quote");
    randomQuoteButton.addEventListener("click", function(){
      generateNewQuote();
      generateNewColor();
    });
  }

  onQuoteButtonClick();

// Get the first quote and color scheme on window load
  window.onload = function () {
    generateNewQuote();
    generateNewColor();
  };
  
});
