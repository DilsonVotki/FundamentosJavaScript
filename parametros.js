function soma () {
    return 2+2;
}

console.log(soma())

// com parametros de função
function somaParametrizada (a,b) {
    return a+b;
}

console.log(somaParametrizada(2,2))
console.log(somaParametrizada(10,10))
console.log(somaParametrizada(-50,50))

// parametros X argumentos
// cuidar com a ordem dos parametros por exemplo:

function idadeNome(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos .`
}

console.log(idadeNome('Dilson', 36))
console.log(idadeNome(36, 'Dilson'))

function multiplica (num1, num2){
    return num1 * num2;
}
console.log(multiplica(somaParametrizada(4, 5), somaParametrizada(3, 3)))

// multiplica atribuindo valor padrao ao parametro
function multiplica2 (num1 = 1, num2 = 1){
    return num1 * num2;
}
console.log(multiplica2(somaParametrizada(4, 5)))

function cumprimentar(){
    return 'Oi gente!'
   }
   
function cumprimentaPessoa(nomePessoa) {
console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') 