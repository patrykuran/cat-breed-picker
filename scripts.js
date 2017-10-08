var cats = {
	"cat1": {
		"name": "Persian",
		"link": "https://en.wikipedia.org/wiki/Persian_cat",
		"photo": "https://d2qbxixihjvzn0.cloudfront.net/ps/getCropped/6yUHfOX000?res=256x256&index=www_sps"},
	"cat2": {
		"name": "British Shorthair",
		"link": "https://en.wikipedia.org/wiki/British_Shorthair",
		"photo": "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.argospetinsurance.co.uk%2Fassets%2Fuploads%2F2013%2F11%2Fbritish-shorthair-11.jpg&f=1"} ,
	"cat3": {
		"name": "Sphynx",
		"link": "https://en.wikipedia.org/wiki/Sphynx_cat",
		"photo": "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.buzzle.com%2Fmedia%2Fimages-en%2Fphotos%2Fmammals%2Fcats%2F450-57610618-sphynx-cat.jpg&f=1"}
}


var button = document.getElementById("answer");
	q1 = document.getElementById("q1").checked;
	q2 = document.getElementById("q2").checked;
	q3 = document.getElementById("q3").checked;
	q4 = document.getElementById("q4").checked;
	ul = document.getElementById("display-cat");
	li = document.createElement("li");
	h3 = document.createElement("h3");
	img = document.createElement("img");
	link = document.createElement("a");

function showAnswer(sum) {

	if(sum >= 5) {

		createSphynx();

	} else if(3 <= sum && sum <= 4) {

		createBritish();

	} else {

		createPersian();

	}
}


function createElements() {

	li.appendChild(h3);
	li.appendChild(img);
	li.appendChild(link);
	
	ul.appendChild(li);
	
}

function createPersian() {

	h3.textContent = cats.cat1.name;
	img.src = cats.cat1.photo;
	link.href = cats.cat1.link;
	link.textContent = "Read more about Persian";
		
	createElements();

}

function createBritish() {

	h3.textContent = cats.cat2.name;
	img.src = cats.cat2.photo;
	link.href = cats.cat2.link;
	link.textContent = "Read more about British Shorthair";
		
	createElements();

}

function createSphynx() {

	h3.textContent = cats.cat3.name;
	img.src = cats.cat3.photo;
	link.href = cats.cat3.link;
	link.textContent = "Read more about Sphynx";
		
	createElements();

}


function getAnswers() {

	ul.innerHTML = '';

	var sum = 0;
		q1 = document.getElementById("q1").checked;
		q2 = document.getElementById("q2").checked;
		q3 = document.getElementById("q3").checked;
		q4 = document.getElementById("q4").checked;
		
		answers = document.getElementsByClassName("questions");

	for(var i = 0; i < answers.length; i++) {
		
		if(answers[i].checked === true) {
			
			var points = Number(answers[i].value);
			
			sum += points;
	
		}
	}

	if(sum === 0) {

		alert("Pick at least one meal - your cat won't be starving with you!")

	} else if(q1 === false && (q2 === true && q4 === true) && q3 === false) {
		
		createPersian();
		
	} else {

		showAnswer(sum);

	}

	console.log(q1, q2, q3, q4);
	
}

button.addEventListener('click', getAnswers);