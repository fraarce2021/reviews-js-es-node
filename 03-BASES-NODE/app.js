const argv = require('./config/yargs').argv;
var colors = require('colors');
var colorsSafe = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado`, colorsSafe.red(`${archivo}`)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}