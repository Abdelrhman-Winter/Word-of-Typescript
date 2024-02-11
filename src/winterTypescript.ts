/*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.

  - Why We Use It ?
  - Is It Mandatory ?
  - What Happen If We Didnt Use It ?
*/

let theName = "Elzero";
let theAge: number = 40;
let hire: boolean = true;
let all: any = "Elzero Web School";
let allVars; // Any

theName = "Osama";
all = 100;

function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(10, 20));
console.log(typeof add(10, 20));

function add(n1, n2) {
  return n1 + n2;
}

console.log(add(10, "20"));
console.log(typeof add(10, "20"));
//------------------------------------------------------------
/*
  Type Annotations With Arrays
*/

let all: string | number | boolean = "Osama";

all = "A";
all = 100;
all = true;

let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}
//--------------------------------------------------------------------
/*
  Type Annotations With Multidimensional Arrays
*/

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];


//--------------------------------------------------------------------

/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/

let showMsg = true;

function showDetails(name: string, age: number, salary: number) : string {
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
  }
  return `No Data To Show`;
}

console.log(showDetails("Osama", 40, 5000));

//--------------------------------------------------------------------

/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

function showData(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData("Osama", 40, "Egypt"));

//--------------------------------------------------------------------
/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/

function addAll(...nums: number[]) : number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  // nums.forEach((num) => result += num);
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));
//--------------------------------------------------------------------
/*
  Function
  - Anonymous Function
  - Arrow Function
*/

const add = function(num1: number, num2: number) : number {
  return num1 + num2;
}

console.log(add(10, 20));

const addWithArrow = (num1: number, num2: number) : number => num1 + num2;

console.log(addWithArrow(10, 20));

//--------------------------------------------------------------------

/*
  Function
  - Anonymous Function
  - Arrow Function
*/

const add = function(num1: number, num2: number) : number {
  return num1 + num2;
}

console.log(add(10, 20));

const addWithArrow = (num1: number, num2: number) : number => num1 + num2;

console.log(addWithArrow(10, 20));

//--------------------------------------------------------------------

/*
  Data Types
  - Type Alias
*/

type st = string;
let theName: st = "Elzero";
theName = "Osama";

type standnum = string | number;
let all: standnum = 10;
all = 100;
all = "Osama";

//--------------------------------------------------------------------

/*
  Data Types
  - Advanced Type Alias
*/

type Buttons = {
  up: string,
  right: string,
  down: string,
  left: string
}

type Last = Buttons & {
  x: boolean
}

function getActions(btns: Last) {
  console.log(`Action For Button Up Is ${btns.up}`);
  console.log(`Action For Button Right Is ${btns.right}`);
  console.log(`Action For Button Down Is ${btns.down}`);
  console.log(`Action For Button Left Is ${btns.left}`);
}

getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });

//--------------------------------------------------------------------

/*
  Data Types
  - Literal Types
*/

type nums = 0 | 1 | -1;

function compare(num1: number, num2: number) : nums {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1

let myNumber: nums = 1;

//--------------------------------------------------------------------
/*
  Data Types
  - Tuple
  --- Is Another Sort Of Array Type
  --- We knows Exactly How Many Elements It Contains
  --- We Knows Which Types It Contains At Specific Positions
*/

let article: readonly [number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false];
// article.push(100);
console.log(article);

const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);

//--------------------------------------------------------------------

/*
  Data Types
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/

function logging(msg: string) : void {
  console.log(msg);
  return;
}

console.log(logging("Iam A Message"));
console.log("Test");

const fail = (msg: string) => {
  throw new Error(msg);
  // return 10;
}

function alwaysLog(name: string) : never {
  while(true) {
    console.log(name);
  }
}

alwaysLog("Osama");
// console.log("Test");

//--------------------------------------------------------------------
/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/

const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

enum Level {
  Kids = 15,
  Easy = 9,
  Medium = 6,
  Hard = 3
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
}
//--------------------------------------------------------------------

/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/

function getHardSeconds() : number {
  return 3;
}

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15
}

enum Level {
  Kid = Kids.Ten,
  Easy = 9,
  Medium = Easy - 3,
  Hard = getHardSeconds()
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}
//--------------------------------------------------------------------

/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let myImg = document.getElementById("my-img") as HTMLImageElement;
let myImg = <HTMLImageElement> document.getElementById("my-img");
console.log(myImg.src);

let data: any = 1000;
console.log((data as string).repeat(3));

//--------------------------------------------------------------------


/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

type A = {
  one: string,
  two: number,
  three: boolean
}

type B = A & {
  four: number
}

type C = {
  five: boolean
}

type mix = A & C;

function getActions(btns: mix) {
  console.log(`Hello ${btns.one}`);
  console.log(`Hello ${btns.two}`);
  console.log(`Hello ${btns.three}`);
  console.log(`Hello ${btns.five}`);
}

getActions({ one: "String", two: 100, three: true, five: true });

//--------------------------------------------------------------------
/*
  Type Annotations With Object
*/

