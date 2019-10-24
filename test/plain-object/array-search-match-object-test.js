var obj = [
	{
		"proditNo":"IT300",
		"opt1No":1,
		"opt1Nm":"색상",
		"opt1Val":"빨강",
		"opt2No":2,
		"opt2Nm":"사이즈",
		"opt2Val":"스몰",
		"opt3No":0,
		"opt4No":0,
		"opt5No":0,
	},
	{
		"proditNo":"IT303",
		"opt1No":1,
		"opt1Nm":"색상",
		"opt1Val":"파랑",
		"opt2No":2,
		"opt2Nm":"사이즈",
		"opt2Val":"미디움",
		"opt3No":0,
		"opt4No":0,
		"opt5No":0,
	},
	{
		"proditNo":"IT302",
		"opt1No":1,
		"opt1Nm":"색상",
		"opt1Val":"파랑",
		"opt2No":2,
		"opt2Nm":"사이즈",
		"opt2Val":"스몰",
		"opt3No":0,
		"opt4No":0,
		"opt5No":0,
	},
	{
		"proditNo":"IT301",
		"opt1No":1,
		"opt1Nm":"색상",
		"opt1Val":"빨강",
		"opt2No":2,
		"opt2Nm":"사이즈",
		"opt2Val":"미디움",
		"opt3No":0,
		"opt4No":0,
		"opt5No":0,
	}
];

/**
 * arry에서 keys, values를 기준으로 일치하는 object를 찾아서 리턴
 * keys와 values로 넘어온 값들은 인덱스가 같아야한다. 예를 들어 keys가 ['a','b']이고, values가 [1, 2]일 땐
 * 프로퍼티 a의 값이 1이며 프로퍼티 b의 값이 2인 객체를 리턴한다. 
 * 반약 keys와 values의 길이가 일치하지 않고, 찾은 객체가 둘 이상일 경우 에러를 던지게 되어 있다.
 *
 * @param arry object로 구성된 배열. 검색 대상.
 * @param keys 파이프(|)로 구분되는 문자열 혹은 배열. 하나 이상의 프로퍼티 이름 목록.
 * @param values 파이프(|)로 구분되는 문자열 혹은 배열. 하나 이상의 프로퍼티 값 목록.
 * @return object
 */
function getMatchElement(arry, keys, values) {
	if (typeof arry != 'object') {
		throw new Error('arry는 반드시 객체타입이어야 합니다.');
	}
	var keys = typeof keys == 'string' ? keys.split('|') : keys;
	var values = typeof values == 'string' ? values.split('|') : values;
	if (keys.length != values.length) {
		throw new Error('keys와 values는 길이가 일치해야 합니다.');
	}
	for (var i in arry) {
		var ele = arry[i];
		var findCount = 0;
		for (var j = 0; j < keys.length; j++) {
			if (ele[keys[j]] == values[j]) {
				findCount++
			}
		}
		if (findCount == keys.length) {
			if (typeof result == 'undefined') {
				var result = ele;
			} else {
				throw new Error('둘 이상의 일치하는 객체가 발견되었습니다.');
			}
		}
	}
	return result;
}
console.log('before:', obj);
var result = getMatchElement(obj, 'opt1Val|opt2Val', '파랑|스몰');
console.log('after:', result);
