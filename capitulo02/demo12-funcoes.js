function nomeDaFuncao(parametro1) {
  // bloco de codigo
}

function queDiaEHoje() {
  const data = new Date()
  console.log(`Hoje é dia: ${data.getDate()}`)
}

queDiaEHoje()

function soma(valor1, valor2) {
  return valor1 + valor2
}

const idade = 20
tamanho = 30
const resultado = soma(idade, tamanho)
console.log('resultado', resultado)

function multiplicar(valor1, valor2) {
  return valor1 * valor2
}

console.log('resultado multiplicacao', multiplicar(idade, tamanho))

const funcionario1 = {
  nome: 'Hulk',
  desconto: 0.2,
  salarioBruto: 2000,
  salarioLiquido: 0
}

const funcionario2 = {
  nome: 'Capitão América',
  desconto: 0.1,
  salarioBruto: 2000,
  salarioLiquido: 0
}

const descontoFuncionario1 = funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto)
const descontoFuncionario2 = funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto)

console.log(`
  funcionario 1: ${descontoFuncionario1}, 
  funcionario 2: ${descontoFuncionario2}
`)

function calcularDesconto(salarioBruto, desconto) {
  return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(funcionario1.salarioBruto, funcionario1.desconto)
funcionario2.salarioLiquido = calcularDesconto(funcionario2.salarioBruto, funcionario2.desconto)

console.log(`
  ${funcionario1.nome} = ${funcionario1.salarioLiquido},
  ${funcionario2.nome} = ${funcionario2.salarioLiquido}
`)