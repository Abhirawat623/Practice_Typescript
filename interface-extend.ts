//interface inside the other interface

interface MoreDetailsInterface{
    name:string,
    location:string,
    regId:number
}

interface UserInterface extends MoreDetailsInterface{
    company:string;
    role:String
    
}



function userDetails(userData:UserInterface){
    return `The role is ${userData.role} in ${userData.company} named ${userData.name}
    lives in ${userData.location} with registraion Id - ${userData.regId}`
}


console.log( userDetails({
     name:"abhi",
    location:"haryana",
    regId:1234,
    company:"apple",
   role:"SDE"}

))
