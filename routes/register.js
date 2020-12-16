import express from "express";
import { createRecord, showRecord } from "../controllers/register.js";
const router = express.Router();

router.get("/", showRecord);

router.post("/", createRecord);

export default router;
