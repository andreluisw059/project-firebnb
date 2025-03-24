const resultadoTeste = require('../index');

for (let index = 0; index < 17; index++) {
  if (resultadoTeste.verificacao(index) === 1 && resultadoTeste.resultado === 'ímpar') {
    test(`Testa se o número ${index} é ímpar`, () => {
      expect(resultadoTeste.resultado).toBe('ímpar');
    });
  }
}






