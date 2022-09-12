const prompt = require('prompt-sync')();

const x1Text = prompt('Insira o valor de X1: ')
const x1 = Number(x1Text)

const x2Text = prompt('Insira o valor de X2: ')
const x2 = Number(x2Text)

const y1Text = prompt('Insira o valor de Y1: ')
const y1 = Number(y1Text)

const y2Text = prompt('Insira o valor de Y2: ')
const y2 = Number(y2Text)

const d = Math.sqrt(Math.pow((x1-x2),2) + Math.pow ((y1-y2),2)); 

console.log(`A distância dos pontos P1: ${x1}, ${y1} e P2: ${x2}, ${y2} é de: ${d}`)  


