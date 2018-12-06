const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

strings.push('e'); 
console.log('Push is O(1): ' + strings);

strings.pop();
console.log('Pop is O(1): ' + strings);

strings.unshift('z');
console.log('Insert is O(n): ' + strings);

strings.splice(2, 0, 'alien');
console.log('Insert is O(n)' + strings);



