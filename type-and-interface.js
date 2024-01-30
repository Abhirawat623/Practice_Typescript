;
;
var shapeArea = function (area) {
    return "radius-".concat(area.radius, "cm breadth-").concat(area.breadth, "cm length-").concat(area.length, "cm side-").concat(area.side, "cm");
};
console.log(shapeArea({
    radius: 54,
    side: 54,
    length: 12,
    breadth: 10
}));
