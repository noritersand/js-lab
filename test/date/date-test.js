// add date
var instance = new Date();
console.log('instance:', instance.toISOString());
instance.setDate(instance.getDate() + 1);
console.log('instance + 1day:', instance.toISOString());

var isoDate = new Date('2018-01-01T12:24:48Z')
console.log('isoDate:', isoDate.toISOString());

var localeDate = new Date('2018-01-01 12:24:48')
console.log('localeDate:', localeDate.toLocaleString());

var koreanTimeZone = new Date('2016-02-05T09:00:00.000+09:00')
console.log('koreanTimeZone:', koreanTimeZone.toLocaleString());
