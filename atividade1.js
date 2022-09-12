const prompt = require('prompt-sync')();

const ageText = prompt('Quantos anos você já viveu? ');
const age = Number(ageText);

const monthText = prompt('Quantos meses você já viveu? ');
const month = Number(monthText);

const daysText = prompt('Quantos dias você já viveu? ');
const days = Number(daysText);

const result = ((age * 365) + (month *30) + days)

console.log(`Você já viveu ${result} dias`)