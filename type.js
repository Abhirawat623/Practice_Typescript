var watchData = function (watch) {
    return "The ".concat(watch.model, " of Rs. ").concat(watch.price, " manufactured from ").concat(watch.manufacturer, " by ").concat(watch.company, " ");
};
var data = watchData({
    model: "Entizer",
    price: 8564,
    company: "Casio",
    manufacturer: "India"
});
console.log(data);
