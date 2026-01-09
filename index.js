const { error } = require("console");
const app = require("./src/config/express.config");

app.get("/", (req, res) => {
  res.json({ name: "rabin" });
});

app.listen(3000, (req, res) => {
  if (!error) {
    console.log("server running");
  }
});
