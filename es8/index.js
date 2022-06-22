const data = {
    frontend: 'Antony',
    backend: 'Z',
    desing: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)

const data2 = {
    frontend: 'Antony',
    backend: 'Z',
    desing: 'Ana',
}

const result2 = Object.values(data2);
console.log(result2.length);


//padding

const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '----------'))

//async await

const helloWord = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello Word', 3000))
            : reject(new Error('Test error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWord();
    console.log(hello);
}

helloAsync();

// como se ejecuta de manera correcta 

const anothherFuction = async () => {
    try {
         const hello = await helloWord();
         console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anothherFuction();