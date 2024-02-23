const product = [ 
       { id:1,name:'lenovo laptop',price:65000,},
       { id:2,name:'Dell',price:55000,},
       { id:3,name:'hp',price:45000,},
       { id:4,name:'Macbook',price:150000,},

];

// map
const id = product.map(p => p.id);
// console.log(id);
// foreach
const name = product.map(p => console.log(p.name));
// console.log(name);
// filter
const price = product.filter(p =>p.price>50000);
// console.log(price);
// find
const find = product.find(p => p.price>60000);
// 
// reduce
const total = product.reduce((accum,current)=>accum+current.price,0);
console.log(total);