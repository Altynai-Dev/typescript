//1.
let a:string = "hi";
let b:number = 555;
let c:boolean = true;

//2.
function calculateArea(radius:number){
    let pi:number = 3.14;
    let area:number;
    return area = pi * Math.pow(radius,2)
}

console.log(calculateArea(4));

function calculateDensity(m:number, v:number){
    let density: number;
    return density=m/v;
}

console.log(calculateDensity(45,5));

//3.
type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    colors: string[]
}

const products: Product[] =[
    {
        id: 1,
        title: "cup",
        description: "ceramic cup",
        price: 250,
        colors: ["white", "black"]
    },
    {
        id: 2,
        title: "plate",
        description: "ceramic plate",
        price: 200,
        colors: ["white", "black", "pink"]
    },
    {
        id: 3,
        title: "teapot",
        description: "ceramic teapot",
        price: 500,
        colors: ["black", "red"]
    }
]

console.log(products);