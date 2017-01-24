function getQuote() {
    var quotes = ["Tough times dont last but tough people do.", "Its not who I am underneath but what I do, that defines me.", "If you're going through hell, keep going"];
    var author = ["Robert Schuller", "Batman Begins", "Winston Churchill"];
  
    var randomNum = Math.floor(Math.random() * quotes.length);
        
    $(".quote").text(quotes[randomNum]);
    $(".author").text(author[randomNum]);
}
    
$("button").on("click", function(){
    getQuote();
})