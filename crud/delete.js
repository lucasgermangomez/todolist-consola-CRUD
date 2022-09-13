const fs = require('fs');
const path = require('path');
const read = require('../crud/read');

const deleteTask = (title) => {
    const data = read();
    for (task of data) {
        console.log(task.title);
        if (task.title === title) {
            const lastData = data.filter((el) => el.title !== title);
            const lastDataParsed = JSON.stringify(lastData, null, 2);
            fs.writeFileSync(path.join(__dirname, '../taskData.json'), lastDataParsed);
            return true;
        };
    } 
    return false;
};

module.exports = deleteTask;