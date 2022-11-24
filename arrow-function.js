// função normal
function apresentar (nome) {
    return `Meu nome é ${nome}.`
}

// Arrow Function
const apresentarArrow = nome => `Meu nome é ${nome}.`
const soma = (a, b) => a + b

console.log(apresentar("Dilson"))
console.log(apresentarArrow("Dilson"))

console.log(soma(1, 3))

const somaSimples = (a, b) => {
    if(a > 10 || a > 10){
        return 'Não pode, somente numeros menores que 10'
    }else {
        return a + b;
    }
}

console.log(somaSimples(1, 5))
console.log(somaSimples(11, 50))