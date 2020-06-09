# Ministring JS

Generate random strings with ease.

### Guide

By default strings length are set to 5, but you can change this value by passing any number as the first argument to the function like so:

```javascript
ministring(7); // Dk9s12Q
```

You can also specify which characters should be part of the string. There are **three** types of characters you can choose from:

- Numbers
- Lowercase
- Uppercase

By default, all strings will contain the three different types of characters, but you can change that aswell, by passing an object with your desired characters as a second argument to the function as shown below:

```javascript
ministring(7, { numbers, uppercase }); // KI09U7D
```
