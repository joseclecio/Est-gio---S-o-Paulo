function inverterString(str) {
    let resultado = ''; 
    const comprimento = str.length; 

    for (let i = comprimento - 1; i >= 0; i--) {
        resultado += str[i]; 
    }

    return resultado; 
}

const stringOriginal = "Exemplo de string"; 
const stringInvertida = inverterString(stringOriginal); 

console.log(`String original: "${stringOriginal}"`); 
console.log(`String invertida: "${stringInvertida}"`); 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite uma string para inverter: ', (input) => {
    console.log(`String original: "${input}"`); // Exibe a string original do usuário
    console.log(`String invertida: "${inverterString(input)}"`); // Inverte e exibe a string
    readline.close(); // Fecha a interface de leitura
});
