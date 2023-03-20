// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles.
//Invoque a função e verifique o resultado no console.


function somaNumeros(um, dois) {
	const soma = um + dois
	console.log(soma)
}

somaNumeros(3, 4)

// b) Uma função que recebe 2 números e imprime um booleano 
//que informa se o primeiro número é **maior ou igual** ao segundo.

function numerosVerdade(numUm, numDois) {
	const verdade = numUm >= numDois
	console.log(verdade)
}

numerosVerdade(5, 4)

// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

function numeroAbstrato(numeroExemplo, numeroExemploDois) {
	const numero = numeroExemplo % numeroExemploDois === 0

	console.log(numero)
}

numeroAbstrato(6, 3)

// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

function descontoSalario(salarioBruto) {
	const desconto = salarioBruto * 0.01
	return desconto
}
console.log(descontoSalario(2000))

