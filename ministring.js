function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function ministring(length = 5, characters = 'numbers, lowercase, uppercase') {
	const allowedCharacters = {
		numbers: '0123456789'.split(''),
		lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
		uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
	};

	const verifiedCharacters = {};

	const selectedCharacters = characters.split(', ');
	for (const character of selectedCharacters) {
		if (!Object.keys(allowedCharacters).includes(character)) return { error: 'Character type not allowed!' };
		verifiedCharacters[character] = allowedCharacters[character];
	}

	const charactersArray = Object.entries(verifiedCharacters);
	const randomString = [];
	for (let i = 0; i < length; i++) {
		const randomCharacterType = randomIntFromInterval(0, charactersArray.length - 1);
		const randomChar = randomIntFromInterval(0, charactersArray[randomCharacterType][1].length - 1);
		randomString.push(charactersArray[randomCharacterType][1][randomChar]);
	}
	return randomString.toString().replace(/,/g, '');
}

module.exports = ministring;
