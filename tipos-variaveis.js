//var  - pode utilizar, mas por boas praticas nao é mais utilizada (pode ser iniciada em qualquer lugar no codigo, pq quando o programa inicia, ele le todas as variaveis var antes de executar)
var altura = 2
var comprimento = 5

area = altura * comprimento

console.log(area)

var area

// let - é utilizada nos tempos atuais por boa pratica, porém tem q ser inciada antes de ser chamada

let altura1 = 2
let comprimento1 = 5

area1 = altura1 * comprimento1

console.log(area1)

let forma = 'retangulo'
let area2 = 0

if(forma ==='retangulo'){
    area2 = altura1 * comprimento1
    console.log('é retangulo com area: ' + area2)
} else {
    area2 = (altura1 * comprimento1) / 2
    console.log('é outra forma com area : ' + area2)
}


//const - só é utilizanda quando o seru valor nao será trocado
const quadrado = 'quadrado'
const alt = 2
const compr = 5
//const areaTotal = 0;    assim da erro pq nao pode ser constante se vai mudar depois 
let areaTotal

if(quadrado ==='quadrado'){
    areaTotal = alt * compr
    console.log('é quadrado com area: ' + areaTotal)
} else {
    areaTotal = (alt * compr)/2
    console.log('é outra forma com area : ' + areaTotal)
}
