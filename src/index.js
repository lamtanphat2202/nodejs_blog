const { engine } = require("express-handlebars");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = 3000;

//Http logger middleware
app.use(morgan("combined"));

// Handlebars setup
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/news", (req, res) => {
    res.render("news");
});
app.listen(port, () => console.log("test port"));
