let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(3));

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));

//eliminar los espacios de un string 
let hello = '     hello world'
console.log(hello)
console.log(hello.trimStart());

let hello2 = 'hello world      ';
console.log(hello2);
console.log(hello2.trimEnd());

// opcional catch

try {

} catch {
    error
}


//front entries
//esto es un arreglo que contiene dos arreglos
let entries = [['name', 'oscar'], ['age', 22]];
///convertimos a un objeto
console.log(Object.fromEntries(entries));


//objeto de tipo simbolo

let mySymbl = 'My symbl';
let symbol = Symbol(mySymbl)
console.log(symbol.description)
