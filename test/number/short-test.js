var assert = require('assert');

// 소스 출처: http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript

function test1(n) {
// 		return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	return n.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
}

function test2(n) {
	return n.toFixed(2).replace(/./g, function(c, i, a) {
	    return i && c !== "." && ((a.length - i) % 3 === 0) ?',' + c : c;
	});
}

console.log('1:', test1(1));
console.log('12:', test1(12));
console.log('123:', test1(123));
console.log('1234:', test1(1234));
console.log('12345:', test1(12345));
console.log('123456:', test1(123456));
console.log('1234567:', test1(1234567));
console.log('12345.67:', test1(12345.67));
console.log('1234.567:', test1(1234.567)); // incorrect

console.log('1:', test2(1));
console.log('12:', test2(12));
console.log('123:', test2(123));
console.log('1234:', test2(1234));
console.log('12345:', test2(12345));
console.log('123456:', test2(123456));
console.log('1234567:', test2(1234567));
console.log('12345.67:', test2(12345.67));
console.log('1234.567:', test2(1234.567)); // incorrect
