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

//Get randowm new quote and display on page after 'Next Quote' button click
function newQuote() {
  
  //Random array index generator
  var randomQuote = quotesPool[Math.floor(Math.random() * quotesPool.length)];
  
  //assign variables
  var quote = randomQuote[0];
  var author = randomQuote[1];
  //test: window.alert('"' + quote + '", ' + author);
  
  //Display new random quote and author on page
  document.getElementById("author").innerHTML = author;
  document.getElementById("quote").innerHTML = quote;
}

//Display random quote every time window is loaded or refreshed
window.onload = newQuote;
//window.onload = function() {newQuote()}