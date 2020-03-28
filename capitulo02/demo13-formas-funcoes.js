function minhaFuncao1(parametro1) {
  return `aeeee1 ${parametro1}`
}

const minhaFuncao2 = function (parametro1) {
  return `aeeee2 ${parametro1}`
}

const minhaFuncao3 = (parametro1) => {
  return `aeeee3 ${parametro1}`
}

const minhaFuncao4 = parametro1 => `aeeee4 ${parametro1}`

const obj1 = {
  minhaFuncao5: parametro1 => `aeeee5 ${parametro1}`
}

const obj2 = {
  minhafuncao6(parametro1) {
    return `aeeee6 ${parametro1}`
  }
}

console.log(minhaFuncao1('charles 1'))
console.log(minhaFuncao2('charles 2'))
console.log(minhaFuncao3('charles 3'))
console.log(minhaFuncao4('charles 4'))
console.log(obj1.minhaFuncao5('charles 5'))
console.log(obj2.minhafuncao6('charles 6'))