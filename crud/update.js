const fs = require('fs');
const path = require('path');
const read = require('../crud/read');
const writeJson = require('./writeJson');

const updateTask = (title, desc) => {
    data = read();
    for (task of data) {
        if (task.title === title) {
            task.desc = desc;
            writeJson(data);
            return true;
        }
    }
    return false;        
};

module.exports = updateTask;