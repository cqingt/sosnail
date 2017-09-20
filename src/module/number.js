/**
 * @Author: gaomingjun
 * @Date:   2017-09-20 09:56:32
 * @Last modified by:   gaomingjun
 * @Last modified time: 2017-09-20 10:01:29
 */


const number = (opts) => {
	opts = Object.assign({
		'min': 0,
		'max': 9,
		'exclude': [],
		'decimal': null // 15 => max
	}, opts);
	const min = +opts.min;
	const max = +opts.max;
	let randomNum = null;
	const getNumber = () => {
		//根据小数点位置计算倍数
		const baseNum = Math.pow(10, opts.decimal > 15 ? 15 : opts.decimal);
		let condition = false;
		//获取随机数
		randomNum = Math.floor((Math.random() * (max - min + 1) + min) * baseNum) / baseNum;
		// 判断数据类型
		if (typeof opts.exclude === 'number') {
			condition = opts.exclude === randomNum;
		} else {
			condition = opts.exclude.includes(randomNum);
		};
		if (condition) {
			getNumber();
		};
	};
	getNumber();
	return randomNum;
};

module.exports = number;
