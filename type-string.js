const text1 = 'Olá mundo!'
const numeroString = '15313'
const caracteresString = '*&&$&¨$&kjhbk351'

console.log(text1)

console.log('Texto com "aspas" dentro das aspas da string')

// Contatenação (+)

console.log(text1 + " Meu lindo!")

// template string ou template literal

// testes textos unicodes 
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// manipulação strings
const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

console.log(cidade1 === input1); // false

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

// tamanho string
const senha = "minhaSenha123"
console.log('tamanho da senha: ' + senha.length) // 13 caracteres
