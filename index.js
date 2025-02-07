const express = require('express');
const app = express();
const path = require('path');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const messageRouter = require("./routes/messageRouter")(messages);

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.render("index", {title: "Mini Message Board", messages: messages});
});

app.get("/new", (req, res) => {
  res.render("form");
})

app.use("/message", messageRouter);

app.post("/new", (req, res) => {
  messages.push({text: req.body.userMessage, user: req.body.userName, added: new Date()});
  res.redirect("/");
})

app.listen(3000);
