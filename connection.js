const mongoose = require("mongoose");

async function mongoDbConect(url) {
  return mongoose.connect(url);
}
module.exports = {
  mongoDbConect,
};
