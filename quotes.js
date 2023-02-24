var arrayOfQuotes = [
	{
		"author":"Jim Rohn",
		"quote":"Beware of what you become in porsuit of what you want."
	},
	{
		"author":"Epictetus",
		"quote":"It's not what happens to you, but how you react to it that matters."
	},
	{
		"author":"Frank Sinatra",
		"quote":"The best reverage is massive success."
	},
	{
		"author":"Wayme Gretzy",
		"quote":"You miss 100% of the shots you don't take."
	},
	{
		"author":"Nelson Mandela",
		"quote":"Resentment is like drinking poison and waiting for your enemies to die."
	},
	{
		"author":"Confucious",
		"quote":"Silence is a true friend who never betrays."
	},
	{
		"author":"Elbert Hubbard",
		"quote":"Do not take life too seriously. You will not get out alive."
	},
	{
		"author":"Lymdan B.Johnson",
		"quote":"Yesterday is not ours to recover, but tomorrow is ours to win or lose."
	}

];

function randomSelector(arrayLength) {
	return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
	var randomNumber = randomSelector(arrayOfQuotes.length);
	document.getElementById('quoteOutput').innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
	document.getElementById('authorOutput').innerHTML = "- " + arrayOfQuotes[randomNumber].author;
}