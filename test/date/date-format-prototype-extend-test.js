/**
 * f로 지정된 포맷을 적용하여 문자열로 반환
 * 
 * @param f format 문자
 * 
 * usage:
 * - now.format('yyyy-MM-dd HH:mm:ss') // 2019-03-28 12:12:12
 * - now.format('yyMMdd') // 190328
 * - now.format('a/p hh시 mm분') // 오후 03시 28분
 * - now.format('MM월 dd일 E') // 03월 28일 목요일
 */
Date.prototype.format = function(f) {
	if (!this.valueOf()) {
		return '';
	}
	var weekName = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
	var d = this;
	return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
		switch($1) {
			case 'yyyy': 
				return d.getFullYear();
			case 'yy': 
				return (d.getFullYear() % 1000).subFormat(2);
			case 'MM': 
				return (d.getMonth() + 1).subFormat(2);
			case 'dd': 
				return d.getDate().subFormat(2);
			case 'E': 
				return weekName[d.getDay()];
			case 'HH': 
				return d.getHours().subFormat(2);
			case 'hh': 
				return ((h = d.getHours() % 12) ? h : 12).subFormat(2);
			case 'mm': 
				return d.getMinutes().subFormat(2);
			case 'ss': 
				return d.getSeconds().subFormat(2);
			case 'a/p': 
				return d.getHours() < 12 ? '오전' : '오후';
			default: 
				return $1;
		}
	});
};
String.prototype.string = function(len) {
	var s = "", i = 0;
	while (i++ < len) {
		s += this;
	}
	return s;
};
String.prototype.subFormat = function(len) {
	return '0'.string(len - this.length) + this;
};
Number.prototype.subFormat = function(len) {
	return this.toString().subFormat(len);
};

var now = new Date();
console.debug('now.format(\'yyyy-MM-dd HH:mm:ss\'):', now.format('yyyy-MM-dd HH:mm:ss')); // 2019-03-28 12:12:12
console.debug('now.format(\'yyMMdd\'):', now.format('yyMMdd')); // 190328
console.debug('now.format(\'a/p hh시 mm분\'):', now.format('a/p hh시 mm분')); // 오후 03시 28분
console.debug('now.format(\'MM월 dd일 E\'):', now.format('MM월 dd일 E')); // 03월 28일 목요일 
