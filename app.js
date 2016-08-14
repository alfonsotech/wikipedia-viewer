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

	//On Click, store search term in var
		$('#submitButton').on('click', function(){
				
			searchFor = $('#search-term').val();
				console.log(searchFor);
			url = 'https://en.wikipedia.org/w/api.php?action=query&format=jsonfm&list=search&utf8=1&srsearch=' + searchFor;
				console.log(url);
			//post();
		});

	//Get Request
	

	 //function post () {
	 	$.getJSON('url', function(data){
		var test= data.query.search.snippet;
			//Post to search-results
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

  });

*/

