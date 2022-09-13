const fs = require('fs');
const read = require('./read');
const path = require('path');

const create = (title, desc) => {
    const previousData = read();
    const newTask = {
        title,
        desc
    }
    const lastData = [...previousData, newTask];
    const parsedData = JSON.stringify(lastData, null, 2);

    try {
        fs.writeFileSync(path.join(__dirname, '../taskData.json'), parsedData);
        return true;
    }
    catch(err) {
        console.log("Error:");
        console.log(e);
        return false;
    }
};

module.exports = create;