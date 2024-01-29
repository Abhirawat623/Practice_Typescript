// const user=[
//     {
//         name: "abhishek",
//         age: 24,
//         location: "Delhi NCR"
//     }
// ] 
//handling ojects in ts
function intro(user) {
    return "The user is ".concat(user.name, " who is ").concat(user.age, " yrs old lives in ").concat(user.location);
}
var message = intro({
    name: "abhishek",
    age: 24,
    location: "Delhi NCR"
});
console.log(message);
