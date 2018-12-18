console.log("sanity")

// Create variables that hold references to the places in the HTML where we want to display things.
var directions = document.getElementById("directions");

$(document).ready(function () {
  var Random = Math.floor(Math.random() * 100)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120


  // Appending random number to the randomNumber id in the html doc
  $('#randomNumber').text(Random);

  //define variables for wins, losses, guesses logged

  var wins = 0;
  var losses = 0;

  //call from html
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  //make the jewels clickable buttons
  //this is where we delegate the on.click --> bind to the document, but only listen for on.clicks for gem image buttons
  $(document).on("click", ".gemImage", function () {
    var points = $(this).val();
    console.log(points);
    console.log($(this).val());
  })

  // defined a reusable piece of code, wrapped in a function. these pieces are now in scope
  // every time we call it, it's like we call it for the first time
  function renderButtons() {
    //defined an array so we could cycle through the array --> data structuring
    var gemImages = ["assets/images/blue.jpg", "assets/images/green.jpg", "assets/images/purple.jpg", "assets/images/red.jpg"];
    
    //THIS IS WHERE WE CYCLE THROUGH THE DATA
    for (var i = 0; i < gemImages.length; i++) {
      //37-40: dynamically created our img tag, set its attr (attributes)
      var gemBtn = $("<img>");
      gemBtn.addClass("gemImage");
      gemBtn.attr("src", gemImages[i]);
      gemBtn.val(Math.floor(Math.random() * 11 + 1));

      //THIS IS WHERE WE ACTUALLY RENDER TO THE PAGE
      $(".gems").append(gemBtn);
    }
  }
  //this is where we call our function
  renderButtons();



})