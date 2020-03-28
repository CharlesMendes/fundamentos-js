// meses começam do zero!
const dataAniversario = new Date(1985, 7, 20)
console.log(dataAniversario)

// começa em 1970
const primeiraDataJS = new Date(0)
console.log(primeiraDataJS.getTime())

const hoje = new Date()
console.log(hoje.toString())
console.log(hoje.toLocaleDateString())
console.log(hoje.toISOString()) //formato global

const dia = hoje.getDate()
hoje.setDate(dia + 5)

hoje.setHours(10, 30, 0)
console.log(hoje)

console.log(`
  Dia: ${hoje.getDate()}
  Mês: ${hoje.getMonth()}
  Ano: ${hoje.getFullYear()}
  Hora: ${hoje.getHours()}
  Minutos: ${hoje.getMinutes()}
  Segundos: ${hoje.getSeconds()}
`)

console.log(
  new Date(2020, 1, 20) > new Date(200, 1, 1)
)