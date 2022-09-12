const prompt = require('prompt-sync')();

const note1 = prompt('Entre com a primeira nota: ')
const note2 = prompt('Entre com a segunda nota: ')
const note3 = prompt('Entre com a terceira nota: ')

const n1 = Number(note1)
const n2 = Number(note2)
const n3 = Number(note3)

const avarege = ((n1*2) + (n2*3) + (n3*5)) /10;

console.log (`A média das notas é: ${avarege}`)