const fs = require('fs');
const csv = require('csv-parser');
const catalogo = './data/catalogo';
const reserva = './data/reserva';
const resultado = [];


converteCsv = (resultado) => {
  return resultado;
 }

const leCsv = async (arquivo) => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(`${arquivo}.csv`)
    .pipe(csv())
    .on('data', (row) => {
      resultado.push(row);
    })
    .on('end', () => {
      resolve(resultado)
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