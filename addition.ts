//npm install typescript --save-devts
//npx tsc --init
//npx tsc file.ts

function add(x:number, y:number):number
//type of functions and variables must be declared

{
    return x+y;
}
const result = add(25,55);
console.log(result);