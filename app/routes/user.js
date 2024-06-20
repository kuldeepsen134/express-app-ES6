import express from "express";
import { createSKU, getSKUs } from "../controllers/user.js";


const router = express.Router();

router.post("/sku",  createSKU);
router.get("/sku",  getSKUs);


export default router;
