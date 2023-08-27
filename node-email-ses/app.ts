import express from "express";
import dotenv from "dotenv";
import regRouter from "./routes/registerRoutes";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is nodemail");
});
app.use(regRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
