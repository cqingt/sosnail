/**
 * @Author: gaomingjun
 * @Date:   2017-09-20 09:56:32
 * @Last modified by:   gaomingjun
 * @Last modified time: 2017-09-21 14:53:08
 */


const letter = (opts) => {
  opts = Object.assign({
    'format': 'lowercase', // lowercase,uppercase
    'length': 1,
    'exclude': []
  }, opts);
  let startLetter = 'a';
  if (opts.format === 'uppercase') {
    startLetter = 'A';
  };
  let randomLetter = '';
  let currLetter = '';
  for (let i = 0; i < opts.length; i++) {
    const getLetter = () => {
      let condition = false;
      //获取随机字母
      currLetter = String.fromCharCode(Math.floor(Math.random() * 26) + startLetter.charCodeAt(0));
      // 判断数据类型
      if (typeof opts.exclude === 'string') {
        condition = opts.exclude === currLetter;
      } else {
        condition = opts.exclude.includes(currLetter);
      };
      if (condition) {
        getLetter();
      }
    };
    getLetter();
    randomLetter += currLetter;
  }
  return randomLetter;
};

module.exports = letter;
