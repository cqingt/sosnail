# mixture

## Configuration

Prop             | Type         | Default | Params | Describe
---------------- | ------------ | ------- | ------ | ------------------
separator.symbol | String       | '-'     | -      | separator
separator.index  | Number/Array | []      | -      | index of separator
length           | Number       | 1       | -      | length of value
exclude          | Number/Array | []      | -      | exclude value

## demo

```javascript
//mixture
const mixture = sosnail.mixture();
//a-z or A-Z or 0-9 length 1

const mixture1 = sosnail.mixture({
  'length': 10
});
//a-z or A-Z or 0-9 length 10

const mixture2 = sosnail.mixture({
  'exclude': 'a'
});
//a-z or A-Z or 0-9 length 1 exclude a

const mixture3 = sosnail.mixture({
  'exclude': ['a', 'A', 0]
});
//a-z or A-Z or 0-9 length 1 exclude a,A,0

const mixture4 = sosnail.mixture({
  'separator': {
    'index': 5
  },
  'length': 11,
  'exclude': ['a', 'A', 0]
});
//a-z or A-Z or 0-9 length 11 exclude a,A,0 separator.symbol '-' (default) separator.index 5

const mixture5 = sosnail.mixture({
  'separator': {
    'symbol': '_',
    'index': [3, 5, 7]
  },
  'length': 11,
  'exclude': ['a', 'A', 0]
});
//a-z or A-Z or 0-9 length 11 exclude a,A,0 separator.symbol '_' separator.index 3,5,7
```
