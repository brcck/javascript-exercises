function echo(simonSaid) {
	return simonSaid;
}

function shout(simonSaid) {
	return simonSaid.toUpperCase();
}

function repeat(simonSaid, count=2) {
	let repeated = ''
	for (let i = 0; i < count; i++) {
		repeated += simonSaid;
		if (i != count - 1) repeated += ' '
	}
	return repeated;
}

function pieceOfWord(simonSaid, index) {
	return simonSaid.slice(0, index);
}

function firstWord(simonSaid) {
	return simonSaid.split(' ')[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(simonSaid) {
	let wordList = simonSaid.split(' ');
	let title = '';
	let littleWords = ['and', 'of', 'the', 'over'];
	for (let i = 0; i < wordList.length; i++) {
		let word = wordList[i];
		littleWords.includes(word) && i != 0 ? (title += word) : (title += capitalize(word));
		if (i !== wordList.length - 1) title += ' ';
	}
	return title;
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}
