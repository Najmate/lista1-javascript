const prompt = require('prompt-sync')();

// A,B,C,D,E,F,x,y,dX,dY

const aText = prompt('Insira o valor de A: ')
const a = Number(aText)

const bText = prompt('Insira o valor de B: ')
const b = Number(bText)

const cText = prompt('Insira o valor de C: ')
const c = Number(cText)

const dText = prompt('Insira o valor de D: ')
const d = Number(dText)

const eText = prompt('Insira o valor de E: ')
const e = Number(eText)

const fText = prompt('Insira o valor de F: ')
const f = Number(fText)

const x = (c*e) - (b*f) / (a*e) - (b*d);
const y = (a*f) - (c*d) / (a*e) - (b*d);

console.log(`O valor de x é: ${x}, o valor de y é: ${y}`)
