$(document).ready(function () {

    $('.submit').on('click', function () {
        event.preventDefault();

        var query = $('#searchTerm').val().trim();
        var pageCount = 0;
        var optionsVal = $('#recordsRetrieve').val();

        switch (optionsVal) {
            case '5':
            case '10':
                pageCount = 1;
                break;
            case '15':
                pageCount = 2;
                break;
            case '25':
            case '30':
                pageCount = 3;
                break;
        }

        for (var j = 0; j < pageCount; j++) {
            var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}page=${j}&api-key=EGrEM8JhMsFYGbORWTHBudSmGTGPAhGh`;
        
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                for (var i = 0; i < optionsVal; i++) {
                    var newDiv = $('<div>');
                    newDiv.append(response.response.docs[i].abstract);
                    $('#topArticles').prepend('<br>');
                    $('#topArticles').prepend(newDiv);
                }
                optionsVal -= 10;
            });
            
        }
    });

    $('.clear').on('click', function () {
        $('#topArticles').text('');
    });
});