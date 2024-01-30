//type is used as general format
// it is same as interface but it cant be extended like interface
//interface and type can be stored within
type watchInterface={
    model:string;
    price:number;
    company:string;
    manufacturer:string
}

const watchData =(watch:watchInterface):string=>{
return `The ${watch.model} of Rs. ${watch.price} manufactured from ${watch.manufacturer} by ${watch.company} `
}

const data= watchData({
    model:"Entizer",
    price:8564,
    company:"Casio",
    manufacturer:"India"
});

console.log(data);