const fs = require('fs');
const path = require('path');
const read = require('../crud/read');
const writeJson = require('./writeJson');

const deleteTask = (title) => {
    const data = read();
    for (task of data) {

        if (task.title === title) {
            const lastData = data.filter((el) => el.title !== title);
            writeJson(lastData);
            return true;
        };
    } 
    return false;
};

module.exports = deleteTask;