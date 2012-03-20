// Get user via HTML5 geolocation api
function getLocation() {
	navigator.geolocation.getCurrentPosition(getTweets);
}

// Fetch tweets from twitter


function getTweets(position) {
	console.log(position);
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	var term = "cmu";

	// Print coords in header
	$(".coords").text(lat+", "+long);

	$.ajax({
		url: "http://search.twitter.com/search.json?q="+term+"&geocode="+lat+","+long+","+"3mi",
		dataType: "jsonp",
		success: function(data) {
			printTweets(data);
		}
	});
}


function printTweets(data) {
	console.log(data);
	var i;
	for (i = 0; i < data.results.length; i++) {
		var tweet = data.results[i];
		var place = "";
		
		if(tweet.geo != null) {
			place = tweet.geo.coordinates[0]+", "+tweet.geo.coordinates[1]
		}

		var item = "<li><img class='pic' src='"+tweet.profile_image_url+"' /><a class='user' href='http://twitter.com/"+tweet.from_user+"'>"+tweet.from_user+"</a> <span class='text'>"+tweet.text+"<br /><time datetime='"+tweet.created_at+"'>"+tweet.created_at+"</time> <span class='place'>"+place+"</span></li>";
		
		$("#tweet-list").append(item);
	}
}

$(document).ready(function(){
	getLocation();
});


