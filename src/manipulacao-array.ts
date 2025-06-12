// 1. Calcular o quadrado de cada elemento do array
// a. usando o for simples
export function calcularQuadradoComFor(arr: number[]): number[] {
    const resultado: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i] * arr[i]);
    }
    return resultado;
}

// b. usando o forEach
export function calcularQuadradoComForEach(arr: number[]): number[] {
    const resultado: number[] = [];
    arr.forEach(num => {
        resultado.push(num * num);
    });
    return resultado;
}

// 2. Concatenar Strings com 1 (um) espaço
export function concatenarStrings(arr: string[]): string {
    return arr.join(' ');
}

// 3. Imprimir elementos ordenados
export function ordenarElementos(arr: string[]): string[] {
    return arr.sort();
}

// 4. Pegar apenas os dois primeiros elementos
export function pegarDoisPrimeirosElementos<T>(arr: T[]): T[] {
    return arr.slice(0, 2);
}

// 5. Extrair elementos pares
export function extrairElementosPares(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}