$(document).ready(function(){

	//Serve Up random Wiki-page to serach-results div on click of "random" button
	$('#random').on('click', function(){
		
		//var url = 'https://en.wikipedia.org/wiki/Special:Random';
		//window.open(url);
		$('.search-results').append( '<iframe src="https://en.wikipedia.org/wiki/Special:Random" width="100%" height="500" frameborder="0" allowfullscreen></iframe>' );
		

	});

	//Global Variables
	var searchFor;
	var url = 'https://en.wikipedia.org/w/api.php?action=query&format=jsonfm&list=search&utf8=1&srsearch=';

	//On Click, store search term in var and url
		$('#submitButton').on('click', function(e){
			e.preventDefault();
			searchFor = $('#search-term').val();
			if (searchFor === ""){
				alert("Please enter a term to search.");
			} else {

			url = url + searchFor;
			console.log(url);
			post();
			}	
			
		});

	function post(){
		
		//Get Request
	 	$.getJSON(url, function(data){
			//Post resutls to search-results
			$.each (data, function(i, test){
				var test= data.query.search[i].title;
				$('.search-results').append(JSON.stringify(test));
			});
			
      	});
	}
		
	 
		

});//doc ready close

/*

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

