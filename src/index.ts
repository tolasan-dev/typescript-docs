

// create class a person 

class Person {
  name: string
  age: number


//    contructor default 
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }


//  Getter method 
  greet(): void {
    console.log(`Hello, my name is ${this.name}`)
  }
}


//  create instance object 
const p1 = new Person("San Tola ", 20)
p1.greet()
