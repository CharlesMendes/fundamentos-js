const heroi = {
  nome: 'Hulkbuster',
  idade: 40,
  sexo: 'Masculino'
}

console.log('nome', heroi.nome)
console.log('idade', heroi['idade'])
console.log('nao existe', heroi.naoExiste)

heroi.id = 001
console.log(heroi)

//saber chaves
console.log(Object.keys(heroi))

//saver valores
console.log(Object.values(heroi))

const pessoa = {
  tamanho: '15 metros'
}

const novoObjeto = Object.assign(heroi, pessoa)
console.log(novoObjeto)

delete novoObjeto.idade
console.log(novoObjeto)