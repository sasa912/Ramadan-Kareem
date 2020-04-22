//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "24 apr 2020 00:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	