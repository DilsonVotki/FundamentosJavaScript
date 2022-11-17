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

