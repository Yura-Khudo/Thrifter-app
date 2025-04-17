export function firstLetterUppercase(word: string) {
	const letters = word.trim().split("");
	letters[0] = letters[0].toUpperCase();
	return letters.join("");
}
