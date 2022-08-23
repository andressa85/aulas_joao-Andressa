console.log(7 / 0) // resulta em infinity
console.log("10.2" / 2)// resultado pois ele verifica se a string possui um valor numérico ex: 10,2 não funciona  
console.log("Show" * 2)// NaN = not a number
console.log(0.1 + 0.7) // possui algumas imprecisões


console.log((10.345).toFixed(2))
console.log("3"+1)// ele concatena pois o + faz sentido no contexto de uma string (esse retorna como 31 e não 4)
console.log("3"-1)// ele soma pois o - não faz sentido no contexto de uma string

function soma(x ,y){
    return console.log(x, "+", y ,"=", x + y)
}
 // função com parâmetros de qualquer tipo
soma(2, 4)
soma(5, 9)
soma(4) // aqui temos um exemplo onde a função só recebe o parâmetro x e não y resultando em NaN

const bobao = (c) => {
    return console.log(c, " é o conteúdo da variável")
}// aqui temos uma chamada estilo 'arrrow function' que pode ser colocado dentro da variável 

bobao("OI")
bobao(6)

function mensagem(){
    console.log("oi")
}
mensagem()
