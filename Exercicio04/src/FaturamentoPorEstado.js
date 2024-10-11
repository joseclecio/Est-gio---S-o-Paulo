class FaturamentoPorEstado {
    constructor(estado, valor) {
        this.estado = estado;
        this.valor = valor;
    }

    getValor() {
        return this.valor;
    }

    getEstado() {
        return this.estado;
    }
}

module.exports = FaturamentoPorEstado;
