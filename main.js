// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     info(){
//         console.log(`my name is ${this.name} , i am ${this.age} years old`)
//     }

//     get Age() {
//         return this.age
//     }

//     set Age(age){
//         if (age < 18 || age > 25 ) {
//             return null;
//         }
//         this.age=age
        
//     }
// }

// const person1 = new Person ("Lala", 20)
// person1.Age = 24
// console.log(person1)


// class Person{
//     #age=18
//     constructor(name,age){
//         this.name=name;
        
//     }

    

//     get Age() {
//         return this.#age
//     }

//     set Age(age){
//         this.#age = age
        
//     }
// }
// const person1 = new Person ("Lala", 20)
// person1.Age = 200;
// console.log(person1.Age)




class Woman {
    constructor(name,surname,age){
        this._name=name;
        this.surname=surname;
        this.age=age;
        this.isMarried=false;
        
    }

    get Name(){
      
       return `${this.isMarried ? 'Mrs' : 'Ms'} ${this._name} ${this.surname}`
    }

    set Name(value){
        if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
            this._name=value.charAt(0).toUpperCase() + value.slice(1)
        }
        else{
            this._name=value;
        }
    }
}



const woman1= new Woman ("Lala","Huseynova","23");
const woman1Instance = new Woman("Nigar","Taghiyeva","23");
woman1.Name="lali";

  function getInfo() {
      console.log(woman1Instance)
  }

console.log(woman1.Name)
console.log(woman1);
console.log(woman1Instance);