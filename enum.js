//used for constants... if we want a variable to have specific set of values
//we can assign numeric set to the variable 
// "mammals", "reptiles","fish","amphibian"
var Species;
(function (Species) {
    Species[Species["mammals"] = 0] = "mammals";
    Species[Species["reptiles"] = 1] = "reptiles";
    Species[Species["fish"] = 2] = "fish";
    Species[Species["amphibian"] = 3] = "amphibian";
})(Species || (Species = {}));
function specificType(extinct, type) {
    return "extinct - ".concat(extinct, " -  type: ").concat(type);
}
console.log(specificType(true, Species.reptiles));
