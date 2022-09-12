const prompt = require('prompt-sync')();

const dayText = prompt('Digite a sua idade em dias: ');
const day = Number(dayText);

//Math.floor é para arredondar



const age = Math.floor(day/365)
const month = Math.floor((day%365) /30)
const days = Math.floor((day%365) % 30)

console.log(`Você viveu ${age} anos`)
console.log(`Você viveu ${month} meses`)
console.log(`Você viveu ${days} dias`)