import express from "express";
import usercon from "../controllers/users.js";

const router = express.Router();

router.post("/login", usercon.login);
router.post("/register", usercon.register);

export default router;
