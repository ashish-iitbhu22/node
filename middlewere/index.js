const fs = require("fs");

function writeLog(filename){
    return (req, res, next) => {
      let log = `${Date.now()}from${req.method}\n`;
      fs.appendFile(filename, log, (err, data) => {
        next();
      });
    };
}

module.exports = {
  writeLog,
};
