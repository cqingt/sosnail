# letter

## Configuration

Prop    | Type         | Default   | Params              | Describe
------- | ------------ | --------- | ------------------- | ------------------
format  | String       | lowercase | lowercase,uppercase | text-transform
length  | Number       | 1         | -                   | length of value
exclude | Number/Array | []        | -                   | exclude value

## demo

```javascript
//letter
const letter = sosnail.letter();
//a-z lowercase length 1

const letter1 = sosnail.letter({
  'format': 'uppercase'
});
//A-Z uppercase length 1

const letter2 = sosnail.letter({
  'length': 6
});
//a-z lowercase length 6

const letter3 = sosnail.letter({
  'exclude': 'a'
});
//a-z lowercase length 1 exclude a

const letter4 = sosnail.letter({
  'exclude': ['a', 'b', 'c']
});
//a-z lowercase length 1 exclude a,b,c
```
