// Interface utilizada nas duas classes
export interface IVeiculo {
    marca: string;
    modelo: string;
    exibirInformacoes(): string;
}

// classe 1
export class Carro implements IVeiculo {
    marca: string;
    modelo: string;
    numeroPortas: number;

    constructor(marca: string, modelo: string, numeroPortas: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.numeroPortas = numeroPortas;
    }

    exibirInformacoes(): string {
        return `Veículo: Carro\nMarca: ${this.marca}\nModelo: ${this.modelo}\nPortas: ${this.numeroPortas}`;
    }
}

// classe 2
export class Bicicleta implements IVeiculo {
    marca: string;
    modelo: string;
    tipoMarcha: string;

    constructor(marca: string, modelo: string, tipoMarcha: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipoMarcha = tipoMarcha;
    }

    exibirInformacoes(): string {
        return `Veículo: Bicicleta\nMarca: ${this.marca}\nModelo: ${this.modelo}\nTipo de Marcha: ${this.tipoMarcha}`;
    }
}