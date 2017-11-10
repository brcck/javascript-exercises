class bookTitle {
	set title(input) {
		let wordList = input.split(' ');
		let title = '';
		let littleWords = ['and', 'of', 'the', 'over', 'in', 'a', 'an'];
		for (let i = 0; i < wordList.length; i++) {
			let word = wordList[i];
			littleWords.includes(word) && i != 0 ? (title += word) : (title += (word.charAt(0).toUpperCase() + word.slice(1)));
			if (i !== wordList.length - 1) title += ' ';
		}
		this._title = title;
	}

	get title() {
		return this._title;
	}
}

module.exports = {
	bookTitle
}
