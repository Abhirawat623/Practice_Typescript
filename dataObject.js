//classes and interface --used to combine data , functions can aslo be bind in the interface
//class for above interface
var Vehicle = /** @class */ (function () {
    //constructer is needed for the class
    function Vehicle(model, owner, duration) {
        this.model = model;
        this.owner = owner;
        this.duration = duration;
    }
    //message should be outside the constructor
    Vehicle.prototype.message = function () {
        return "hey ".concat(this.owner, " , your vehicle of model ").concat(this.model, " is ").concat(this.duration, " days old");
    };
    return Vehicle;
}());
var vehicleObject = new Vehicle("nexon", "abhishek", 55);
console.log(vehicleObject);
console.log(vehicleObject.message());