let myObject: {
  readonly username: string,
  id: number,
  hire?: boolean,
  skills: {
    one: string,
    two: string
  }
} = {
  username: "Elzero",
  id: 100,
  hire: true,
  skills: {
    one: "HTML",
    two: "CSS"
  }
};

// myObject.username = "Osama";
myObject.id = 101;
myObject.hire = false;

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);

const user: {
  username: string,
 age: number|string,
 website?: string,
 skills: {
   frontEnd: string[],
   backEnd: (string|Number)[]
 }
} = {
 username: "Elzero",
 age: 40,
 website: "Elzero.org",
 skills: {
   frontEnd: ["HTML", "CSS", "JS"],
   backEnd: ["PHP", "Python"]
 }
}

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);
console.log(user);

//--------------------------------------------------------------------
/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

interface User {
  id?: number,
  readonly username: string,
  country: string
}

let user: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt"
}

user.country = "Syria";

console.log(user);

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "Osama", country: "KSA" });

//--------------------------------------------------------------------

/*
  Interface
  - Interface Method And Parameters
*/

interface User {
  id: number;
  username: string;
  country: string;
  sayHello() : string;
  sayWelcome: () => string;
  getDouble(num: number) : number;
}

let user: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  sayHello() {
    return `Hello ${this.username}`;
  },
  sayWelcome: () => {
    return `Welcome ${user.username}`;
  },
  getDouble(n) {
    return n * 2;
  }
}

console.log(user.id);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(100));

//--------------------------------------------------------------------

/*
  Interface
  - ReOpen The Interface And Use Cases
*/

// Homepage
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page
interface Settings {
  sidebar: boolean;
}

// Contact Page
interface Settings {
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}

//--------------------------------------------------------------------

/*
  Interface
  - Extending Interfaces
*/

interface User {
  id: number;
  username: string;
  country: string;
}

interface Moderator {
  role: string | number;
}

interface Admin extends User,Moderator {
  protect?: boolean;
}

let user: Admin = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  role: "Mod",
  protect: true
}

console.log(user.id);

//--------------------------------------------------------------------
/*
  Interface
  - Interface vs Type Aliases
  - Take A Look On HTMLElement Interface
*/

let el = document.getElementById("id") as HTMLElement;

// Homepage
type Settings {
  readonly theme: boolean;
  font: string;
  sidebar: boolean;
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}

//--------------------------------------------------------------------
/*
  Type Annotations With Class
*/

class User {
  u: string;
  s: number;
  msg: () => string;
  constructor(username: string, salary: number) {
    this.u = username;
    this.s = salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
  }
  sayMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User("Elzero", 6000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());
//--------------------------------------------------------------------

/*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

class User {
  msg: () => string;
  constructor(private username: string, protected salary: number,public readonly address: string) {
    this.msg = function () {
      return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this.username} Your Salary Is ${this.salary}`;
  }
}

let userOne = new User("Elzero", 6000, "Cairo");

// console.log(userOne.username);
// console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());
//--------------------------------------------------------------------

/*
  Class
  - Get And Set Accessors
*/

class User {

  public get username(): string {
    return this._username;
  } //U can get this get by click right click on (property in the constructor) and select (refactor...) then genereat get and set accseros 
  public set username(value: string) {
    this._username = value;
  } //U can get this get by click right click on (property in the constructor) and select (refactor...) then genereat get and set accseros 
  msg: () => string;
  constructor(private _username: string, public salary: number, public readonly address: string) {
    this.msg = function () {
      return `Hello ${this._username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this._username} Your Salary Is ${this.salary}`;
  }
  // get username() : string {
  //   return this._username;
  // }
  // set username(value: string) {
  //   this._username = value;
  // }
}

let userOne = new User("Elzero", 6000, "Cairo");

console.log(userOne.username);
userOne.username = "Ahmed";
console.log(userOne.username);
console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());
//--------------------------------------------------------------------
/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/

class User {

