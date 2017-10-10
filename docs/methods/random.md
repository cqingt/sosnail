# random

## Configuration

Prop | Type  | Default | Params | Describe
---- | ----- | ------- | ------ | -----------
data | Array | []      | -      | random data

## demo

```javascript
const random = sosnail.random({
  'data': [1, 2, 3, 4, 5]
});
//unique
const random = sosnail.random({
  'data': [1, 1, 1, 1, 2]
});
//1 50% 2 50%
const random = sosnail.random({
  'data': [{
    'a': 1
  }, {
    'a': 1
  }, 1, 1, 1, 2]
});
```
