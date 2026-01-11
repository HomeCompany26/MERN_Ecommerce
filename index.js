const { error } = require("console");
const app = require("./src/config/express.config");

app.listen(3000, () => {
  console.log(`server running in port 3000`);
});
