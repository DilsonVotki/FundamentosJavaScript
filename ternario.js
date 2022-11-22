// ternario funciona como if / else

const maioridade = 18

const idadeCliente = 19

//podemos usar o IF 

if(idadeCliente >= maioridade){
    console.log("pode tomar cerveja")
} else {
    console.log("beba leite")
}

// ou podemos usar operador ternario (3 operadores)conforme estrutura abaixo
                    //condição            //true      //false
console.log(idadeCliente >= maioridade ? "cerveja" : "leite")