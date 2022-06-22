//dinamic import
//vamos a importar un elemento de forma dinamica


const button = document.getElementById('btn');


button.addEventListener("click", async function () {
    const module = await import("./file.js")
    module.hello();
})

// big int

const bigNumber = 9007199254740991n;

const anotherBigNmber = BigInt(9007199254740991)

console.log(bigNumber);
console.log(anotherBigNmber);


//promise All Settled
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

//con promise all es rechazada al momento de que una promesa sea rechazada a comparacion de allSettled
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))


//Global this
console.log(window);
console.log(self);
console.log(frames);
console.log(this); //con blobal this podemos utilizar de manera global 

/////
 console.log(globalThis)