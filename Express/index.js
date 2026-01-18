const express = require("express");
const app = express();
// console.dir(app);

let port = 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// app.use((req, res) => {
//   console.log("request received");
//   let code = "<h1>fruits</h1><ul><li>apple</li><li>apple</li></ul>";
//   res.send(code);
// });

// app.get("/:username/:id", (req, res) => {
//   let { username, id } = req.params;
//   res.send(`Welcome to the page of @${username}`);
// });

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("<h1>Nothing searched</h1>");
  }
  res.send(`search results for query: ${q}`);
});
