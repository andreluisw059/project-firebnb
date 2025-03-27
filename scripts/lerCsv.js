const fs = require('fs');
const csv = require('csv-parser');
const catalogo = './data/catalogo';
const reserva = './data/reserva';
let resultado = {
  dados: []
};

const leCsv = async (arquivo) => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(`${arquivo}.csv`)
    .pipe(csv())
    .on('data', (row) => {
      resultado.dados.push(row);
    })
    .on('end', () => {
      resolve(resultado);
    })
  }
  )
}

module.exports = {
  leCsv,
  'linkCsv': {
    catalogo,
    reserva
  }
}