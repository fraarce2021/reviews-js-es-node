// function sumar(a, b) {
//     return a + b;
// }

// console.log(sumar(10, 20));

// let sumar = (a,b) => {
//     return a+b;
// }

// let sumar = (a,b) => a+b;

// function saludar() {
//     return 'Hola Mugiwaras';
// }

// console.log(saludar());

const saludar = () => 'Hola Mugiwaras';

console.log(saludar());

let deadpoop = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getData() {
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    }
};

console.log(deadpoop.getData());