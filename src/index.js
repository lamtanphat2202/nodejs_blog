const { engine } = require("express-handlebars");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = 3000;

// Để phục vụ các file tĩnh như css, js, hình ảnh,...
// Nếu không có dòng này thì khi truy cập vào các file tĩnh sẽ bị lỗi 404 not found
app.use(express.static(path.join(__dirname, "public")));

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
// Dòng bên dưới để set đường dẫn đến thư mục views để thằng express biết nó nằm đâu
// Nếu file index.js + folder views nằm cùng cấp với node_modules thì không cần dòng này
// Nhưng nếu không cùng cấp với node_moldules thì phải set đường dẫn cho nó.
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/news", (req, res) => {
    res.render("news");
});
app.listen(port, () => console.log("test port"));
