class Heroi1 {
  atacar() {
    console.log('atacou!!!')
  }

  defender() {
    console.log('defendeu!!!')
  }
}

const heroi1 = new Heroi1()
heroi1.atacar()
heroi1.defender()

// usando construtor!
class Heroi2 {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  atacar() {
    console.log(`O ${this.nome} atacou!`)
  }

  defender() {
    console.log(`O ${this.nome} defendeu!`)
  }
}

const heroi2 = new Heroi2('Hulkbuster', 40)
heroi2.atacar()
heroi2.defender()

class Heroi3 {
  static obterAnoNascimento(idade) {
    return 2020 - idade
  }
}

const anoNascimento = Heroi3.obterAnoNascimento(35)
console.log(`ano nascimento ${anoNascimento}`)

class Test {
  constructor() {
    console.log('teste')
  }
}

new Test()