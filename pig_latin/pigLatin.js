function translate(phrase) {
	let vowels = "aeiou"
	let words = phrase.split(" ");
	for (let i = 0; i < words.length; i++) {

		// Rule 1: word starts with vowel
		if (vowels.indexOf(words[i][0]) != -1) {
			words[i] = words[i] + "ay";

		// Rule 2: word starts with consonant
		} else {
			let index = 0;

			// find how many consonants in first syllable
			while (vowels.indexOf(words[i][index]) === -1) {

				// treat "qu" as consonant group
				if (words[i][index] === "q" && words[i][index + 1] === "u") {
					index += 2;
					break;
				}
				index += 1;
			}
			words[i] = words[i].slice(index) + words[i].slice(0, index) + "ay";
		}
	}
	return words.join(" ");
}


module.exports = {
	translate
}
