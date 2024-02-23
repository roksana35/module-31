const numbers = [1,5,6,4,15];
// filter selects  element based on a condition and returns an array with the element that fullfil the condition.
const player = [70,57,69,90,89,84];
// const selected = player.filter(p =>p>=70);
// const selected = player.filter(p =>p>=60);
// const selected = player.filter(p =>p%2 ===1);
const friends = ['roksana','jeny','shammi','shuborna','mim ','simi'];
const oddfriend = friends.filter(f => f.length>4);
console.log(oddfriend);