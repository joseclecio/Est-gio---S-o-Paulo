function pertenceFibonacci(numero) {
    let a = 0; 
    let b = 1; 

    if (numero === a || numero === b) {
        return `${numero} pertence à sequência de Fibonacci.`;
    }

    while (b <= numero) {
        const proximo = a + b; 
        if (proximo === numero) {
            return `${numero} pertence à sequência de Fibonacci.`;
        }
        a = b; 
        b = proximo;
    }

    return `${numero} não pertence à sequência de Fibonacci.`;
}

const numeroInformado = 21;
const resultado = pertenceFibonacci(numeroInformado); 
console.log(resultado); 
