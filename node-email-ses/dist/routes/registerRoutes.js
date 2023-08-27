"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerControllers_1 = require("../controllers/registerControllers");
const regRouter = (0, express_1.Router)();
regRouter.get("/register", registerControllers_1.create);
exports.default = regRouter;
