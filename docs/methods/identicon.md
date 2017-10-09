# identicon

## Configuration

Prop       | Type            | Default                            | Params       | Describe
---------- | --------------- | ---------------------------------- | ------------ | ----------------------------------------------------
text       | String          | null                               | -            | used to generate the image
size       | Number          | 200                                | -            | -
type       | String          | 'png'                              | 'png','jpeg' | -
padding    | Number / String | 0.1                                | -            | decimal number for percentage,string for fixed value
foreground | String          | -                                  | -            | -
background | String          | transparent(png) / '#ffffff'(jpeg) | -            | -
saturation | Number          | 0.7                                | 0-1          | -
lightness  | Number          | 0.6                                | 0-1          | -

## demo

```javascript
//identicon
const identicon = sosnail.identicon({
  'text': 'test'
});
//default
const identicon = sosnail.identicon({
  'text': 'test',
  'size': 400
});
//size 400
......
```
