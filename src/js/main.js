console.log("Date")

// new Date -> devuelve la fecha actual, mes comienza en 0

console.log(new Date()) 
// se le pueden pasar parametros: año, mes, dia
// como string: "mes/dia/año" y el mes comienza en 1 normal

// Métodos: 

const fecha = new Date()

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

console.log(fechaUsuario)

// Operaciones con fechas
