import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("ts says hello yo ma");
});

app.get("/hi", (req, res) => {
  res.send("Bye");
});

app.listen(PORT, () => console.log(`Sever is running on ${PORT}`));
