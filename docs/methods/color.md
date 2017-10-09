# color

## Configuration

Prop       | Type          | Default | Params                                                                                                                              | Describe
---------- | ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------
text       | Number/String | null    | -                                                                                                                                   | used to generate a color
format     | String        | 'hex'   | 'hex','hsl','hsla','hsb','rgb','rgba','hsl-web','hsla-web','rgb-web','rgba-web'                                                     | the format of the generated color
alpha      | Number/Array  | [0, 1]  | 0-1 / [0-1,0-1]                                                                                                                     | when using a format with an alpha channel
luminosity | String        | null    | 'light','dark'                                                                                                                      | luminosity of the generated color
hue        | String        | null    | 'red','red-orange','orange','orange-yellow','yellow','yellow-green','green','green-blue','blue','blue-violet','violet','violet-red' | hue of the generated color

## demo

```javascript
//color
const color = sosnail.color();
//a hex color

const color1 = sosnail.color({
  'hue': 'red',
  'format': 'rgb-web'
});
//a red color in 'rgb-web'

const color2 = sosnail.color({
  'hue': 'red',
  'luminosity': 'light'
});
//a light red color

const color3 = sosnail.color({
  'hue': 'red',
  'format': 'rgba-web'
  'alpha': 0.8
});
//a red rgba color with 0.8 alpha

const color4 = sosnail.color({
  'hue': 'red',
  'format': 'rgba-web'
  'alpha': [0.2, 0.8]
});
//a red rgba color between 0.2 and 0.8 alpha

const color5 = sosnail.color({
  'text': 'test'
});
//a hex color according to 'test'
```
