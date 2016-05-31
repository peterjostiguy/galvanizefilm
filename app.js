var movieURL = "http://www.omdbapi.com/?t="
var moviePosterURL1 = "http://www.omdbapi.com/?t="
var moviePosterURL2 = "http://www.omdbapi.com/?t="
var moviePosterURL3 = "http://www.omdbapi.com/?t="
var moviePosterURL4 = "http://www.omdbapi.com/?t="
var movieChoice = ""
var topMovie1 =""
$(document).ready(function(){
  topMovie1 = $("tbody").find("tr").eq(1).find("td").eq(0).text()
  topMovie1 = topMovie1.slice(3)
  topMovie1e = topMovie1.replace(/ /g, '+');
  moviePosterURL1 = moviePosterURL1 + topMovie1e + "&y=&plot=short&r=json"
  $.get(moviePosterURL1, function(movieData1){
    if(movieData1.Poster != undefined){
      var image1URL = "url(" + movieData1.Poster + ")"
      $(".posters").find("div").eq(0).css("background-image", image1URL)
    }
    else {$(".posters").find("div").eq(0).text(topMovie1)}
  })
  topMovie2 = $("tbody").find("tr").eq(2).find("td").eq(0).text()
  topMovie2 = topMovie2.slice(3)
  topMovie2e = topMovie2.replace(/ /g, '+');
  moviePosterURL2 = moviePosterURL2 + topMovie2e + "&y=&plot=short&r=json"
  $.get(moviePosterURL2, function(movieData2){
    if(movieData2.Poster != undefined){
      var image2URL = "url(" + movieData2.Poster + ")"
      $(".posters").find("div").eq(1).css("background-image", image2URL)
    }
    else {$(".posters").find("div").eq(1).text(topMovie2)}
  })
  topMovie3 = $("tbody").find("tr").eq(3).find("td").eq(0).text()
  topMovie3 = topMovie3.slice(3)
  topMovie3e = topMovie3.replace(/ /g, '+');
  moviePosterURL3 = moviePosterURL3 + topMovie3e + "&y=&plot=short&r=json"
  $.get(moviePosterURL3, function(movieData3){
    if(movieData3.Poster != undefined){
      var image3URL = "url(" + movieData3.Poster + ")"
      $(".posters").find("div").eq(2).css("background-image", image3URL)
    }
    else {$(".posters").find("div").eq(2).text(topMovie3)}
  })
  topMovie4 = $("tbody").find("tr").eq(4).find("td").eq(0).text()
  topMovie4 = topMovie4.slice(3)
  topMovie4e = topMovie4.replace(/ /g, '+');
  moviePosterURL4 = moviePosterURL4 + topMovie4e + "&y=&plot=short&r=json"
  $.get(moviePosterURL4, function(movieData4){
    if(movieData4.Poster != undefined){
      var image4URL = "url(" + movieData4.Poster + ")"
      $(".posters").find("div").eq(3).css("background-image", image4URL)
    }
    else {$(".posters").find("div").eq(3).text(topMovie4)}
  })
  $(".submit").on("click", function(){
    event.preventDefault();
    movieChoice = $("#userChoice").val();
    movieChoice = movieChoice.replace(/ /g, '+');
    movieURL = movieURL + movieChoice + "&y=&plot=short&r=json"
    $.get(movieURL, function(movieData){
      console.log(movieData);
    })
  })
})
