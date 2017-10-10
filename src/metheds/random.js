/**
 * @Author: gaomingjun
 * @Date:   2017-10-09 17:28:21
 * @Last modified by:   gaomingjun
 * @Last modified time: 2017-10-10 10:19:25
 */



const random = (opts) => {
  opts = Object.assign({
    'data': []
  }, opts);
  const unique = function(array) {
    const hash = {};
    const result = [];
    for (var i = 0; i < array.length; i++) {
      let item = array[i];
      const type = Object.prototype.toString.call(item);
      if (type === '[object Object]') {
        item = JSON.stringify(item);
      }
      if (!hash[item + type]) {
        hash[item + type] = true;
        if (isNaN(+item)) {
          try {
            item = JSON.parse(item);
          } catch (e) {}
        };
        result.push(item);
      }
    }
    return result;
  };
  opts.data = unique(opts.data);
  return opts.data[Math.floor(Math.random() * opts.data.length)];
};

module.exports = random;
