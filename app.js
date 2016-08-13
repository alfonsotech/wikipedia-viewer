$(document).ready(function(){

	//Serve Up random Wiki-page on click of "random" button
	$('#random').on('click', function(){
		console.log("random button clicked");
		//var randomURL =  "";
		$.getJSON('https://en.wikipedia.org/wiki/Special:Random', function(json){
			$('.search-results').html(JSON.stringify(json));
			
		});
	});

	//Global Variables
	var searchFor;
	//On Click, store search term in var
		$('#submitButton').on('click', function(){
			console.log("sub button clicked");
			searchFor = $('#search-term').val();
			console.log(searchFor);
		});

});//doc ready close

//Prepare JSON Get
/*var url = ''
$.getJSON('url', function(data){
	for (var i = 0; i<data.length; i++) {

	}

});

---
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

//Post to search-results