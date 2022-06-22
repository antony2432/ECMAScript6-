//operador de reposo
const obj = {
    name: 'Antony',
    age: 22,
    country: 'PE'
}

let { name, ...all } = obj;
console.log(name, all);

//utilidades de propagacion  
//como anidar dos objetos

const obj2 = {
    name: 'Antony',
    age: '32'
}
const abj3 = {
    ...obj2,
    country: 'PE'
}

console.log(abj3);


// podemos saber cuando a terminado una promesa

const helllWord = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello Worls'), 3000)
            : reject(new Error('Test Error'))
    });
};

helllWord()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

//rejects
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);