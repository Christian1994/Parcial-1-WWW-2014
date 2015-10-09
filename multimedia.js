window.onload = function(){	
	contents = document.getElementById("content");
	title = document.getElementById("title");
	changeTitle(tvshows);
	printElementsByCathegory(tvshows);		// Always shows the tvshows list on screen
	hovering();
}

var tvshows = ["Breaking bad", "The Big Bang theory", "Walking dead", "Friends", "Grey's anatomy", "Game of thrones", "How I met your mother", "Modern Family"];
var anime = ["Naruto", "Inuyasha", "Death Note", "Kenichi"];
var classics = ["Back to the future Trilogy", "Karate Kid Trilogy", "Matilda"];
var documentaries = [];
var drama = ["Titanic"];
var horror = ["Final Destination V", "Saw VII"];
var romance = ["Just friends", "The trip"];

function changeTitle(cathegory){
	// To remove the title
	var child = title.firstChild;
	if(typeof child !== undefined){
		title.removeChild(child);
	}

	// To display the changed title
	var h1 = document.createElement("h1");

	h1.style.fontSize = "20px";
	h1.style.fontFamily = "Arial";
	h1.style.fontWeight = "700";	
	
	switch(cathegory){
		case tvshows:
			h1.innerHTML = "TV SHOWS";
		break;
		case anime:
			h1.innerHTML = "ANIME";
		break;
		case classics:
			h1.innerHTML = "CLASSICS";
		break;
		case documentaries:
			h1.innerHTML = "DOCUMENTARIES";
		break;
		case drama:
			h1.innerHTML = "DRAMA";
		break;
		case horror:
			h1.innerHTML = "HORROR";
		break;
		case romance:
			h1.innerHTML = "ROMANCE"
		break;
	}
	title.appendChild(h1);
}

function printElementsByCathegory( cathegory ){	
	// To add all the cathegory items
	for(var i = 0; i < cathegory.length; i++){
		var li = document.createElement("li");
	
		li.style.listStyleType = "none";
		li.style.width = "150px";
		li.style.height = "200px";
		li.style.border = "2px solid black";
		li.style.fontFamily = "Arial";
		li.style.fontSize = "11px";
		li.style.textAlign = "center";
		li.style.margin = "40px";
		li.style.float = "left";	
		
		li.innerHTML = cathegory[i];		
		contents.appendChild(li);		
	}
}

function hovering(){
	// To allow the pointer placing at any selected item
	var children = contents.getElementsByTagName("li");
	
	for(var j = 0; j < children.length; j++){

		children[j].onmouseover = function(){
			this.style.backgroundColor = "blue";
			this.style.border = "2px solid black";
			this.style.color = "white";
		};
		
		children[j].onmouseout = function(){
			this.style.backgroundColor = "white";
			this.style.border = "2px solid black";
			this.style.color = "black";			
		};	
	}	
}
