export function firstLetterUppercase(word: string) {
	const letters = word.trim().split("");
	letters[0] = letters[0].toUpperCase();
	return letters.join("");
}

export function wordsReducer(name: string) {
	const words = name.split(" ");
	const updatedWords = words.map((word) => {
		if (word.length > 18) {
			const letters = word.split("");
			letters.splice(17, word.length - 17, "...");
			return letters.join("");
		}
		return word;
	});

	return updatedWords.join(" ");
}
