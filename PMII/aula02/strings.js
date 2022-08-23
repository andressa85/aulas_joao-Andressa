let qualquer = 'Legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.14
console.log(qualquer)
console.log(typeof qualquer)

const escola = "Cod3r"

console.log("Valor da quarta posição: ", escola.charAt(4))
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) // retorna valor da tabela UNICODE
console.log(escola.indexOf('3')) // índice associado a variável escola

console.log(escola.substring(1)) // inclui índice 1 até o final
console.log(escola.substring(0,3)) // índice 0 a 2 
console.log('Escola ' .concat(escola).concat("!"))

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))// regex para substituir os dígitos numéricos dentro do texto por e

console.log('Ana, Maria, Pedro'.split(','))// conversão para array. Pode ser usado regex
