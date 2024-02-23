const data = [{id:1,name:'abul',address:'uttora '}];
// console.log(data[0].address);
const product = {
    count:5000,
    data:[
        { id:1,name:'lenovo laptop',price:65000,},
        { id:2, name:'macbook', price : 165000,},
    ]
}
// console.log(product.data[0].price);
const user={
    id:50001,
    name:'Mofazzal Hossen',
    adddress:{
        strret:{
            first:'54/1 uttor side',
            second:'poribag ar goli',
            third:'no dorai',
        },
        city:'Dhaka'
        
    }
}
console.log(user.adddress.strret.second);