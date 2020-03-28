/**
 * FALSO              VERDADEIRO
 * --------           -----------
 *  false               true
 *  0                   1
 *  []                  -1
 *  ""                  0.5
 *  ''                  "0"
 *  null
 *  undefined
 *  NaN
 */

const podeDirigir = false
if (podeDirigir) {
  console.log('Ok, pode dirigir')
}

const saldoEmConta = 0
if (!saldoEmConta) {
  console.log('não tem saldo!')
}

const boolComString = 'Charles'
//vai transformar o valor em true ou false 
//de acordo com a tabela comentada acima
console.log('boolComString', !!boolComString)

console.log('negação', !boolComString)

console.log('negação + forçar bool', !(!!boolComString))