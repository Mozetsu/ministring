const numbers = '0123456789'.split('');
const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function ministring(length = 5, characters = { numbers, lowercase, uppercase }) {
	const selectedCharacters = Object.entries(characters);
	const randomString = [];
	for (let i = 0; i < length; i++) {
		const randomCharacterType = randomIntFromInterval(0, selectedCharacters.length - 1);
		const randomChar = randomIntFromInterval(0, selectedCharacters[randomCharacterType][1].length - 1);
		randomString.push(selectedCharacters[randomCharacterType][1][randomChar]);
	}
	return randomString.toString().replace(/,/g, '');
}

module.exports = ministring;
