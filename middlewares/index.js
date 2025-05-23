const fs = require('fs');

function logReqRes(fileName) {
    return (req, res, next) => {
        const log = `${Date.now()}: ${req.ip}: ${req.method} : ${req.path} `;
        fs.appendFile(fileName, log, (err, data) => {
            if (err) {
                console.log('error', err);
            }
            else {
                next();
            }
        })
    }
}

module.exports =  {logReqRes};