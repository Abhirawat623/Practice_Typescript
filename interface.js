//interface inside the other interface
function vehicleType(vehicle) {
    return "The type of vehicle is ".concat(vehicle.engineType, " which is ").concat(vehicle.transmission, " variant ").concat(vehicle.company.name, "\n    manufacured in ").concat(vehicle.company.location, " with registraion Id - ").concat(vehicle.company.regId);
}
console.log(vehicleType({
    engineType: "pertrol",
    transmission: "manual",
    company: {
        name: "Tata",
        location: "new delhi",
        regId: 2145778,
    }
}));
