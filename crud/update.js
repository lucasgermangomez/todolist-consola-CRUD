const fs = require('fs');
const path = require('path');
const read = require('../crud/read');

const updateTask = (title, desc) => {
    data = read();
    for (task of data) {
        if (task.title === title) {
            task.desc = desc;
            const lastData = JSON.stringify(data);
            fs.writeFileSync(path.join(__dirname, '../taskData.json'), lastData);
            return true;
        }
    }
    return false;        
};

module.exports = updateTask;