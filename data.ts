// const user=[
//     {
//         name: "abhishek",
//         age: 24,
//         location: "Delhi NCR"
//     }
// ] 

//1-- Adding data using TS

// function intro(user:{
//     name: string;
//     age:number;
//     location:string
// }): string{

// return `The user is ${user.name} who is ${user.age} yrs old lives in ${user.location}`
// }

// const message = intro( {
//     name:"abhishek",
//     age:24,
//     location:"Delhi NCR"
// })
// console.log(message);


//2-- Interfaces in TS
interface User //interface should be in Caps letter
{
    name :string;
    age:number;
    location:string
}

function intro(user:User): string{

return `The user is ${user.name} who is ${user.age} yrs old lives in ${user.location}`
}

const message = intro( {
    name:"abhishek",
    age:24,
    location:"Delhi NCR"
})
console.log(message);