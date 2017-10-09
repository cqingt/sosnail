# sosnail

```
                                             ___      
                                         __ /\_ \     
  ____    ___     ____    ___      __   /\_\\//\ \    
 /',__\  / __`\  /',__\ /' _ `\  /'__`\ \/\ \ \ \ \   
/\__, `\/\ \L\ \/\__, `\/\ \/\ \/\ \L\.\_\ \ \ \_\ \_
\/\____/\ \____/\/\____/\ \_\ \_\ \__/.\_\\ \_\/\____\
 \/___/  \/___/  \/___/  \/_/\/_/\/__/\/_/ \/_/\/____/
```

## identicon

![identicon](/docs/images/identicon.png)

## Installation

```
$ npm install sosnail
```

## Usage

```javascript
import sosnail from 'sosnail';

const number = sosnail.number();
const letter = sosnail.letter();
const mixture = sosnail.mixture();
const identicon = sosnail.identicon({
  'text': 'test'
});
const color = sosnail.color();

const colorPicker = new sosnail.ColorPicker();
const hex2rgb = colorPicker.hex2rgb('#0000ff');
const rgb2hex = colorPicker.hex2rgb(0,0,255);
```

## Documentation

- [API documentation](docs/index.md)

## history

- [history log](docs/history/history.md)
