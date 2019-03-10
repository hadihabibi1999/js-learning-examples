
/*
let array = [
    {name:'hadi' , age:19},
    {name:'peyman',age :22},
    {name:'ali',age:22}
]

//reduce
let totalAge = array.reduce((mult,element)=>mult*=element.age,1)
alert(totalAge);

//map
let names = array.map(element=>element.name)
alert(names);

//filter
let filter = array.filter(element=>element.age === 22)
console.log(filter);

//reject



//promise
*/
let user = {
    name:'hadi',
    do(){
        console.log(`hi ${this.name}`)
    }
}
//let talkFunction = user.do();

let talkFunction = function (){
    console.log(`hi ${this.name}`)
}
let talk = talkFunction.bind(user);
talk();


