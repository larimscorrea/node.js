const fs = require('fs');

const x = 0;

// Callback
// Problema: outra função lenta.

fs.writeFile('teste.txt', `${s}`, () => {
    console.log(x);
});

// Callback de mais de um nível, se torna necessário as promisses.
fs.writeFile('teste.txt', `${s}`, () => {
    console.log(x);
    fs.writeFile('teste2.txt', 'teste', () => {
        console.log(x);
    })
});

// Promisse = then
// O segundo then é lido somente após o primeiro. 
// Em caso de erro no then, catch.
fs.writeFile('teste.txt', `${s}`) 
    .then(() => {
        return fs.writeFile('teste2.txt', 'x');
    })
    .then(() => {

    })
    .catch((err) =>{
        console.log(err);
    }) 


async function Assinc() {
    
    try {
        const teste = await fs.writeFile('teste3.txt', `${x}`);
        await fs.writeFile('teste4.txt', 'x');
    } catch(err) {
        console.log(err);
    }
}