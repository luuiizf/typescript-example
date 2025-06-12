import {
    calcularQuadradoComFor,
    calcularQuadradoComForEach,
    concatenarStrings,
    ordenarElementos,
    pegarDoisPrimeirosElementos,
    extrairElementosPares
} from './manipulacao-array';

describe('Funções de Manipulação de Arrays', () => {

    // Testes para a questão 1: Calcular o quadrado
    describe('Calcular Quadrado', () => {
        const arrayDeTeste = [3, 5, 7, 3, 8, 9, 1];
        const resultadoEsperado = [9, 25, 49, 9, 64, 81, 1];

        test('deve calcular o quadrado de cada elemento usando o loop for', () => {
            expect(calcularQuadradoComFor(arrayDeTeste)).toEqual(resultadoEsperado);
        });

        test('deve calcular o quadrado de cada elemento usando forEach', () => {
            expect(calcularQuadradoComForEach(arrayDeTeste)).toEqual(resultadoEsperado);
        });
    });

    // Testes para a questão 2: Concatenar Strings
    describe('Concatenar Strings', () => {
        const arrayDeTeste = ['Arrays', 'com', 'TypeScript'];
        const resultadoEsperado = 'Arrays com TypeScript';

        test('deve concatenar strings com um espaço', () => {
            expect(concatenarStrings(arrayDeTeste)).toBe(resultadoEsperado);
        });
    });

    // Testes para a questão 3: Ordenar Elementos
    describe('Ordenar Elementos', () => {
        const arrayDeTeste = ['carro', 'boneco', 'ave', 'lapis'];
        const resultadoEsperado = ['ave', 'boneco', 'carro', 'lapis'];

        test('deve ordenar os elementos alfabeticamente', () => {
            expect(ordenarElementos(arrayDeTeste)).toEqual(resultadoEsperado);
        });
    });

    // Testes para a questão 4: Pegar os Dois Primeiros Elementos
    describe('Pegar os Dois Primeiros Elementos', () => {
        const arrayDeTeste = [2, 4, 6, 2, 8, 9, 5];
        const resultadoEsperado = [2, 4];

        test('deve retornar os dois primeiros elementos do array', () => {
            expect(pegarDoisPrimeirosElementos(arrayDeTeste)).toEqual(resultadoEsperado);
        });
    });

    // Testes para a questão 5: Extrair Elementos Pares
    describe('Extrair Elementos Pares', () => {
        const arrayDeTeste = [8, 3, 9, 5, 6, 12];
        const resultadoEsperado = [8, 6, 12];

        test('deve extrair apenas os elementos pares do array', () => {
            expect(extrairElementosPares(arrayDeTeste)).toEqual(resultadoEsperado);
        });
    });
});