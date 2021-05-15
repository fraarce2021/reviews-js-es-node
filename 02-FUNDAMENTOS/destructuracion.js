let deadpoop = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getData: function() {
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    }
};

// let nombre = deadpoop.nombre;
// let apellido = deadpoop.apellido;
// let poder = deadpoop.poder;

let { nombre: primerNombre, apellido, poder } = deadpoop;
console.log(primerNombre, apellido, poder);