import app from './src/app.js';

// Resto do seu código aqui
//Mudei o nome da const para porta. O nome era app.
const porta = 3001;

porta.listen(port, () => {
    console.log(`A porta http://localhost:${port} está sendo ouvida`)
})