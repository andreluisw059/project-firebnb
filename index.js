const csv = require('./scripts/lerCsv');
const readline = require("readline");

const leitor = readline.createInterface(process.stdin, process.stdout);

const lerDados = async(numeroHospedes) => {
  const dadosReserva = await csv.leCsv(csv.linkCsv.reserva);
  const resultadoDosDadosReserva = dadosReserva.dados;
  const dadosCatalogo = await csv.leCsv(csv.linkCsv.catalogo);
  const resultadoDosDadosCatalogo = dadosCatalogo.dados;
  let possibilidadeDeLocacao = false;
  resultadoDosDadosCatalogo.filter(({ capacidade_de_pessoas, preco_por_dia, codigo_do_imovel }) => {
    preco.push(preco_por_dia);
    if (Number(capacidade_de_pessoas) >= Number(numeroHospedes)) {
      codigo.push(codigo_do_imovel);
      return possibilidadeDeLocacao = true;
    }
  });

  resultadoDosDadosReserva.filter((element) => {
    if (Number(element.numero_de_pessoas) <= Number(numeroHospedes) && possibilidadeDeLocacao) {
     console.log(`Código do imóvel disponível: ${element.codigo_do_imovel}\nData: ${new Date(element.data_de_saida).toLocaleDateString()}\n`);
    }
  });
  if (!possibilidadeDeLocacao) {
    console.log(`Nenhum local disponpivel para ${numeroHospedes} pessoas.`);
  }  
}

const menu = () => {
  leitor.question('Digite quantas pessoas querem se hospedar ', async(resposta) => {
    await lerDados(resposta);
    leitor.close();
  });
  }



menu();