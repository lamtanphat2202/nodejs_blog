const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const a = 1;
    const b = 2;
    let c = a + b;
    return res.send("hello world");
});

app.listen(port, () => console.log("test port"));
