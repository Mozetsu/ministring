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

By default, every string is set to a length of **5** characters, but you can change this value by providing a **number** as the **first argument** to the function like so:

```javascript
ministring(7); // iGaB234
```

You can also specify which characters should be part of the string. There are **three** types of characters you can choose from:

- **Numbers**
- **Lowercase**
- **Uppercase**

By default, all strings will contain the three different types of characters, but you can change that as well. By providing a string with your desired characters types as the **second argument** to the function you can take the customization even further as shown below:

```javascript
ministring(7, 'numbers'); // 2858259
ministring(7, 'lowercase'); // ioxqblw
ministring(7, 'uppercase'); // NZGRWQD
ministring(7, 'numbers, lowercase, uppercase'); // V3vm3RO
```
