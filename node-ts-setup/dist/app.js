"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("ts says hello yo ma");
});
app.get("/hi", (req, res) => {
  res.send("byeee");
});
app.listen(PORT, () => console.log(`Sever is running on ${PORT}`));
