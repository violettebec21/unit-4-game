//make sure our js is linked to index.html file
console.log("sanity")

// Create variable for game directions that holds reference to the places in the HTML where we want to display
var directions = document.getElementById("directions");

// Write code that selects a random number to be shown at the start of the game
// Number should be should be between 19 - 120
$(document).ready(function () {
  var randomNumber = Math.floor(Math.random() * 100)


  // Append the random number to the randomNumber id in the html doc to display from js to html
  $('#randomNumber').text(randomNumber);

  //define variables for wins & losses & points 
  var wins = 0;
  var losses = 0;
  var points = 0; 

  //call from html
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  //make the jewels clickable buttons
  //this is where we delegate the on.click --> bind to the document, but only listen for on.clicks for gem image buttons
  $(document).on("click", ".gemImage", function () {
    points += parseInt($(this).val());
    $('#userScore').text(points);
    console.log(points);
    console.log($(this).val());
  })

  // define a reusable piece of code, wrapped in a function. these pieces are now in scope
  // every time we call this function, it's like we call for the first time
  function renderButtons() {
    //define an array so we can cycle through the array --> data structuring
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

  //need to display user total score for the value that the crystal button is worth + display in html
  var userScore = 0;

  //need to connect gem button press values to userScore variable, append each number guess to score 

  //need to define reset function



  //write IF statement to determine wins & losses
  if (userScore === randomNumber) {
    wins++;
    $("#result").html("Winner!");
  }

  else if (userScore > randomNumber) {
    losses++;
    $("#result").html("Sorry, you lose!");
  }

})

//this is where we call our function to reset game when completed

};


