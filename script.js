$(document).ready(function () {
    var query = '';
    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=EGrEM8JhMsFYGbORWTHBudSmGTGPAhGh`;
$('.submit').on('click', function () {
    event.preventDefault();
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
      });
});
});