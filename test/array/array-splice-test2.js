var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log('before:', arr);

for (var ele in arr) {
  console.log('- [first] ele:', ele, ', arr[ele]:', arr[ele]);
  if (ele == 2 || ele == 3 || ele == 5) {
    arr.splice(ele, 1);
  }
  console.log('- [last] ele:', ele, ', arr[ele]:', arr[ele]);
}

console.log('after:', arr);
