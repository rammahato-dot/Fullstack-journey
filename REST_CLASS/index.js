const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "rammahato",
    content: "Coding feels like solving puzzles every day — the more I practice, the more fun it gets!",
  },
  {
    id: uuidv4(),
    username: "sushil",
    content: "Success isn’t just about hard work; it’s about consistency, patience, and learning from failures.",
  },
  {
    id: uuidv4(),
    username: "rahulkumar",
    content: "Thrilled to share that I’ve landed my very first internship — excited to learn and grow!",
  },
  {
    id: uuidv4(),
    username: "adit",
    content: "Reading has completely changed how I think — every book feels like a new perspective on life.",
  },
  {
    id: uuidv4(),
    username: "deepak",
    content: "Started practicing mindfulness recently, and it’s surprising how much calmer and focused I feel.",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);
  res.render("show.ejs", { post });
});

app.listen(port, () => {
  console.log("listening to port : 8080");
});
