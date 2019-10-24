// case#1: 객체의 값을 배열이라 가정하고 객체 배열로 구조를 바꾼다. 
// {a:[n]} => [{a:n}, {a:n}]
/**
 * 
 * @param name
 * @param arr
 * @return array
 */
function objectArrayToArrayObject(name, arr) {
	var resultArry = [];
	for (var i = 0; i < arr.length; i++) {
		var obj = {};
		obj[name] = arr[i];
		resultArry.push(obj);
	}
	return resultArry;
}
var material = {
	'numbers': ['65','64'],
	'quantities': [2,3],
	'totalPrice': 39000
}
var result = objectArrayToArrayObject('numbers', material.numbers); // [{"numbers":"65"},{"numbers":"64"}]
console.log(result);

//-------------------------------------------------------------------------------------------

// case#2: 객체 프로퍼티의 값이 어레이일 때 구조를 변환하도록 자동으로 처리 
// {a:[n1, n2], b:[n3, n4]} => [{a:n1, b:n2}, {a:n3, b:n4}]
/**
 * 
 * @param names 파이프로 구분되는 이름
 * @param unnamed-parameters arguments에서 꺼내쓰는 배열들
 * @return array
 */
function objectArrayToArrayObject2(names) {
	var names = names.split('|');
	if (names.length !== arguments.length - 1) {
		throw new Error('names의 길이와 전달인자의 개수가 일치하지 않습니다.');
	}
	for (var i = 1; i < names.length; i++) {
		if (arguments[i].constructor !== Array) {
			throw new Error('names를 제외한 전달인자는 배열만 지정할 수 있습니다.');
		}
		if (arguments[i + 1] && arguments[i].length !== arguments[i + 1].length) {
			throw new Error('모든 배열의 길이는 같아야 합니다.');
		}
	}
	var resultArry = [];
	for (var i = 0; i < arguments[1].length; i++) {
		var obj = {};
		for (var j = 0; j < names.length; j++) {
			obj[names[j]] = arguments[j + 1][i];
		}
		resultArry.push(obj);
	}
	for (var i = 1; i < arguments.length; i++) {
		if (arguments[i].constructor !== Array) {
			throw new Error('names를 제외한 전달인자는 배열만 지정할 수 있습니다.');
		}
		
	}
	return resultArry;
}
var result2 = objectArrayToArrayObject2('alphabet|addOptNo|ordQty',  ['a', 'b', 'c', 'd'], ['31', '64', '180', 'SE1123'], [2, 3, 10, 9]);
console.log(result2);
/*
[
	{"alphabet":"a","addOptNo":"31","ordQty":2},
	{"alphabet":"b","addOptNo":"64","ordQty":3},
	{"alphabet":"c","addOptNo":"180","ordQty":10},
	{"alphabet":"d","addOptNo":"SE1123","ordQty":9}
]
*/
