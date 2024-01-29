//classes and interface --used to combine data , functions can aslo be bind in the interface

//interface for the class, function is also added
interface VehicleInterface{
    model:string;
    owner:string;
    duration:number
    message():string
}
//class for above interface

class Vehicle implements VehicleInterface{
    model: string;
    owner:string;
    duration: number;//message does't fit here
//constructer is needed for the class
    constructor(model:string,owner:string,duration:number){
    this.model=model;
    this.owner=owner;
    this.duration= duration
    }
//message should be outside the constructor
    message(){
       return `hey ${this.owner} , your vehicle of model ${this.model} is ${this.duration} days old`
    }
}

const vehicleObject = new Vehicle("nexon","abhishek",55);
console.log(vehicleObject)
console.log(vehicleObject.message())
