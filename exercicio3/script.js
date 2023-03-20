//a) Crie 4 funções. Cada função deve receber dois parâmetros
//numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).



// function 1 (soma)
function funcao1(numUm, numDois) {
	const calculoUm = numUm + numDois

	return calculoUm
}

funcao1(50, 50)

// function 2 (subtracao)
function subtracao2(tres, quatro) {
	const subDois = tres - quatro

	return subDois
}

subtracao2(121, 31)

// function 3 (multiplicacao)
function multiplicacao3(cinco, seis) {
	const mult3 = cinco * seis

	return mult3
}

multiplicacao3(4, 20)

// function 4 (divisao)
function divisao4(sete, oito) {
	const div4 = sete / oito

	return div4
}

divisao4(140, 2)

// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

let n1 = Number(prompt('digite um número:'))
let n2 = Number(prompt('digite um número:'))


console.log(`O número escolhido foi: ${n1}`)
console.log(`O número escolhido foi: ${n2}`)

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

const opsoma = funcao1(n1, n2)
const opsub = subtracao2(n1, n2)
const opmult = multiplicacao3(n1, n2)
const opdiv = divisao4(n1, n2)

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

console.log(opsoma, opsub, opmult, opdiv)