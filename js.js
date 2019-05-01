

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

//this... more practies:



/*
let name1= {
    name:'hadi'
}

let name2  = name1.name;
function ali () {
    alert(name2)
}

let fatemeh = ali.bind(name1);

fatemeh();

*/
/*

let user = {
    name:'hadi',
    do(){
        alert(`hi ${this.name}`)
    }
}

let talk = function(name) {
    alert(`hello ${this.name} and ... ${name}`)
}


let bound = talk.bind(user);
//let bound = user.do();

bound("ali");

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
 /*
 class A {
    constructor(name, car, familyy){
      this.name = 'peyman';
    }
  
    call(){
      console.log('hello');
    }
  
    hadi(){
      console.log('bmw');
    }
  }
  
  class B extends A {
      constructor(){
        super('peyman', 'bmw', 'ghazvini');
      }
  }
  
  
  const newB = new B();
  
  newB.call();
  newB.hadi();
  */