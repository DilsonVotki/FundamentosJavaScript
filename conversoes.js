// tipo de dado
// booleanos 

// conversao implicita
const num = 123
const numString = '123'
const numStringA = '123a'

console.log(`comparação com === : ${num === numString}`)

console.log(`comparação com == : ${num == numString}`)

console.log(`com o operador + : ${num + numString}`)

//conversao explicita (exemplo Number() e String())

console.log(`com o operador + e com Number() : ${num + Number(numString)}`)
console.log(`com o operador + e com Number() : ${num + Number(numStringA)}`)

//String()
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

// toString()
let telefone1 = 12341234;
console.log("O telefone é " + telefone1.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

// utilizando o + para converter string em number 
let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

// convertendo booleanos para Number
let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.