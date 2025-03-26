const csv = require('./scripts/lerCsv');
const readline = require("readline");

const leitor = readline.createInterface(process.stdin, process.stdout);

const lerDados = async(numeroHospedes) => {
  let resultado = '';
  const dadosCatalogo = await csv.leCsv(csv.linkCsv.catalogo);
  dadosCatalogo.forEach((imovel) => {
    if(Number(imovel.capacidade_de_pessoas) > Number(numeroHospedes)) {
      resultado = imovel;
    } else {
      resultado = 'indisponivel'
    }
  });
  return resultado;
}


const menu = () => {
  leitor.question('Digite quantas pessoas querem se hospedar ',  (resposta) => {
    let teste = lerDados(resposta);
    console.log(teste);
  });
  }



menu();