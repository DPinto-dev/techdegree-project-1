/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** SELECTORS ***/
// ** DP ** Instead of using the selectors we will just write the entire HTML inside printString and then update the innerHTML of #quote-box
// ** DP ** We have to remove the 'category' from being displayed with the quote information and position a drop down right next to the button to select catg.


//Loads a new quote when user clicks the button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

const quotes = [
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: 2016,
    category: "Motivational"
  },
  {
    quote: "Tell me, and I will forget. Show me, and I will remember. Involve me, and I will understand forever.",
    source: "Xunzi - Confucian Philosopher",
    citation: "",
    year: "",
    category: "Inspirational"
  },
  {
    quote: "There are only two hard problems in Computer Science: cache invalidation and naming things",
    source: "Phil Karlton",
    citation: "",
    year: "1996",
    category: "Funny"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    citation: "'Hockey News' interview",
    year: "1983",
    category: "Inspirational"
  },
  {
    quote: "Wise men speak because they have something to say; Fools because they have to say something.",
    source: "Plato",
    citation: "",
    year: "",
    category: "Inspirational"
  },
  {
    quote: "I believe when life gives you lemons, you should make lemonade...and try to find someone whose life has given them vodka, and have a party.",
    source: "Ron White (Comedian)",
    citation: "Blue Collar Comedy Tour Rides Again",
    year: "2004",
    category: "Funny"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucius",
    citation: "",
    year: "",
    category: "Motivational"
  }
];

//Generates a random int from 0 to the size of the quotes array and returns the quote at that corresponding index
function getRandomQuote() {
  const ranQuote = Math.floor(Math.random() * quotes.length);
  return quotes[ranQuote];
}
  
function ranRGB () {
  return "rgb(" + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + 
  Math.floor(Math.random() * 256) + ")";
}
  
function printQuote() {
    // Selects a random color and applies it as the BG color for the body and buttons
  ranColor = ranRGB();
  console.log(ranColor);
  document.body.style.backgroundColor = ranColor;
  document.getElementById("loadQuote").style.backgroundColor = ranColor; 
  document.getElementsByClassName("dropdown-btn")[0].style.backgroundColor = ranColor;  

  // Chooses a random quote out of the quotes array and prepares the string to update the page
  const chosenQuote = getRandomQuote();
  let printString = "";
  printString = '<p class="quote">' + chosenQuote.quote + '</p><p class="source">' + chosenQuote.source;
  // Citation, year and category properties are only displayed if present
  if (chosenQuote.citation !== ""){
    printString += '<span class="citation">' + chosenQuote.citation + '</span>';
  }
  if (chosenQuote.year !== ""){
    printString += '<span class="year">' + chosenQuote.year + '</span>';      
  }
  if (chosenQuote.category !== ""){
    printString += '<span class="category">' + chosenQuote.category + '</span>';
  }
  printString += '</p>';

  // Updates the quote div with the new quote
  document.getElementById("quote-box").innerHTML = printString;
}

let interval = 0;

function startsAutoRefresh () {
  interval = setInterval(printQuote, 2000);
}

function stopsAutoRefresh () {
  clearInterval(interval);
}
/*** NEXT FEATURES TO BE IMPLEMENTED: 
 * Filter the quotes based on the selected tag.
 * setInterval() to change color every few seconds,
 * a Play/Pause button (svg) that clearInterval(),
 * Favourite quote and Favourite color buttons */