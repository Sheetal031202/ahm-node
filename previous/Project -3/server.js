const express = require("express");
const app = express();
const { convert } = require("html-to-text");

const options = {
  wordwrap: 130,
};

app.get("/", (req, res) => {
  const html = "<div>Hello World</div>";
  const text = convert(html, options);

  console.log(text)
  res.send(text);           
});

app.listen(8000, () => {
  console.log("Server running on port 3000");
});
