//interface inside the other interface

interface Company{
    name:string,
    location:string,
    regId:number
}

interface CarInterface{
    engineType:string;
    transmission:String
    company:Company
}



function vehicleType(vehicle:CarInterface){
    return `The type of vehicle is ${vehicle.engineType} which is ${vehicle.transmission} variant ${vehicle.company.name}
    manufacured in ${vehicle.company.location} with registraion Id - ${vehicle.company.regId}`
}


console.log( vehicleType({
  engineType:"pertrol",
  transmission:"manual",
  company:{
    name:"Tata",
    location:"new delhi",
    regId:2145778,

  }
}
))
