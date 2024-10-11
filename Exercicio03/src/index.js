const fs = require('fs');
const Faturamento = require('./Faturamento');
const Distribuidora = require('./Distribuidora');

// Lê o arquivo JSON com os dados de faturamento
const data = JSON.parse(fs.readFileSync('./data/faturamento.json', 'utf-8'));

// Mapeia o JSON para objetos da classe Faturamento
const faturamentos = data.map(f => new Faturamento(f.dia, f.valor));

// Cria a instância da Distribuidora com os dados de faturamento
const distribuidora = new Distribuidora(faturamentos);

console.log(`Menor faturamento: R$ ${distribuidora.menorFaturamento().toFixed(2)}`);
console.log(`Maior faturamento: R$ ${distribuidora.maiorFaturamento().toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${distribuidora.diasAcimaDaMedia()}`);
