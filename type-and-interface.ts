interface Circle{
    radius: number
};

interface Sqaure{
    side:number
};

interface Rectangle{
    length:number;
    breadth:number
}

//type is used to put condtion for the object
type Shape =Rectangle & Sqaure & Circle;

const shapeArea=(area:Shape):string=>{
return `radius-${area.radius}cm breadth-${area.breadth}cm length-${area.length}cm side-${area.side}cm`
}

console.log(shapeArea({
    radius:54,
    side:54,
    length:12,
    breadth:10
}))