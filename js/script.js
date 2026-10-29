/*

1. Crear un objeto Persona
Enunciado:
Crea un objeto persona que tenga las propiedades: nombre, edad, y ciudad. Luego, imprime cada propiedad por separado en la consola.
*/
const persona = {
    nombre: 'Andres',
    edad: 25,
    ciudad: 'vitoria'
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

/*

2. Modificar propiedades
Enunciado:
A partir del objeto persona anterior, cambia el valor de la propiedad ciudad y añade una nueva propiedad llamada profesión. Luego, imprime el objeto actualizado en la consola.
*/
persona.ciudad = 'Bilbao'
persona.profesion = 'estudiante'

console.log('\nOBJETO MODIFICADO \n');

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);
console.log(persona.profesion);

/*
3. Objeto Libro
Enunciado:
Crea un objeto llamado libro con las propiedades titulo, autor, y añoPublicacion. Añade un método llamado resumen que devuelva una cadena con un resumen del libro. Ejemplo de salida: "El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967."
*/
const libro = {
    titulo: 'Cien años de soledad', 
    autor:'Gabriel García Márquez', 
    anoPublicacion: 1967,
    resumen() {
        return `El libro '${this.titulo}' fue escrito por ${this.autor} en ${this.anoPublicacion}`;
    } 
    // ojo como hay this no usar funcion flecha. Tambien podemos:
    /*
    resumen: function () {
        return `El libro '${this.titulo}' fue escrito por ${this.autor} en ${this.anoPublicacion}`
    }
    */
}

console.log(libro.resumen());

/*
4. Array de objetos
Enunciado:
Crea un array llamado estudiantes que contenga tres objetos. Cada objeto debe representar un estudiante con las propiedades: nombre, edad, y notaFinal. Luego, recorre el array e imprime el nombre y la nota final de cada estudiante.
*/
const estudiantes =[
    {
        nombre:'Pepe', 
        edad:25,
        notaFinal:9
    },
    {
        nombre:'Ana', 
        edad:23,
        notaFinal:8
    },
    {
        nombre:'Juan', 
        edad:20,
        notaFinal:7
    }
] 

// recorremos con for of, muy claro y MAS EFICIENTE QUE FOREACH
for (let estudiante of estudiantes){
    console.log(estudiante.nombre + ' ha sacado un nota de : ' + estudiante.notaFinal + '\n');
}

// recorremos con foreach
estudiantes.forEach(estudiante => {
     console.log(estudiante.nombre + ' ha sacado un nota de : ' + estudiante.notaFinal + '\n');
});

// Vamos a recorrer el array con for y los objetos con for in sacando todos los datos
for (let estudiante of estudiantes){
    console.log('Datos estudiante: ');
   for (let key in estudiante){
    console.log(key + ': ' + estudiante[key]);
   }
}

/*
5. Método para calcular la edad
Enunciado:
Crea un objeto persona con las propiedades nombre, anioNacimiento, y un método llamado calcularEdad que devuelva la edad actual de la persona basado en el año de nacimiento.
*/

const persona2 = {
    nombre: 'Pepe',
    anioNacimiento: 2000,
    calcularEdad() {
        return (new Date().getFullYear()) - this.anioNacimiento
    }
}

console.log(persona2.calcularEdad());
/*
6. Objeto Coche
Enunciado:
Crea un objeto llamado coche con las propiedades marca, modelo, año y velocidadActual. Añade un método acelerar que incremente la velocidad actual en 10 unidades y otro método frenar que disminuya la velocidad actual en 10 unidades. Asegúrate de que la velocidad no sea negativa.
*/

const coche ={
    marca: 'Seat', 
    modelo: 'Ateca', 
    ano: 200, 
    velocidadActual: 0,

    acelerar() {
        this.velocidadActual +=10
    },
    frenar(){
        if (this.velocidadActual <= 0){
            this.velocidadActual =0        
        } else {
            this.velocidadActual -=10
        }       
    } 
}

coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log('Velocidad: ' + coche.velocidadActual);
coche.frenar();
coche.frenar();
console.log('Velocidad: ' + coche.velocidadActual);
coche.frenar();
console.log('Velocidad: ' + coche.velocidadActual);
coche.frenar();
console.log('Velocidad: ' + coche.velocidadActual);

/*
7. Recorrer un objeto
Enunciado:
Crea un objeto producto con las propiedades nombre, precio, cantidad. Usa un ciclo for...in para imprimir todas las propiedades y sus valores.
*/
const producto = {
    nombre: 'Teclado',
    precio: 45,
    cantidad: 2
};

for (let key in producto){
    console.log(key + ': ' + producto[key]);
}

/*
8. Contar propiedades
Enunciado:
Crea un objeto animal con al menos cinco propiedades. Luego, escribe una función que cuente y devuelva el número de propiedades que tiene el objeto.
*/
const animal = {
    nombre: 'León',
    especie: 'Mamífero',
    edad: 5,
    peso: 190,
    habitat: 'Sabana',
};
// almacena las keys en un array luego con length podemos saber cuantos hay
function contarPropiedades(objeto) {
    return Object.keys(objeto).length;
}

console.log(contarPropiedades(animal));

/*
9. Objeto dentro de otro objeto
Enunciado:
Crea un objeto empresa que tenga las propiedades nombre y direccion. La propiedad direccion debe ser otro objeto con calle, ciudad, y codigoPostal. Luego, accede a las propiedades del objeto anidado e imprímelas.
*/
const empresa = {
    nombre: 'Web S.L.',
    direccion: {
        calle: 'Calle Mayor, 15',
        ciudad: 'Vitoria-Gasteiz',
        codigoPostal: '01001'
    }
};

for (let key in empresa.direccion){
    console.log(key + ': ' + empresa.direccion[key]);
}

/*
10. Añadir métodos a objetos
Enunciado:
Crea un objeto cuentaBancaria con las propiedades titular, saldo. Añade métodos depositar y retirar que modifiquen el saldo según sea necesario. El método retirar debe asegurarse de que no se pueda retirar más dinero del que hay disponible.
*/
const cuentaBancaria = {
    titular: 'Andrés',
    saldo: 1500,
    mensaje:'',
    retirar (cantidad) {
        if (this.saldo - cantidad <= 0){
            this.mensaje = `Saldo disponible: ${this.saldo} por tanto usted no puede retirar ${cantidad}`;
        } else {
            this.saldo -=cantidad
            this.mensaje ="Su retirada ha sido realizada"
        }       
    },
    depositar(cantidad){
         this.saldo +=cantidad
         this.mensaje ="Su deposito ha sido realizado"
    }
};

cuentaBancaria.depositar(100)
console.log(cuentaBancaria.mensaje);
console.log(cuentaBancaria.saldo);

cuentaBancaria.retirar(1000)
console.log(cuentaBancaria.saldo);
console.log(cuentaBancaria.mensaje);

cuentaBancaria.retirar(1000)
console.log(cuentaBancaria.mensaje);
console.log(cuentaBancaria.saldo);