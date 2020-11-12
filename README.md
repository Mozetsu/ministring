# Ministring

Generate random strings with ease. Set the length, which characters you need and start generating! It is that simple 😁


## Install

```bash
npm install ministring
```


## Usage

import the module and you're ready to rock!

```javascript
const ministring = require('ministring');

ministring();
```

By default, every string is set to a length of 5 characters, but you can change this value by providing a number as the first argument to the function like so:

```javascript
ministring(7); // iGaB234
```

You can also specify which characters should be part of the string. There are four types of characters you can choose from:

- **Specials**
- **Numbers**
- **Lowercase**
- **Uppercase**


By default, all strings will contain numbers, lowercase and uppercase, but you can specify which characters should be used when creating a new string. Provide a string with the desired character type as the second argument to the function so you can create strings with only one character type as the example shown below:

```javascript
ministring(7, 'numbers'); // only numbers -> 2858259
ministring(7, 'uppercase'); // only uppercase -> NZGRWQD
```

You can combine all different character types to get even more specific string combinations.

```javascript
ministring(4, 'numbers, lowercase'); // cb78
ministring(12, 'lowercase, uppercase'); // WpJOktOOHgpB
```
