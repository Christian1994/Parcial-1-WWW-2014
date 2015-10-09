window.onload = function(){
	content = document.getElementById('content');
}

var tvshows = ["Breaking bad", "The Big Bang theory", "Walking dead", "Friends", "Grey's anatomy", "Game of thrones", "How I met your mother", "Modern Family"];
var anime = [];
var classics = [];
var documentaries = [];
var drama = [];
var horror = [];
var romance = [];

function printElementsByCathegory( cathegory ){
	for(var i = 0; i < cathegory.length; i++){
		content.value = cathegory[i];
	}
}
