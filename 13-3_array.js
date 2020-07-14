13-3

// how to add in array

var friendsAge = [15, 17, 14, 16];
var sonaliAge = friendsAge[2];
friendsAge[1] = 21;
var position = friendsAge.indexOf(141);
console.log(friendsAge);
// when we will add some thing in array, ww'll use .push after the 'array name'
friendsAge.push(15);
friendsAge.push(25);
friendsAge.push(28);
console.log(friendsAge);
// jodi amra array tar length(dhoirgo)jante chai tahole colsole.log('arrayname'.length)
console.log(friendsAge.length)
// jodi last er akta element ke bahri kore ba boshishkar korta chai tahole 'arrayname'.pop(); use korte hobe
friendsAge.pop();
console.log(friendsAge);