const pessoa = {
  _nome: '',
  _idade: 34,

  get nome() {
    return this._nome
  },

  set nome(valor) {
    this._nome = valor.toUpperCase()
  },

  get podeDirigir() {
    return this._idade > 18
  },

  set idade(valor) {
    this._idade = valor
  }
}

pessoa.nome = 'charles mendes'
console.log(pessoa.nome)
pessoa.idade = 16
console.log(pessoa.podeDirigir)
console.log(pessoa.idade) //undefined pois nao criamos o GET da idade