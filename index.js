//multi linea antes de ecmascript 6
let lorem = "Qui consequatur. commmodi Ipsum vel duis yet minima \n"
+ "otra frace epica";
//multi linea ahora 
let lous = `otra frace epica que necesitamos
ahora es otra frace epica
`;

console.log(lorem);
console.log(lous);



//destructuracion de elementos
//antes
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'Peru'
}

console.log(person.name, person.age, person.country)
//ecmaScrip6+
let {name, age, country} = person;
console.log(name,age,country);

//operador de propagacion - unir en nuevo elemento

let team1 = ['oscar', 'Julian', 'Ricardo'];
let tema2 = ['valeria', 'yesica', 'camila']

let education = ['David', ...team1, ...tema2];

console.log(education);

//ya no se usa var
// el var se una variable que se puede llamar de forma global
// con let solo vive en el scope
 {
    var globalvar = 'global var'
 }

 {
    let globalLet = 'Global let'
    console.log(globalLet);
 }
 
 console.log(globalvar);

// con const es una variable que no puedo reasignar , ya que el sistema no la va a realizar
 const a = 'b';
 a = 'a';
 console.log(a)


 //creacion de objetos antes
 let name2 = 'Antony';
 let age2 = 22;

 obj = {name2 : name2, age2 : age2};

// con ecmaScrip6+
 objs2 = {name2, age2};
 console.log(obj);
 console.log(objs2);


 // arrowfuctions 
 const names = [
    {name: 'Antony', age : 22},
    {name: 'Yesica', age: 27},
]
// como se realizaba antes
let listOfNames = names.map(function (item) {
    console.log(names.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    console.log()// se escribe el codigo
}

const listOfNames4 = name => {
    console.log()// se escribe el codigo
}

const square = num => num * num;

//promesas - se trabaja el asincronismo

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey1');
        } else {
            reject('Ups!!');
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

//clases

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    multi(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA * this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));
console.log(calc.multi(2,4));


// modulos

import { hello } from './module';

hello();

// generator es una funcion especial que retorna una serie de valores de una serie de algoritmo

function* helloWorld() {
    if(true) {
        yield 'hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);