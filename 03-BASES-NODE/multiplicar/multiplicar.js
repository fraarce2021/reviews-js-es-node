//requireds
const fs = require('fs');
var colors = require('colors');

const listarTabla = (base, limite = 10) => {
    console.log(`================================`.blue);
    console.log(`Tabla de base ${base} y limite ${limite}`.blue);
    console.log(`================================`.blue);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`.green);
    };

}

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor ingresado no es un numero');
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        };
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    });
}

module.exports = { crearArchivo, listarTabla };