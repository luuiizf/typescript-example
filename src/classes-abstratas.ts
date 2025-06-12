export abstract class FormaGeometrica {
    cor: string;

    constructor(cor: string) {
        this.cor = cor;
    }

    abstract calcularArea(): number;

    exibirCor(): string {
        return `A cor da forma é: ${this.cor}`;
    }

    static descreverArea(forma: FormaGeometrica): string {
        if (forma instanceof FormaGeometrica) {
            return `Esta forma tem uma área de ${forma.calcularArea()} unidades quadradas.`;
        }
        return 'Forma geométrica inválida.';
    }
}

export class Circulo extends FormaGeometrica {
    raio: number;

    constructor(cor: string, raio: number) {
        super(cor);
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }

    exibirDiametro(): number {
        return this.raio * 2;
    }
}

export class Retangulo extends FormaGeometrica {
    largura: number; 
    altura: number; 

    constructor(cor: string, largura: number, altura: number) {
        super(cor);
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }

    exibirPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}