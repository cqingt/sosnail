# number

## Configuration

Prop    | Type         | Default | Params | Describe
------- | ------------ | ------- | ------ | -------------------
min     | Number       | 0       | -      | minimum number
max     | Number       | 9       | -      | maximum number
exclude | Number/Array | []      | -      | exclude value
decimal | Number       | 0       | -      | ${N} decimal places

## demo

```javascript
//number
const number = sosnail.number();
//0-9 integer

const number1 = sosnail.number({
  'min': 12,
  'max': 24
});
//12-24 integer

const number2 = sosnail.number({
  'decimal': 2
});
//0-9 float

const number3 = sosnail.number({
  'exclude': 5
});
//0-9 exclude 5

const number4 = sosnail.number({
  'exclude': [5, 7]
});
//0-9 exclude 5 7
```
