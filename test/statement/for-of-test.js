var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
for (let ele of arr) {
	console.debug(ele); // 'a', 'b', 'c', 'd', 'e', 'f', 'g'
}
for (let ele in arr) {
	console.debug(ele); // 0, 1, 2, 3, 4, 5, 6, 7
}

var obj = {
	a: 1, b: 2, c: 3, d: 4, e: 5
}
for (let ele of obj) {} // TypeError: obj is not iterable
