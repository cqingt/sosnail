```
                                             ___      
                                         __ /\_ \     
  ____    ___     ____    ___      __   /\_\\//\ \    
 /',__\  / __`\  /',__\ /' _ `\  /'__`\ \/\ \ \ \ \   
/\__, `\/\ \L\ \/\__, `\/\ \/\ \/\ \L\.\_\ \ \ \_\ \_
\/\____/\ \____/\/\____/\ \_\ \_\ \__/.\_\\ \_\/\____\
 \/___/  \/___/  \/___/  \/_/\/_/\/__/\/_/ \/_/\/____/
```

# sosnail

[![build](https://travis-ci.org/sosnail/sosnail.svg?branch=master)](https://travis-ci.org/sosnail/sosnail)
[![npm version](https://img.shields.io/npm/v/sosnail.svg)](https://www.npmjs.com/package/sosnail)
[![npm download](https://img.shields.io/npm/dt/sosnail.svg)](https://www.npmjs.com/package/sosnail)
[![Github file size](http://img.badgesize.io/https://unpkg.com/sosnail/dist/sosnail.min.js?compression=gzip&label=gzip%20size:%20JS&style=flat)](https://unpkg.com/sosnail/dist/sosnail.min.js)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](http://opensource.org/licenses/MIT)

## identicon

![identicon](/docs/images/identicon.png)

## Installation

```
$ npm install sosnail
```

## Usage

```html
<script type="text/javascript" src="sosnail.min.js"></script>

<script type="text/javascript">
    var number = sosnail.number();
</script>
```

```javascript
const sosnail = require('sosnail');
```

```javascript
import sosnail from 'sosnail';

const number = sosnail.number();
const letter = sosnail.letter();
const mixture = sosnail.mixture();
const identicon = sosnail.identicon({
  'text': 'test'
});
const color = sosnail.color();
const random = sosnail.random({
  'data': [1, 2, 3, 4, 5]
});

const colorPicker = new sosnail.ColorPicker();
const hex2rgb = colorPicker.hex2rgb('#0000ff');
const rgb2hex = colorPicker.hex2rgb(0,0,255);
```

```javascript
//ES6
import {number,letter,mixture,identicon,color,ColorPicker} from 'sosnail';

const randomNumber = number();
const randomLetter = letter();
const colorPicker = new ColorPicker();
```

## Documentation

- [API documentation](docs/index.md)

## history

- [history log](docs/history/history.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, sosnail
