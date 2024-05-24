const mongoose = require("mongoose");

async function mongoDbConect(url) {
  console.log({ url });
  return mongoose.connect(url);
}
module.exports = {
  mongoDbConect,
};
