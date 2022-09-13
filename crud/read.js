const fs = require('fs');
const path = require('path');

const read = () => {
    const bd = fs.readFileSync(path.join(__dirname, '../taskData.json'),'utf-8');
    const resultado = JSON.parse(bd);
    return resultado;
};

module.exports = read;