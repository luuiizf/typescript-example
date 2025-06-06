import { fatorial } from './fatorial';

describe('Função fatorial', () => {
  test('fatorial de 0 deve ser 1', () => {
    expect(fatorial(0)).toBe(1);
  });

  test('fatorial de 1 deve ser 1', () => {
    expect(fatorial(1)).toBe(1);
  });

  test('fatorial de 2 deve ser 2', () => {
    expect(fatorial(2)).toBe(2);
  });

  test('fatorial de 10 deve ser 3628800', () => {
    expect(fatorial(10)).toBe(3628800);
  });

  test('fatorial de número negativo deve lançar erro', () => {
    expect(() => fatorial(-1)).toThrow('Número deve ser positivo.');
  });
});
