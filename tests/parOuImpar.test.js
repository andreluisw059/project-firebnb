const parOuImpar = require('../index');

const resultadoAnterior = parOuImpar.resultado;
const valores = { "valorPar": 2, "valorImpar": 1 }

if (resultadoAnterior === 'par') {
  test('Verifica se número é par', () => {
    expect(parOuImpar.verificacao(valores.valorPar)).toBe(0);
    expect(parOuImpar.resultado).toBe('par');
    expect(parOuImpar.resultado).not.toBe('ímpar')
  });
}
if (resultadoAnterior === 'ímpar') {

  test('Verifica se número é ímpar', () => {
    expect(parOuImpar.verificacao(valores.valorImpar)).toBe(1);
    expect(parOuImpar.resultado).toBe('ímpar');
    expect(parOuImpar.resultado).not.toBe('par')
  });
}

