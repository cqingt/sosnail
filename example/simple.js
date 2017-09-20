/**
 * @Author: gaomingjun
 * @Date:   2017-09-19 11:07:37
 * @Last modified by:   gaomingjun
 * @Last modified time: 2017-09-20 17:39:01
 */



const sosnail = require('sosnail.js');

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
