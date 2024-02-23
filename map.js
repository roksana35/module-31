// map => loops through each element of the array and do the oparation that you passed in the callblack and hold the result in each oparation fainaly return you in a array

const numbers = [4,5,2,8,10];

// old way
const double = [];
for (const num of numbers) {
    const doubled = num*2;
    double.push(doubled);
}
// console.log(double);

// new way ES6
function digun(num){
    return num*2;
}


const doubleIt = x =>x*2;
const result = numbers.map(doubleIt);
const result2 = numbers.map(digun);
// console.log(result);
// console.log(result2);

