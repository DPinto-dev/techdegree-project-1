/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/
// Remember to delete the comments that came with this file, and replace them with your own code comments.


/*** SELECTORS ***/
// ** DP ** Instead of using the selectors we will just write the entire HTML inside printString and then update the innerHTML of #quote-box
var quoteSelect = document.getElementsByClassName(".quote");
var sourceSelect = document.getElementsByClassName(".source");
var citationSelect = document.getElementsByClassName(".citation");
var yearSelect = document.getElementsByClassName(".year");
var categorySelect = document.getElementsByClassName(".category");

//Loads a new quote when user clicks the button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: 2016,
    category: "Inspirational"
  },
  {
    quote: "Tell me, and I will forget. Show me, and I will remember. Involve me, and I will understand forever.",
    source: "Xunzi - Confucian Philosopher",
    citation: "",
    year: "",
    category: "Inspirational",
  },
  {
    quote: "There are only two hard problems in Computer Science: cache invalidation and naming things",
    source: "Phil Karlton",
    citation: "",
    year: "1996",
    category: "Funny",
  },
  {
    quote: "",
    source: "",
    citation: "",
    year: "",
    category: "",
  },
  {
    quote: "",
    source: "",
    citation: "",
    year: "",
    category: "",
  },
];

//Generates a random int from 0 to the size of the quotes array and returns the quote at that corresponding index
function getRandomQuote() {
  var ranQuote = Math.floor(Math.random() * quotes.length);
  return quotes[ranQuote];
  }
  
  function printQuote() {
    var chosenQuote = getRandomQuote();
    var printString = "";
    printString = '<p class="quote">' + chosenQuote.quote + '</p><p class="source">' + chosenQuote.source;

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
    document.getElementById("quote-box").innerHTML = printString;
  }

    // create a variable that calls the getRandomQuote() function
    // create a variable that initiates your HTML string
    // using the template in the project instructions, add the two default quote properties, quote and source
    // if there is a quote.citation property, add it the string
    // if there is a quote.year property, add it the string
    // close the string with the necessary closing HTML tags
    // set the innnerHTML of the .quote-box to the complete HTML string
    
