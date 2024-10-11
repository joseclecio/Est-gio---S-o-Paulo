const Faturamento = require('./Faturamento');

class Distribuidora {
    constructor(faturamentos) {
        this.faturamentos = faturamentos;
    }

    // Filtra os dias com faturamento válido
    getFaturamentosValidos() {
        return this.faturamentos.filter(fat => fat.isValid());
    }

    // Retorna o menor faturamento
    menorFaturamento() {
        const validos = this.getFaturamentosValidos();
        return Math.min(...validos.map(fat => fat.valor));
    }

    // Retorna o maior faturamento
    maiorFaturamento() {
        const validos = this.getFaturamentosValidos();
        return Math.max(...validos.map(fat => fat.valor));
    }

    // Calcula a média de faturamento
    mediaFaturamento() {
        const validos = this.getFaturamentosValidos();
        const total = validos.reduce((sum, fat) => sum + fat.valor, 0);
        return total / validos.length;
    }

    // Conta os dias com faturamento acima da média
    diasAcimaDaMedia() {
        const media = this.mediaFaturamento();
        return this.getFaturamentosValidos().filter(fat => fat.valor > media).length;
    }
}

module.exports = Distribuidora;
