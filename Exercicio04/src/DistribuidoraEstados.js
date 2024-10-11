const FaturamentoPorEstado = require('./FaturamentoPorEstado');

class DistribuidoraEstados {
    constructor(faturamentos) {
        this.faturamentos = faturamentos;
    }

    // Calcula o faturamento total
    faturamentoTotal() {
        return this.faturamentos.reduce((total, fat) => total + fat.getValor(), 0);
    }

    // Calcula o percentual de faturamento de cada estado
    percentualPorEstado() {
        const total = this.faturamentoTotal();
        return this.faturamentos.map(fat => {
            const percentual = (fat.getValor() / total) * 100;
            return {
                estado: fat.getEstado(),
                percentual: percentual.toFixed(2) 
            };
        });
    }
}

module.exports = DistribuidoraEstados;
