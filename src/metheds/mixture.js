/**
 * @Author: gaomingjun
 * @Date:   2017-09-20 14:20:14
 * @Last modified by:   gaomingjun
 * @Last modified time: 2017-09-23 15:59:01
 */



import number from 'metheds/number.js';
import letter from 'metheds/letter.js';

const mixture = (opts) => {
  opts = Object.assign({
    'separator': { //分隔符
      'symbol': '-',
      'index': []
    },
    'length': 1,
    'exclude': []
  }, opts);

  let randomMixture = '';
  let currMixture = ''; //随机英数字
  for (let i = 0; i < opts.length; i++) {
    const getMixture = () => {
      let condition = false;
      const type = Math.floor(Math.random() * 3);
      switch (type) {
        case 0:
          currMixture = letter({
            'format': 'uppercase'
          });
          break;
        case 1:
          currMixture = letter();
          break;
        case 2:
          currMixture = number();
          break;
      }
      if (typeof opts.separator.index === 'number' ? i === opts.separator.index : opts.separator.index.includes(i)) { //替换分隔符
        currMixture = opts.separator.symbol || '-';
      };
      // 判断数据类型
      if (typeof opts.exclude === 'string') {
        condition = opts.exclude === currMixture;
      } else {
        condition = opts.exclude.includes(currMixture);
      };
      if (condition) {
        getMixture();
      }
    };
    getMixture();
    randomMixture += currMixture;
  }
  return randomMixture;
};

module.exports = mixture;
