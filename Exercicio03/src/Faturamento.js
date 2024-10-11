class Faturamento {
    constructor(dia, valor) {
        this.dia = dia;
        this.valor = valor;
    }

    // Verifica se o faturamento do dia é válido (maior que 0)
    isValid() {
        return this.valor > 0;
    }
}

module.exports = Faturamento;
