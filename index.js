const numeroParaApp = 8;
let resultado = '';

const parOuImpar = (numero) => numero % 2 === 0 ? 0 : 1;

if (parOuImpar(numeroParaApp) === 0) {
  resultado = 'par';
  console.log(resultado);
} 

if(parOuImpar(numeroParaApp) === 1) {
  resultado = 'ímpar';
  console.log(resultado);
}

module.exports = {
  'verificacao': parOuImpar,
  resultado
};