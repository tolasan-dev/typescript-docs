export class Person {
  constructor(
    public name: string,
    public age: number
  ) {}

  introduce(): void {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`)
  }
}
