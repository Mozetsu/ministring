const crypto = require('crypto');
let state0 = crypto.randomBytes(1).toString('2'); // SEED - change these to affect the apparent randomness of the outcome
let state1 = crypto.randomBytes(1).toString('2'); // SEED - change these to affect the apparent randomness of the outcome

console.log(xorshift());

function xorshift() {
	let s1 = state0;
	let s0 = state1;
	state0 = s0;

	s1 ^= s1 << 23;
	s1 ^= s1 >> 17;
	s1 ^= s0;
	s1 ^= s0 >> 26;
	state1 = s1;

	return state0 + state1;
}

// function randomIntFromInterval(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function ministring(length = 5, characters = 'numbers, lowercase, uppercase') {
// 	const allowedCharacters = {
// 		specials: '!@#$%^&*?'.split(''),
// 		numbers: '0123456789'.split(''),
// 		lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
// 		uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
// 	};

// 	const selectedCharacters = characters.replace(/ /g, '').split(',');
// 	const verifiedCharacters = [];
// 	for (const character of selectedCharacters) {
// 		if (!Object.keys(allowedCharacters).includes(character)) return { error: 'Character type not allowed!' };
// 		verifiedCharacters.push(...allowedCharacters[character]);
// 	}

// 	const randomString = [];
// 	for (let i = 0; i < length; i++) {
// 		const x = randomIntFromInterval(0, verifiedCharacters.length - 1);
// 		randomString.push(verifiedCharacters[x]);
// 	}
// 	return randomString.toString().replace(/,/g, '');
// }

// module.exports = ministring;
