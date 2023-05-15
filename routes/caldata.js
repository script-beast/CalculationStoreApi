import express from "express";
import calcon from "../controllers/caldata.js";

const router = express.Router();

router.post("/add", calcon.addcalculation);
router.get("/get/:id", calcon.findbyid);
router.delete("/delete/:id", calcon.deletecalculation);

export default router;
