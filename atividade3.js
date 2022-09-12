const prompt = require('prompt-sync')();

const secondText = prompt('Digite a duração do evento em segundos:')
const secon = Number(secondText)


const hour = Math.floor(secon/3600)
const min = Math.floor((secon%3600) /60)
const seconds = Math.floor((secon%3600) % 60)

console.log(`O evento durou: ${hour} horas, ${min} minutos, ${seconds} segundos`)

