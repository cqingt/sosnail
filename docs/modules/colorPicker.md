# colorPicker

## Configuration

Method  | ParamsType           | Default | Params            | Describe
------- | -------------------- | ------- | ----------------- | ---------------
hsb2rgb | Number,Number,Number | -       | 0-360,0-100,0-100 | hsb convert rgb
hsb2hsl | Number,Number,Number | -       | 0-360,0-100,0-100 | hsb convert hsl
hsb2hex | Number,Number,Number | -       | 0-360,0-100,0-100 | hsb convert hex
hsl2hsb | Number,Number,Number | -       | 0-360,0-100,0-100 | hsl convert hsb
hsl2rgb | Number,Number,Number | -       | 0-360,0-100,0-100 | hsl convert rgb
hsl2hex | Number,Number,Number | -       | 0-360,0-100,0-100 | hsl convert hex
rgb2hsb | Number,Number,Number | -       | 0-255,0-255,0-255 | rgb convert hsb
rgb2hsl | Number,Number,Number | -       | 0-255,0-255,0-255 | rgb convert hsl
rgb2hex | Number,Number,Number | -       | 0-255,0-255,0-255 | rgb convert hex
hex2rgb | String               | -       | -                 | hex convert rgb
hex2hsb | String               | -       | -                 | hex convert hsb
hex2hsl | String               | -       | -                 | hex convert hsl

## demo

```javascript
//hsb
const hsb2rgb = colorPicker.hsb2rgb(297, 100, 100);
const hsb2hsl = colorPicker.hsb2hsl(297, 100, 100);
const hsb2hex = colorPicker.hsb2hex(297, 100, 100);
//hsl
const hsl2hsb = colorPicker.hsl2hsb(297, 100, 100);
const hsl2rgb = colorPicker.hsl2hsb(297, 100, 100);
const hsl2hex = colorPicker.hsl2hsb(297, 100, 100);
//rgb
const rgb2hsb = colorPicker.rgb2hsb(200, 100, 100);
const rgb2hsl = colorPicker.rgb2hsl(200, 100, 100);
const rgb2hex = colorPicker.rgb2hex(200, 100, 100);
//hex
const hex2rgb = colorPicker.hex2rgb('#f200ff');
const hex2hsb = colorPicker.hex2hsb('#f200ff');
const hex2hsl = colorPicker.hex2hsl('#f200ff');
```
