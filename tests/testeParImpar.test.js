const resultadoTeste = require('../index');

const VerificaParImpar = ({verificacao}, valorParaTeste) => {
    const restoDivisao = (valorParaTeste % 2 === 0) ? 0 : 1;  // Verifica o resto da divisão.
    if(restoDivisao === 0) {
      return test(`Testa se o número ${valorParaTeste} é par`, () => {
        expect(verificacao(valorParaTeste)).toBe(restoDivisao);
       });
    }
    if(restoDivisao === 1) {
     return test(`Testa se o número ${valorParaTeste} é ímpar`, () => {
        expect(verificacao(valorParaTeste)).toBe(restoDivisao);
      });
    }
}

const testeParImpar = () => {  // Gera vários testes.
  let numeroDeTestes = 15;
  for (let index = 0; index < numeroDeTestes; index++) {
    VerificaParImpar(resultadoTeste, index)
  }
}


testeParImpar(); // Executa os testes.








