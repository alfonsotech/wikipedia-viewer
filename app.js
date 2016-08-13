var showSearchResults = function(query) {
	var results = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + query + '&prop=revisions&rvprop=content&format=json';
	return results;
};

var showError = function () {

};

var getWikied = function (tags) {
	var query = {
		site: 'wikipedia'
		action: 'query'
	}

	var searchQuery = tags;

	$.ajax({
		action: "query"
		url: "https://en.wikipedia.org/w/api.php", 
		""
		format: "json",
		
		type: "GET"
	})
	.done (function(){
		var searchResults = showSearchResults();
		$('.search-results').html(searchResults);
	});
	.fail (function (error) {
		$('.search-results').append(error);
	});

}; //getWikied close

$(document).ready(function(){

});//doc ready close