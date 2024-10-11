const FaturamentoPorEstado = require('./FaturamentoPorEstado');
const DistribuidoraEstados = require('./DistribuidoraEstados');

// Criando os dados de faturamento por estado
const faturamentos = [
    new FaturamentoPorEstado('SP', 67836.43),
    new FaturamentoPorEstado('RJ', 36678.66),
    new FaturamentoPorEstado('MG', 29229.88),
    new FaturamentoPorEstado('ES', 27165.48),
    new FaturamentoPorEstado('Outros', 19849.53)
];

const distribuidora = new DistribuidoraEstados(faturamentos);

const percentuais = distribuidora.percentualPorEstado();

console.log('Percentual de faturamento por estado:');
percentuais.forEach(p => {
    console.log(`${p.estado}: ${p.percentual}%`);
});
