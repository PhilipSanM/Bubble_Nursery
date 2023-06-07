require("dotenv").config();
const app = require("./app");
require("./database");

const PORT = process.env.PORT;

async function main() {
  await app.listen(app.get(PORT));
  console.log("server on port " + PORT);
}

main();
