const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion,
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca com completado o pendiente la tarea'
        },
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion,
    })
    .help()
    .argv;

module.exports = {
    argv
};