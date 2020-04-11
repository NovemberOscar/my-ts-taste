// Boolean

let isDone: boolean = false;

// Number

let decimal: number = 6;
let hex: number = 0xff;
let binary: number = 0b1111;
let octal: number = 0o744;

// String

let color: string = "blue";
color = "red";

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}

I'll be ${age + 1} years old next month`;

// Array

let ls: number[] = [1, 2, 3];
let ls2: Array<number> = [1, 2, 3];

// Tuple

let x: [string, number];
x = ["hello", 10]
// x = [10, "hello"] // Error

console.log(x[0].substring(1)); // OK
// console.log(x[1].substring(1)); // Error

// Enum

enum Color { Red, Green, Blue }
let c: Color = Color.Green

// Any

let notSure: any = 4;
notSure = "maybe a string instead :)";

// Void

function f(): void {
    return;
}

let unUsable: void = undefined;
unUsable = null;

// Null & Undefined

let u: undefined = undefined;
let n: null = null;

// Never

function error(message: string): never {
    throw new Error(message);
}

// object

declare function create(o: object | null): void;

create({ prop: 0 });
create(null);
// create(42); // Error

// Type Assertions

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
