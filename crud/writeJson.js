const fs = require('fs');
const path = require('path');

const writeJson = (array) => {
    const parsedData = JSON.stringify(array, null, 2);
    fs.writeFileSync(path.join(__dirname, '../taskData.json'), parsedData);
};

module.exports = writeJson;