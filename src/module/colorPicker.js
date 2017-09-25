/**
 * @Author: gaomingjun
 * @Date:   2017-09-23 15:49:36
 * @Last modified by:   gaomingjun
 * @Last modified time: 2017-09-23 17:06:33
 */



class colorPicker {
  constructor() {}
  hsl2rgb(h, s, l) {
    let result = {};
    if (s === 0) {
			l = Math.round(l * 255);
      result = {
        'r': l,
        'g': l,
        'b': l,
        'rgb': [l, l, l]
      };
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - (l * s);
      const p = 2 * l - q;
      const t = {
        r: h + 1 / 3,
        g: h,
        b: h - 1 / 3
      };
      for (let i in t) {
        if (t[i] < 0) {
          t[i] += 1;
        } else if (t[i] > 1) {
          t[i] -= 1;
        }
        if (t[i] * 6 < 1) {
          result[i] = p + ((q - p) * 6 * t[i]);
        } else if (t[i] * 2 < 1) {
          result[i] = q;
        } else if (t[i] * 3 < 2) {
          result[i] = p + ((q - p) * 6 * (2 / 3 - t[i]));
        } else {
          result[i] = p;
        }
      }
      const r = Math.round(result.r * 255);
      const g = Math.round(result.g * 255);
      const b = Math.round(result.b * 255);
			result = {
				'r': r,
				'g': g,
				'b': b,
				'rgb': [r, g, b]
			};
    }

    return result;
  }
}

module.exports = colorPicker;
