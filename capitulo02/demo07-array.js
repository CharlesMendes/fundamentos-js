const minhaLista = []
const minhaListaDeTarefas = [
  'mandar e-mail',
  'colocar comida para o dog',
  'limpar o quarto'
]

console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[4])
console.log(minhaListaDeTarefas.length)

//adicionar item
minhaListaDeTarefas.push('salvar o mundo')
console.log(minhaListaDeTarefas)

//remover item
minhaListaDeTarefas.pop()

//remover primeiro da lista
const primeiro = minhaListaDeTarefas.shift()
console.log(primeiro, minhaListaDeTarefas)

//remover um item a partir do indice
console.log(minhaListaDeTarefas[1])
minhaListaDeTarefas.splice(1, 1) //remove do indice 1, apenas 1 item
console.log(minhaListaDeTarefas)

const itens = [1, 'computador', 0.22]

//verificar o tipo do array
console.log(typeof (itens))
console.log(Array.isArray(itens))

const numeros = [3, 2, 1, 0]
console.log(numeros.sort())

const marvel = ['Hulkbuster', 'Ironman', 'Capitão America', 'Thor', 'Deadpool']
console.log(marvel.sort())

const novo = marvel.concat('Gavião Arqueiro')
console.log(novo.sort())

//juntar arrays em uma string
console.log(novo.join(';'))

//verificar indice do item, senão encontrar, retorna -1, então é false, se for convertido
const index = novo.indexOf('Hulkbuster')
console.log(index)
console.log(novo[index])