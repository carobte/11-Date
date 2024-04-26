console.log("Date")

// new Date -> devuelve la fecha actual, mes comienza en 0

// console.log(new Date()) 
// se le pueden pasar parametros: año, mes, dia
// como string: "mes/dia/año" y el mes comienza en 1 normal

// Métodos: 

/* const fecha = new Date()

const day = fecha.getDate() // numero del mes
const weekDay = fecha.getDay() // 0-6 -> de la semana, domingo es el 0
const month = fecha.getMonth() // 0-11
const fullYear = fecha.getFullYear()
const year = fecha.getYear() // ya no se usa, año de partida 1900
const time = fecha.getTime() // milisegundos desde 1/1/1997 hasta la actualidad

console.log(`day: ${day},
weekDay: ${weekDay},
month: ${month},
fullYear: ${fullYear},
year: ${year}`)


const usuario = prompt("Ingrese una fecha: ", "MM/DD/YYYY")

const fechaUsuario = new Date(usuario)

console.log(fechaUsuario) */

/* // Ejercicio 1 -> Biblioteca


const diasPrestamo = Number(prompt("Ingrese la cantidad de días que prestará el libro"))

const fechaDevolucion = new Date()

fechaDevolucion.setDate(fechaDevolucion.getDate() + diasPrestamo)

console.log(fechaDevolucion) */

/* // Ejercicio 2 -> Edad

const fechaBD = new Date(prompt("Ingrese su fecha de nacimiento", "MM/DD/YYYY"))

const fechaActual = new Date()

const edad = fechaActual.getFullYear() - fechaBD.getFullYear()

const edad2 = (fechaActual - fechaBD) / (1000*60*60*24*365)

console.log(edad) */

/* // Ejercicio 3 -> Cumpleaños

const fechaActual = new Date()

const fechaBD = new Date(prompt("Ingrese su fecha de nacimiento", "MM/DD/YYYY"))

const mesesRestantes = fechaBD.getMonth() - fechaActual.getMonth() 

console.log(`Faltan: ${mesesRestantes} meses para el cumpleaños`)
 */