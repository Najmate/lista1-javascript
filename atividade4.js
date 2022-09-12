const prompt = require('prompt-sync')();
// A, B, C, R, S, D
console.log('\nEscreva apenas números positivos e inteiros');

const aText = prompt('Digite o valor de A: ');
const a = Number(aText);

const bText = prompt('Digite o valor de B: ');
const b =  Number(bText);

const cText = prompt('Digite o valor de C: ');
const c = Number(cText);

const r = Math.pow(a+b,2)
const s = Math.pow(b+c,2)
const d = (r+s)/2

console.log(`D: ${d}`)

