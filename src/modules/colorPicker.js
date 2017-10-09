/**
 * @Author: gaomingjun
 * @Date:   2017-09-23 15:49:36
 * @Last modified by:   gaomingjun
 * @Last modified time: 2017-09-26 16:26:29
 */



class colorPicker {
  constructor() {}
  rgb2hsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    let hsl = {};
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    hsl.l = (max + min) / 2;
    let d = max - min;
    if (max === min) {
      hsl.h = hsl.s = 0;
    } else {
      hsl.s = hsl.l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          hsl.h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          hsl.h = (b - r) / d + 2;
          break;
        case b:
          hsl.h = (r - g) / d + 4;
          break;
      }
      hsl.h /= 6;
    }
    hsl.h = Math.round(hsl.h * 360);
    hsl.s = Math.round(hsl.s * 100);
    hsl.l = Math.round(hsl.l * 100);
    return [hsl.h, hsl.s, hsl.l];
  }
  hsl2rgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let rgb = {};
    if (s === 0) {
      l = Math.round(l * 255);
      return [l, l, l];
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - (l * s);
    const p = 2 * l - q;
    rgb = {
      r: h + 1 / 3,
      g: h,
      b: h - 1 / 3
    };
    const hue2rgb = (item) => {
      if (item < 0) {
        item += 1;
      }
      if (item > 1) {
        item -= 1;
      }
      if (item * 6 < 1) {
        return p + (q - p) * 6 * item;
      }
      if (item * 2 < 1) {
        return q;
      }
      if (item * 3 < 2) {
        return p + (q - p) * 6 * (2 / 3 - item);
      }
      return p;
    };
    for (let i in rgb) {
      rgb[i] = hue2rgb(rgb[i]);
    }
    rgb.r = Math.round(rgb.r * 255);
    rgb.g = Math.round(rgb.g * 255);
    rgb.b = Math.round(rgb.b * 255);
    return [rgb.r, rgb.g, rgb.b];
  }
  rgb2hsb(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    let hsb = {};
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    hsb.b = max;
    let d = max - min;
    hsb.s = max === 0 ? 0 : d / max;
    if (max === min) {
      hsb.h = 0;
    } else {
      switch (max) {
        case r:
          hsb.h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          hsb.h = (b - r) / d + 2;
          break;
        case b:
          hsb.h = (r - g) / d + 4;
          break;
      }
      hsb.h /= 6;
    }
    hsb.h = Math.round(hsb.h * 360);
    hsb.s = Math.round(hsb.s * 100);
    hsb.b = Math.round(hsb.b * 100);
    return [hsb.h, hsb.s, hsb.b];
  }
  hsb2rgb(h, s, b) {
    s /= 100;
    b /= 100;
    h /= 60;
    let rgb = {};
    if (b === 0) {
      return [0, 0, 0];
    }
    const i = Math.floor(h);
    const f = h - i;
    const p = b * (1 - s);
    const q = b * (1 - (s * f));
    const t = b * (1 - (s * (1 - f)));
    switch (i) {
      case 0:
        rgb.r = b;
        rgb.g = t;
        rgb.b = p;
        break;
      case 1:
        rgb.r = q;
        rgb.g = b;
        rgb.b = p;
        break;
      case 2:
        rgb.r = p;
        rgb.g = b;
        rgb.b = t;
        break;
      case 3:
        rgb.r = p;
        rgb.g = q;
        rgb.b = b;
        break;
      case 4:
        rgb.r = t;
        rgb.g = p;
        rgb.b = b;
        break;
      case 5:
        rgb.r = b;
        rgb.g = p;
        rgb.b = q;
        break;
    }
    rgb.r = Math.floor(rgb.r * 255);
    rgb.g = Math.floor(rgb.g * 255);
    rgb.b = Math.floor(rgb.b * 255);
    return [rgb.r, rgb.g, rgb.b];
  }
  rgb2hex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }
  hex2rgb(hex) {
    return [parseInt("0x" + hex.slice(1, 3)), parseInt("0x" + hex.slice(3, 5)), parseInt("0x" + hex.slice(5, 7))];
  }
  hsl2hsb(h, s, l) {
    const rgb = this.hsl2rgb(h, s, l);
    return this.rgb2hsb(rgb[0], rgb[1], rgb[2]);
  }
  hsl2hex(h, s, l) {
    const rgb = this.hsl2rgb(h, s, l);
    return this.rgb2hex(rgb[0], rgb[1], rgb[2]);
  }
  hsb2hsl(h, s, b) {
    const rgb = this.hsb2rgb(h, s, b);
    return this.rgb2hsl(rgb[0], rgb[1], rgb[2]);
  }
  hsb2hex(h, s, b) {
    const rgb = this.hsb2rgb(h, s, b);
    return this.rgb2hex(rgb[0], rgb[1], rgb[2]);
  }
  hex2hsl(hex) {
    const rgb = this.hex2rgb(hex);
    return this.rgb2hsl(rgb[0], rgb[1], rgb[2]);
  }
  hex2hsb(hex) {
    const rgb = this.hex2rgb(hex);
    return this.rgb2hsb(rgb[0], rgb[1], rgb[2]);
  }
}

module.exports = colorPicker;
