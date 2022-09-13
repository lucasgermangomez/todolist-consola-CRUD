const fs = require('fs');
const read = require('./read');
const path = require('path');
const writeJson = require('./writeJson');

const create = (title, desc) => {
    const previousData = read();
    const newTask = {
        title,
        desc
    }
    const lastData = [...previousData, newTask];
    
    try {
    writeJson(lastData);
    return true;
    }
    catch(e) {
        console.log("Error:");
        console.log(e);
        return false;
    }
};

module.exports = create;