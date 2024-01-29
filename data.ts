// const user=[
//     {
//         name: "abhishek",
//         age: 24,
//         location: "Delhi NCR"
//     }
// ] 
//handling ojects in ts


function intro(user:{
    name: string;
    age:number;
    location:string
}): string{

return `The user is ${user.name} who is ${user.age} yrs old lives in ${user.location}`
}

const message = intro( {
    name:"abhishek",
    age:24,
    location:"Delhi NCR"
})
console.log(message);