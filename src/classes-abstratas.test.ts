import { FormaGeometrica, Circulo, Retangulo } from './classes-abstratas';

describe('Classes Abstratas e Subclasses (FormaGeometrica)', () => {

    describe('Subclasse Círculo', () => {
        let meuCirculo: Circulo;

        beforeEach(() => {
            meuCirculo = new Circulo('Vermelho', 5);
        });

        test('deve instanciar Círculo corretamente com construtor', () => {
            expect(meuCirculo.cor).toBe('Vermelho');
            expect(meuCirculo.raio).toBe(5);
        });

        test('deve alterar atributos de Círculo', () => {
            meuCirculo.cor = 'Azul';
            meuCirculo.raio = 10;
            expect(meuCirculo.cor).toBe('Azul');
            expect(meuCirculo.raio).toBe(10);
        });

        test('deve calcular a área do Círculo corretamente', () => {
            expect(meuCirculo.calcularArea()).toBeCloseTo(Math.PI * 25);
            meuCirculo.raio = 1;
            expect(meuCirculo.calcularArea()).toBeCloseTo(Math.PI * 1);
        });

        test('deve exibir a cor do Círculo', () => {
            expect(meuCirculo.exibirCor()).toBe('A cor da forma é: Vermelho');
        });

        test('deve exibir o diâmetro do Círculo corretamente', () => {
            expect(meuCirculo.exibirDiametro()).toBe(10);
            meuCirculo.raio = 3;
            expect(meuCirculo.exibirDiametro()).toBe(6);
        });
    });

    describe('Subclasse Retângulo', () => {
        let meuRetangulo: Retangulo;

        beforeEach(() => {
            meuRetangulo = new Retangulo('Verde', 4, 6);
        });

        test('deve instanciar Retângulo corretamente com construtor', () => {
            expect(meuRetangulo.cor).toBe('Verde');
            expect(meuRetangulo.largura).toBe(4);
            expect(meuRetangulo.altura).toBe(6);
        });

        test('deve alterar atributos de Retângulo', () => {
            meuRetangulo.cor = 'Amarelo';
            meuRetangulo.largura = 5;
            meuRetangulo.altura = 5;
            expect(meuRetangulo.cor).toBe('Amarelo');
            expect(meuRetangulo.largura).toBe(5);
            expect(meuRetangulo.altura).toBe(5);
        });

        test('deve calcular a área do Retângulo corretamente', () => {
            expect(meuRetangulo.calcularArea()).toBe(24);
            meuRetangulo.largura = 10;
            meuRetangulo.altura = 2;
            expect(meuRetangulo.calcularArea()).toBe(20);
        });

        test('deve exibir a cor do Retângulo', () => {
            expect(meuRetangulo.exibirCor()).toBe('A cor da forma é: Verde');
        });

        test('deve exibir o perímetro do Retângulo corretamente', () => {
            expect(meuRetangulo.exibirPerimetro()).toBe(20);
            meuRetangulo.largura = 3;
            meuRetangulo.altura = 7;
            expect(meuRetangulo.exibirPerimetro()).toBe(20);
        });
    });

    describe('Método Estático de FormaGeometrica', () => {
        test('deve descrever a área de um Círculo', () => {
            const circulo = new Circulo('Roxo', 3);
            const expectedDescription = `Esta forma tem uma área de ${Math.PI * 9} unidades quadradas.`;
            expect(FormaGeometrica.descreverArea(circulo)).toBe(expectedDescription);
        });

        test('deve descrever a área de um Retângulo', () => {
            const retangulo = new Retangulo('Laranja', 7, 2);
            const expectedDescription = `Esta forma tem uma área de ${14} unidades quadradas.`;
            expect(FormaGeometrica.descreverArea(retangulo)).toBe(expectedDescription);
        });

        test('deve funcionar com diferentes instâncias de subclasses', () => {
            const circuloPequeno = new Circulo('Branco', 1);
            const retanguloGrande = new Retangulo('Preto', 10, 10);

            expect(FormaGeometrica.descreverArea(circuloPequeno)).toBe(`Esta forma tem uma área de ${Math.PI * 1} unidades quadradas.`);
            expect(FormaGeometrica.descreverArea(retanguloGrande)).toBe(`Esta forma tem uma área de ${100} unidades quadradas.`);
        });

        test('deve retornar erro para objeto inválido', () => {
            const objetoInvalido = { cor: 'SemForma' };
            expect(FormaGeometrica.descreverArea(objetoInvalido)).toBe('Forma geométrica inválida.');
        });
    });
});
