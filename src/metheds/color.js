/**
 * @Author: gaomingjun
 * @Date:   2017-09-20 09:56:32
 * @Last modified by:   gaomingjun
 * @Last modified time: 2017-10-09 10:53:05
 */



import sha1 from 'crypto-js/sha1';
import ColorPicker from 'modules/colorPicker.js';
const colorPicker = new ColorPicker();
import number from 'metheds/number.js';

const color = (opts) => {
  opts = Object.assign({
    'text': null,
    'format': 'hex',
    'alpha': [0, 1],
    'luminosity': null,
    'hue': null
  }, opts);

  const hash = sha1(opts.text).toString();
  const seed = opts.text === null ? Math.random() : parseInt(hash.substr(-7), 16) / 0xfffffff;

  if (opts.format.indexOf('hsv') !== -1) {
    opts.format = opts.format.replace('v', 'b');
  };
  const convertType = [
    'hex',
    'hsl',
    'hsla',
    'hsb',
    'rgb',
    'rgba',
    'hsl-web',
    'hsla-web',
    'rgb-web',
    'rgba-web'
  ];

  if (!convertType.includes(opts.format)) {
    opts.format = 'hex';
  };

  //random color
  let color = null;
  let minL = null;
  let maxL = null;
  const delta = (min = 50, max = 100) => {
    if (opts.text !== null) {
      return Math.floor(seed * 100);
    } else {
      return number({
        'min': min,
        'max': max
      });
    }
  };
  switch (opts.luminosity) {
    case 'light':
      minL = 75;
      maxL = 100;
      break;
    case 'dark':
      minL = 50;
      maxL = 75;
      break;
    default:
      minL = 50;
      maxL = 100;
  }

  switch (opts.hue) {
    case 'red':
      color = colorPicker.hsb2hex(0, delta(minL, maxL), delta(minL, maxL));
      break;
    case 'red-orange':
      color = colorPicker.hsb2hex(16, delta(minL, maxL), delta(minL, maxL));
      break;
    case 'orange':
      color = colorPicker.hsb2hex(38, delta(minL, maxL), delta(minL, maxL));
      break;
    case 'orange-yellow':
      color = colorPicker.hsb2hex(50, delta(minL, maxL), delta(minL, maxL));
      break;
    case 'yellow':
      color = colorPicker.hsb2hex(60, delta(minL, maxL), delta(minL, maxL));
      break;
    case 'yellow-green':
      color = colorPicker.hsb2hex(79, delta(minL, maxL), delta(minL, maxL));
      break;
    case 'green':
      color = colorPicker.hsb2hex(120, delta(minL, maxL), delta(minL, maxL));
      break;
    case 'green-blue':
      color = colorPicker.hsb2hex(180, delta(minL, maxL), delta(minL, maxL));
      break;
    case 'blue':
      color = colorPicker.hsb2hex(240, delta(minL, maxL), delta(minL, maxL));
      break;
    case 'blue-violet':
      color = colorPicker.hsb2hex(271, delta(minL, maxL), delta(minL, maxL));
      break;
    case 'violet':
      color = colorPicker.hsb2hex(300, delta(minL, maxL), delta(minL, maxL));
      break;
    case 'violet-red':
      color = colorPicker.hsb2hex(341, delta(minL, maxL), delta(minL, maxL));
      break;
    default:
      color = `#${Math.floor(seed * 0xffffff).toString(16)}`;
  }
  let format = opts.format;
  const hasWeb = opts.format.indexOf('-web') !== -1;
  const result = () => {
    const getAlpha = () => {
      let alpha = null;
      if (opts.alpha.length) {
        return alpha = number({
          'min': opts.alpha[0],
          'max': opts.alpha[1],
          'decimal': 2
        });
      } else {
        return alpha = opts.alpha !== 0 ? opts.alpha : number({
          'min': 0,
          'max': 1,
          'decimal': 2
        });
      };
    };
    if (hasWeb) {
      format = format.substr(0, format.indexOf('-web'));
    }
    switch (format) {
      case 'hex':
        return color;
      case 'rgba':
        const rgbaColor = colorPicker.hex2rgb(color);
        rgbaColor.push(getAlpha());
        return rgbaColor;
      case 'hsla':
        const hslaColor = colorPicker.hex2hsl(color);
        hslaColor.push(getAlpha());
        return hslaColor;
      default:
        return colorPicker[`hex2${format}`](color);
    }
  };
  const formatWeb = (color) => {
    if (format === 'hsl' || format === 'hsla') {
      color[1] = `${color[1]}%`;
      color[2] = `${color[2]}%`;
    };
    const strColor = color.join();
    return `${format}(${strColor})`;
  };
  return hasWeb ? formatWeb(result()) : result();
};

module.exports = color;
