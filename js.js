

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

/*
let user = {
    name:'hadi',
    do(){
        alert(`hi ${this.name}`)
    }
}

let talk = function() {
    alert(`hello ${this.name} ...`)
}


let bound = talk.bind(user);
//let bound = user.do();

bound();
    
    */
    
    /*
let talkFunction = function (){
    console.log(`hi ${this.name}`)
}
let talk = talkFunction.bind(user);
talk();
*/

/*
let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  

  let name = function  () {
      alert('hi')
  }
  setTimeout(name, 5000); 
  */