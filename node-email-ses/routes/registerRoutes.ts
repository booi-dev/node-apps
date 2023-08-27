import { Router } from "express";
import { create } from "../controllers/registerControllers";

const regRouter = Router();

regRouter.get("/register", create);

export default regRouter;
