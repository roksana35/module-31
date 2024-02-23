// task-1
let data = {
    Sophia:{
        id:33,
        study:[
            {
                Primary:[
                    {school_name:'ABC primary school'},
                    {location:'peter burg'}
                ]
            },
            {
                secondary:[
                    {school_name:'ABC primary school'},
                    {location:'St lorence'}
                ]
            }
        ]
    }
}

// console.log(data.Sophia.study[1].secondary[1].location);

// task-2
let students ={
    2222:{
        name:'Jack',
        section:'C',
        class:'IX',
        address :{
            'building no':12,
            'street':'St Jonson',
            'city':'Petersburg',
            'country':'UK',
        }
    },
    3333:{
        name:'rack',
        section:'B',
        class:'IX',
        address :{
            'building no':10,
            'street':'St Jonson park',
            'city':'Petersburg Hotel',
            'country':'UK',
        }
    },
}
// console.log(students[2222].address.city)
// console.log(students[3333].address.city)

// task-3
let data2 ={
    data:[
        {
            bookId:1,
            bookDetails:{
                name:'habluder adda',
                category:'XYZ',
                price:'$20',
            },
            bookCategory:'Basic',
        },
        {
            bookId:2,
            bookDetails:{
                name:'gabiuder adda',
                category:'XYZ',
                price:'$20',
            },
            bookCategory:'Beginnner',
        },
    ]
}
// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory);

// task-4 
const number = [1,3,5,7,9];
const oddNumber =x=>x+1;
const result =number.map(oddNumber);
// console.log(result);
// another way to use for loop
const newarry =[];

for (const num of number) {
    const double = num+1;
    newarry.push(double);
}
// console.log(newarry)

// task-5
const array = [33,50,79,78,90,101,30];
const divisiable =array.filter(a=>a%10 ===0);
// console.log(divisiable);
const find = array.find(a=>a%10===0);
// console.log(find);

// task-6
const instructor =[
    {name:'Nodi',age:28,position:'senior'},
    {name:'Akhi',age:26,position:'junior'},
    {name:'Shobuj',age:30,position:'senior'},
]
const position =instructor.filter(x=>x.position=='senior')
// console.log(position);

// task-7
const people = [
    {name:'Meena',age:20},
    {name:'Reena',age:15},
    {name:'Shuchorita',age:22},
]
const reduc = people.reduce((previce,current)=>previce+current.age,0)
console.log(reduc);
// using for loop
let totalAge = 0;
for (const p of people) {
    totalAge= totalAge+p.age;
}
console.log(totalAge)
