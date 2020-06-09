# Ministring

Generate random strings with ease. Set the length and which characters you need and start generating! It is that simple :grin:

## Install

```bash
npm install ministring
```

## Usage

```javascript
const ministring = require('ministring');

ministring();
```

By default, strings length is set to **5**, but you can change this value by providing a **number** as the **first argument** to the function like so:

```javascript
ministring(7); // Dk9s12Q
```

You can also specify which characters should be part of the string. There are **three** types of characters you can choose from:

- **Numbers**
- **Lowercase**
- **Uppercase**

By default, all strings will contain the three different types of characters, but you can change that aswell. By passing an object with your desired characters as a **second argument** to the function you can take the customization even further as shown below:

```javascript
ministring(7, { numbers, lowercase, uppercase }); // KI0hU7w
ministring(7, { numbers }); // 7397192
ministring(7, { lowercase }); // hqpxyej
ministring(7, { uppercase }); // XFASNDR
```
