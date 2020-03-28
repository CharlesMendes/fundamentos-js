let salarioDoAmigo = 1000
let meuSalario = "2999.14"
let meuSalarioCorrigido = Number(meuSalario)

console.log(salarioDoAmigo + meuSalario)

//typeof = entender o tipo da variavel
console.log(
  typeof (salarioDoAmigo),
  salarioDoAmigo
)

console.log(
  typeof (meuSalario),
  meuSalario
)

console.log(salarioDoAmigo + meuSalarioCorrigido)

console.log(
  isNaN(meuSalario)
)

let minhaString = 'Charles'
let minhaOutraString = 'Mendes'
let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString}. Teste OK!`

console.log(minhaStringComVariaveis)