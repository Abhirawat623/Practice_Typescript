//interface inside the other interface
function userDetails(userData) {
    return "The role is ".concat(userData.role, " in ").concat(userData.company, " named ").concat(userData.name, "\n    lives in ").concat(userData.location, " with registraion Id - ").concat(userData.regId);
}
console.log(userDetails({
    name: "abhi",
    location: "haryana",
    regId: 1234,
    company: "apple",
    role: "SDE"
}));
