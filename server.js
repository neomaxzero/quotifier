const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  const quotes = JSON.parse(fs.readFileSync("quotes.json",  'utf8'));
    console.log(quotes);
    const currentQuote = Math.random() * quotes.list.length;
    

  res.json(quotes.list[Math.round(currentQuote)].content);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


