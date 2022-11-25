const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/api/test", (req, res) => {
  const rank = req.body.rank;
  const gender = req.body.gender;
  const category = req.body.category;
  const domicile_state = req.body.domicile_state;
  res.json({
    Rank: rank,
    Gender: gender,
    Category: category,
    Domicile_state: domicile_state,
  });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
