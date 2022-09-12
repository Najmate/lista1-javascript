const prompt = require('prompt-sync')();

const costText = prompt('Qual é o valor de fabricação do carro? ')
const cos = Number(costText)

const percentage = (cos*28)/100
const taxes = (cos*45)/100
const total = (cos + percentage + taxes)

console.log(`O valor do carro para o consumidor será: ${total} `)
