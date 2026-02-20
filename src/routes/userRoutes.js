import express from "express";
import UserController from "../controllers/User.js";

const router = express.Router();

router.post("/conta/login", UserController.autenticarUser);
// router.get("/conta/oi", LoginController.teste);
router.post("/conta/cadastrar", UserController.cadastrarUser);

export default router;
