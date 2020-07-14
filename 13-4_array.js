
// to add an element at last use .push . and it will add element at the end
var teaLine = ['palam0', 'kalam1', 'balam2'];
teaLine.push('akash', 'batash', 'hawa', 'gawa' );
console.log(teaLine);


var teaLine = ['palam0', 'kalam1', 'balam2'];
teaLine.push('akash', 'batash', 'hawa', 'gawa' );
console.log(teaLine);
// to delete an element at last use .pop . and it will delete last one
teaLine.pop('gawa',);
console.log(teaLine)

// to add an element al first, use unshift
var teaLine = ['palam0', 'kalam1', 'balam2'];
teaLine.unshift('abdul', 'ahad');
console.log(teaLine);

// to delete an element from first, use .shift
var teaLine = ['palam', 'kalam', 'balam'];
teaLine.shift('palam');
console.log(teaLine);


// to slice 1 or more element use .slice
var teaLine = [ 'palam0', 'kalam1', 'balam2', 'akash', 'batash', 'hawa' ];
var part = teaLine.slice(2, 5);
console.log(part);
console.log(teaLine);