  private static _created: number = 0;//U can get this get by click right click on (property in the constructor) and select (refactor...) then genereat get and set accseros 

  public static get created(): number {
    return User._created;
  }//U can get this get by click right click on (property in the constructor) and select (refactor...) then genereat get and set accseros 
  public static set created(value: number) {
    User._created = value;
  }//U can get this get by click right click on (property in the constructor) and select (refactor...) then genereat get and set accseros 

  static getCount() : void {
    console.log(`${this.created} Objects Created`);
  }
  constructor(public username: string) {
    User.created++;
  }
}

let u1 = new User("Elzero");
let u2 = new User("Web");
let u3 = new User("School");
// console.log(User.created);
User.getCount();

//--------------------------------------------------------------------
/*
  Class
  - Implement Interface
*/

interface Settings {
  theme: boolean;
  font: string;
  save(): void;
}

class User implements Settings {
  constructor(public username: string, public theme: boolean, public font: string) {}
  save(): void {
    console.log(`Saved`);
  }
  update(): void {
    console.log(`Updated`);
  }
}

let userOne = new User("Elzero", true, "Open Sans");

console.log(userOne.username);
console.log(userOne.font);

userOne.save();
userOne.update();
//--------------------------------------------------------------------

/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/

abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime() : void;
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Pizza Is 1 Hour`);
  }
}

class Burger extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Burger Is Half Hour`);
  }
}

let pizzaOne = new Pizza("Awesome Pizza", 100);

console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();

//--------------------------------------------------------------------

/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/

class Player {
  constructor(public name: string) {}
  attack() : void {
    console.log("Attacking Now");
  }
}

class Amazon extends Player {
  constructor(name: string, public spears: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("Attacking With Spear");
    this.spears -= 1;
  }
}

class Barbarian extends Player {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("Attacking With Axe");
    this.axeDurability -= 1;
  }
}

let barOne = new Barbarian("Elzero", 100);

console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);

//--------------------------------------------------------------------
/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/

function returnNumber(val: number) : number {
  return val;
}
function returnString(val: string) : string {
  return val;
}
function returnBoolean(val: boolean) : boolean {
  return val;
}

console.log(returnNumber(100));
console.log(returnString("Elzero"));
console.log(returnBoolean(true));

function returnType<T>(val: T) : T {
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("Elzero"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4]));

//--------------------------------------------------------------------

/*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/

function returnType<T>(val: T): T {
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("Elzero"));

const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>("Elzero"));

function testType<T>(val: T): string {
  return `The Value Is ${val} And Type Is ${typeof val}`;
}

console.log(testType<number>(100));
console.log(testType<string>("Elzero"));

function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
  return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Osama", 100));
console.log(multipleTypes<string, boolean>("Elzero", true));

//--------------------------------------------------------------------

/*
  Generics
  - Classes
*/

class User<T = string> {
  constructor(public value: T) {}
  show(msg: T) : void {
    console.log(`${msg} - ${this.value}`);
  }
}

let userOne = new User<string>("Elzero");
console.log(userOne.value);
userOne.show("Message");

let userTwo = new User<number | string>(100);
console.log(userTwo.value);
userTwo.show("Message");

//--------------------------------------------------------------------
/*
  Generics
  - Classes And Interfaces
*/

interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

class Collection<T> {
  public data: T[] = [];
  add(item: T) : void {
    this.data.push(item);
  }
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);

//--------------------------------------------------------------------
/*
Optional Generic Type

function with two optional generic type parameters, T1 and T2. We've also provided default types of any,
which means you can call the function without specifying the generic types,
and TypeScript will infer the types based on the arguments you provide.

You can use the function with one, both, or no arguments. TypeScript will infer or default the generic types accordingly.
If you pass specific types as arguments, TypeScript will infer those types for T1 and T2.

*/ 

function showTypes<T=any,T2=any,T3=any>(val1?:T,val2?:T2,val3?:T3):string{
  return `${val1||"Nothing"}-${val2||"Nothing"}-${val3||"Nothing"}`
}


console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true