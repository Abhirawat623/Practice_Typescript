//used for constants... if we want a variable to have specific set of values
//we can assign numeric set to the variable 
// "mammals", "reptiles","fish","amphibian"

enum Species{
mammals,
    reptiles ,
    fish ,
    amphibian 
}

function specificType(extinct:boolean,type:Species){
return `extinct - ${extinct} -  type: ${type}` 
   
}

console.log(specificType(true,
    Species.reptiles))