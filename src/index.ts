//Basic Types

let id: number = 5;
let myName: string = "chryzcode";
let isPublished: boolean = true;
let x: any = "Hello";

//Array
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

//Tuple
let person: [number, string, boolean] = [1, "chryz", true];

//Tuple Array
let employee: [number, string][];

employee = [
  [1, "Chryz"],
  [2, "Tosin"],
  [3, "Fade"],
  [4, "Mike"],
];

// Union
let pid: string | 22;
pid = "22";

//Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "UP",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

//Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}

//Void
function log(message: string | number): void {
  console.log(message);
}

//Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number; //optional
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => {
  return x + y;
};
const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}


// Classes
class Person implements PersonInterface{
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const chryz = new Person(12, 'chryzcode')
const john = new Person(17, 'John Doe')


// SubClasses
class Employee extends Person {
  position: string

  constructor(id:number, name:string, position:string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Chryz', 'Developer')


// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let stringArray = getArray<string>(["chryz", "John", "Peter"]);