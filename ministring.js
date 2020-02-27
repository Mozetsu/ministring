// array which stores the range of decimal values
// for numbers, lowercase and uppercase characters
// from the ascii table
const characterTypes = [
	{
		type: 'number',
		start: 0,
		end: 9
	},
	{
		type: 'lowercase',
		start: 97,
		end: 122
	},
	{
		type: 'uppercase',
		start: 65,
		end: 90
	}
];

// gets a random value between two numbers (min, max)
function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const generate = length => {
	if (!length) return { Error: 'You must provide a length!' };

	// array which will store all random characters
	const randomChars = [];

	// get n characters
	for (let i = 0; i < length; i++) {
		// ---------------------------------------
		// chooses a random number between 0 and 2
		const tmpIndex = randomIntFromInterval(0, 2);

		// selects value type from characterTypes array
		// through the given index
		const tmpCharacterType = characterTypes[tmpIndex];
		const tmp = randomIntFromInterval(tmpCharacterType.start, tmpCharacterType.end);
		if (tmpCharacterType.type !== 'number') {
			randomChars.push(String.fromCharCode(tmp));
		} else {
			randomChars.push(tmp);
		}
	}

	// parse array to string
	const parsedString = randomChars.toString().replace(/,/g, '');

	// return parsedString;
	console.log(parsedString);
};

exports.generate = generate;
