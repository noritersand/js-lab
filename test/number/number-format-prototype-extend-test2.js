// 소스 출처: http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript

/**
 * Number.prototype.format(fix, seperator, seperator2)
 * 
 * @param {number} fix 포맷 적용할 숫자
 * @param {string} separator 소수점 구분자
 * @param {string} separator2 천 단위 구분자
 * 
 * usage:
 *  - (123456).format(0) // "123,456"
 *  - (123456).format(2) // "123,456.00"
 *  - (123456).format(2, '|') // "123,456|00"
 *  - (123456).format(2, null, '|') // "123|456.00"
 */
Number.prototype.format = function(c, d, t) {
	var n = this, 
	c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, 
	t = t == undefined ? "," : t, s = n < 0 ? "-" : "", 
	i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0;
	
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t)
			+ (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

console.debug('(123456).format(0):', (123456).format(0)); // "123,456"
console.debug('(123456).format(2):', (123456).format(2)); // "123,456.00"
console.debug('(123456.789).format(4):', (123456.789).format(4)); // 123,456.7890
console.debug('(123456).format(2, \'\|\'):', (123456).format(2, '|')); // "123,456|00"
console.debug('(123456).format(2, null, \'\|\'):', (123456).format(2, null, '|')); // "123|456.00"
