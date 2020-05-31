const express = require("express");
const app = express();
app.use(express.static("./"));

app.listen(8080, "0.0.0.0");
