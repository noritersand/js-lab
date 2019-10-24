// test#1
function deleteNotSpecifiedProperty(obj, propNames) {
	for(var i in obj){
		var cnt = 0;
		for(var j in propNames){
			if(propNames[j] == i){
				cnt++;
				break;
			}
		}
		if(cnt==0){
			delete obj[i];
		}
	}
}
var obj = JSON.parse('{"selected":1,"status":"U","usrNo":10278,"loginId":"admin132","usrNm":"관리자132","passwd":"ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f","deptNo":10002,"lwrEntpNo":0,"regrId":"10101","regDts":"","modrId":"12345678","modDts":""}');
console.log('before:', JSON.stringify(obj));
deleteNotSpecifiedProperty(obj, ['status', 'usrNo', 'passwd']); // 지정한 프로퍼티만 골라냄
console.log('after:', JSON.stringify(obj));
