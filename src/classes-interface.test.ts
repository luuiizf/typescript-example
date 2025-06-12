import { Carro, Bicicleta, IVeiculo } from './classes-interface';

describe('Classes com Interface Comum (IVeiculo)', () => {

    describe('Classe Carro', () => {
        let meuCarro: Carro;

        beforeEach(() => {
            meuCarro = new Carro('Ford', 'Focus', 4);
        });

        test('deve instanciar Carro corretamente', () => {
            expect(meuCarro.marca).toBe('Ford');
            expect(meuCarro.modelo).toBe('Focus');
            expect(meuCarro.numeroPortas).toBe(4);
        });

        test('deve alterar atributos de Carro', () => {
            meuCarro.marca = 'Chevrolet';
            meuCarro.modelo = 'Onix';
            meuCarro.numeroPortas = 2;
            expect(meuCarro.marca).toBe('Chevrolet');
            expect(meuCarro.modelo).toBe('Onix');
            expect(meuCarro.numeroPortas).toBe(2);
        });

        test('deve testar o método comum exibirInformacoes para Carro', () => {
            const expectedInfo = 'Veículo: Carro\nMarca: Ford\nModelo: Focus\nPortas: 4';
            expect(meuCarro.exibirInformacoes()).toBe(expectedInfo);

            meuCarro.marca = 'Honda';
            meuCarro.modelo = 'Civic';
            meuCarro.numeroPortas = 4;
            const updatedExpectedInfo = 'Veículo: Carro\nMarca: Honda\nModelo: Civic\nPortas: 4';
            expect(meuCarro.exibirInformacoes()).toBe(updatedExpectedInfo);
        });
    });

    describe('Classe Bicicleta', () => {
        let minhaBicicleta: Bicicleta;

        beforeEach(() => {
            minhaBicicleta = new Bicicleta('Caloi', 'Elite', '21 marchas');
        });

        test('deve instanciar Bicicleta corretamente', () => {
            expect(minhaBicicleta.marca).toBe('Caloi');
            expect(minhaBicicleta.modelo).toBe('Elite');
            expect(minhaBicicleta.tipoMarcha).toBe('21 marchas');
        });

        test('deve alterar atributos de Bicicleta', () => {
            minhaBicicleta.marca = 'Specialized';
            minhaBicicleta.modelo = 'Rockhopper';
            minhaBicicleta.tipoMarcha = 'Shimano Deore';
            expect(minhaBicicleta.marca).toBe('Specialized');
            expect(minhaBicicleta.modelo).toBe('Rockhopper');
            expect(minhaBicicleta.tipoMarcha).toBe('Shimano Deore');
        });

        test('deve testar o método comum exibirInformacoes para Bicicleta', () => {
            const expectedInfo = 'Veículo: Bicicleta\nMarca: Caloi\nModelo: Elite\nTipo de Marcha: 21 marchas';
            expect(minhaBicicleta.exibirInformacoes()).toBe(expectedInfo);

            minhaBicicleta.marca = 'Sense';
            minhaBicicleta.modelo = 'Fun Evo';
            minhaBicicleta.tipoMarcha = 'SRAM SX Eagle';
            const updatedExpectedInfo = 'Veículo: Bicicleta\nMarca: Sense\nModelo: Fun Evo\nTipo de Marcha: SRAM SX Eagle';
            expect(minhaBicicleta.exibirInformacoes()).toBe(updatedExpectedInfo);
        });
    });

    test('Carro e Bicicleta devem implementar IVeiculo', () => {
        const carro: IVeiculo = new Carro('Fiat', 'Cronos', 4);
        const bicicleta: IVeiculo = new Bicicleta('Giant', 'Talon', 'Sem marcha');

        expect(typeof carro.exibirInformacoes).toBe('function');
        expect(typeof bicicleta.exibirInformacoes).toBe('function');
    });
});