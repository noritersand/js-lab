const assert = require('assert');
const { log } = console;

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
  }
];
var obj2 = 	[
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
 * target에서 origin과 일치하는 프로퍼티를 찾아 제거하고 남은 배열을 돌려준다.
 * targetKeys와 originKeys를 기준으로 일치하는지를 판단한다.
 * target과 origin이 '[{a = 1, b = 2}]' 같은 형태의 object array일 때만 정상 작동한다.
 *
 * example: removeDupProp(target, origin, 'loginId|userName', 'loginId|userName');
 *
 * @param target (object) origin과 비교해 중복을 제거할 대상
 * @param origin (object) 비교 대상
 * @param targetKeys (string) 비교 기준이되는 프로퍼티의 이름을 지정한다. 하나 이상일땐 파이프로 구분한다.
 * @param originKeys (string) target과 origin의 프로퍼티가 다를 때 지정한다. 생략하면 targetKeys를 같이 사용한다.
 * @returns array target에서 중복된 프로퍼티를 제거한 결과
 */
function removeDupProp(target, origin, targetKeys, originKeys) {
  var targetKeyArr = targetKeys.split('|');
  var originKeyArr = originKeys && originKeys.split('|') || targetKeyArr;
  if (targetKeyArr.length != originKeyArr.length) {
    throw new Error('targetKey와 originKey의 길이가 다릅니다.');
  }
  var keysLen = targetKeyArr.length;
  for (var i = 0; i < target.length; i++) {
    for (var j = 0; j < origin.length; j++) {
      var equalCount = 0;
      for (var k = 0; k < keysLen; k++) {
        if (target[i][targetKeyArr[k]] == origin[j][originKeyArr[k]]) {
          equalCount++;
        }
      }
      if (equalCount == keysLen) {
        target.splice(i, 1);
        i--;
        break;
      }
    }
  }
  return target;
}
var result = removeDupProp(obj, obj2, 'opt1Val|opt2Val');
log(result);
