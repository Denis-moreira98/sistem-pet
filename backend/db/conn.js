const mongoose = require("mongoose");

const url = process.env.DATA_BASE;

async function main() {
   await mongoose.connect(url);
   console.log("Conectou com Mongoose!");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
