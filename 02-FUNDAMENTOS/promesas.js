let empleados = [{
        id: 1,
        nombre: 'Luffy',
    },
    {
        id: 2,
        nombre: 'Zoro',
    },
    {
        id: 3,
        nombre: 'Ussop',
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    return new Promise((resolve, reject) => {

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });

}

getEmpleado(1)
    .then(empleado => console.log(empleado))
    .catch(e => console.log(e));