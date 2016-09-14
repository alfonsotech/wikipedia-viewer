<<<<<<< HEAD
$(document).ready(function(){

	//Serve Up random Wiki-page to serach-results div on click of "random" button
	$('#random').on('click', function(){
		
		//var url = 'https://en.wikipedia.org/wiki/Special:Random';
		//window.open(url);
		$('.search-results').append( '<iframe src="https://en.wikipedia.org/wiki/Special:Random" width="100%" height="500" frameborder="0" allowfullscreen></iframe>' );
		

	});

	//Global Variables
	var searchFor = "blank_for_test";
	var url;

	//On Click, store search term in var and url
		$('#submitButton').on('click', function(){
				
			searchFor = $('#search-term').val();
				console.log(searchFor);
			url = 'https://en.wikipedia.org/w/api.php?action=query&format=jsonfm&list=search&utf8=1&srsearch=' + searchFor;
				console.log(url);
			//post();
		});

	//Get Request
	

	 //function post () {
	 	$.getJSON(url, function(data){
		var test= data.search[0].title;
			//Post to search-results
			consolelog(test);
			$('.search-results').html(test);
      	});
	// }
		

});//doc ready close

/*---
$(document).ready(function() {

    $("#getMessage").on("click", function(){
      // Only change code below this line.
      
      
      
      $.getJSON('/json/cats.json', function(json){
        $('.message').html(JSON.stringify(json));
      });
      // Only change code above this line.
    });
||||||| merged common ancestors
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
=======
'use strict';

$(document).ready(function(){	
	//Serve Up random Wiki-page to serach-results div on click of "random" button
  $('#random').on('click', function(e){
	e.preventDefault();//eslint-ignore-line
	$('#search-results').html('<iframe  src="https://en.wikipedia.org/wiki/Special:Random" width="100%" height="500" frameborder="0" allowfullscreen></iframe>');
	/* Option to open in another window:
	var url = 'https://en.wikipedia.org/wiki/Special:Random';
	window.open(url);
	*/
	});
>>>>>>> gh-pages

<<<<<<< HEAD
  });

*/

||||||| merged common ancestors
}; //getWikied close

$(document).ready(function(){

});//doc ready close
=======
	//On Click, store search term in var and url
  $('#submitButton').on('click', function(e){
  		 e.preventDefault();
     var $searchFor = $('#search-term').val();
     var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ $searchFor + '&format=json&callback=?'
     //var url = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + $searchFor + '&prop=revisions&rvprop=content&format=json&callback=?'
		$.ajax({
			url: url,
			type: 'GET',
			contentType: "application/json; charset=utf-8",
			async: false,
        	dataType: "json",
        	success: function(data, status, jqXHR) {
        		console.log(data);
        		$('#search-results').html('');
        		//Iterate through results and render in search results area
        		for(var i=0;i<data[1].length;i++){

        			$('#search-results').append('<div><a href=' + data[3][i] + '><h2>' + data[1][i] + '</h2>' + '<p>' + data[2][i] + '</p> </a> </div>');
        		}
        	}
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
    });
 /*
HT On click of entry title, post entry in an iframe window. But how to get ahold of the href of the dynamically rendered content?

var $searchresultstest = $('#search-results a').val();

$('#search-results a href').on('click', function(){
});
*/

});//doc ready close

//https://crossorigin.me/
>>>>>>> gh-pages
