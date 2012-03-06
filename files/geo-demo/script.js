// Get user via HTML5 geolocation api
function getLocation() {
	navigator.geolocation.getCurrentPosition(getTweets);
}

// Fetch tweets from twitter
function getTweets(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	var term = "app";

	// Print coords in header
	$(".coords").text(lat+", "+long);

	$.ajax({
		url: "http://search.twitter.com/search.json?q="+term+"&geocode="+lat+","+long+","+"1mi",
		dataType: "jsonp",
		success: function(data) {
			processTweets(data);
		}
	});
}

// Use twitter to reverse geocode and get place name
function getLocName(tweet, coords) {
	$.ajax({
		url: "http://api.twitter.com/1/geo/reverse_geocode.json?lat="+coords[0]+"&long="+coords[1],
		dataType: "jsonp",
		success: function(data) {
			printTweet(tweet, data.result.places[0].name);
		}
	})
}

function processTweets(data) {
	var i;
	for (i = 0; i < data.results.length; i++) {
		var tweet = data.results[i];
		var place = "";
		
		if(tweet.geo != null) {
			getLocName(tweet, tweet.geo.coordinates);
		} else {
			printTweet(tweet, place);
		}
	}
}

function printTweet(tweet, place) {
	var item = "<li><img class='pic' src='"+tweet.profile_image_url+"' /><a class='user' href='http://twitter.com/"+tweet.from_user+"'>"+tweet.from_user+"</a> <span class='text'>"+tweet.text+"<br /><time datetime='"+tweet.created_at+"'>"+tweet.created_at+"</time> <span class='place'>"+place+"</span></li>";
	$("#tweet-list").append(item);
}

$(document).ready(function(){
	getLocation();
});


