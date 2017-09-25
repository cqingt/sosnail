/**
 * @Author: gaomingjun
 * @Date:   2017-09-22 10:35:07
 * @Last modified by:   gaomingjun
 * @Last modified time: 2017-09-25 10:50:44
 */


import sha1 from 'crypto-js/sha1';
import ColorPicker from 'module/colorPicker.js';


const identicon = (opts) => {
  opts = Object.assign({
    'text': null,
    'size': 200,
    'type': 'png',
    'padding': 0.1,
    'foreground': undefined,
    'background': opts.type === 'jpeg' ? '#fff' : 'rgba(255, 255, 255, 0)',
    'saturation': 0.7,
    'lightness': 0.6
  }, opts);
  const hash = sha1(opts.text).toString();
  const colorPicker = new ColorPicker();
  const color = colorPicker.hsl2rgb(parseInt(hash.substr(-7), 16) / 0xfffffff, opts.saturation, opts.lightness).rgb;
  const size = opts.size; //画布尺寸
  const grid = 5; //画布栅格数
  const padding = typeof opts.padding === 'number' ? size * opts.padding : +opts.padding; //间距
  const cell = Math.floor((size - padding * 2) / grid); //格子宽度
  const floorHalfGrid = (grid - 1) / 2; //栅格一半向下取舍
  const floorSize = cell * floorHalfGrid * 2; //画布尺寸向下取舍
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = size;
  canvas.height = size;
  ctx.fillStyle = opts.background;
  ctx.fillRect(0, 0, size, size);
  ctx.beginPath();
  ctx.fillStyle = opts.foreground || `rgb(${color})`;
  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < floorHalfGrid + 1; j++) {
      const index = j + i * (floorHalfGrid + 1);
      const draw = parseInt(hash.charAt(index), 16) % 2;
      if (draw) {
        ctx.fillRect(cell * j + padding, cell * i + padding, cell, cell);
        ctx.fillRect(floorSize - cell * j + padding, cell * i + padding, cell, cell);
      };
    }
  }
  const base64 = canvas.toDataURL(`image/${opts.type}`);
  return base64;
};

module.exports = identicon;
