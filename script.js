function getQuote() {
    var quotes = ["Its not who I am underneath but what I do, that defines me.", "If you're going through hell, keep going", "With the new day comes new strength and new thoughts", "Win through actions, never through argument.", "It will be far more difficult to undo than do.", "We become what we think about.", "The highest reward for one's toil is not what he gets for it, but what he becomes by it.", "Its better to perform ones own duties imperfectly than to master the duties of another."];
    
    var authors = ["Batman Begins", "Winston Churchill", "Eleanore Roosevelt", "Robert Greene", "Alexander Hamilton", "Earl Nightingale", "John Ruskin", "Krishna"];
  
    var randomNum = Math.floor(Math.random() * quotes.length);
        
    $(".quote").text(quotes[randomNum]);
    $(".author").text(authors[randomNum]);
}
    
$("button").on("click", function(){
    getQuote();
})
/*
var longQoutes = ["We're the people we interact with. Our paychecks, our moods, the health of our hearts, and the size of our bellies - all of these things are determined by whome we choose to interact with and how."]
var longAuthors = ["Keith Ferrazzi"]
*/