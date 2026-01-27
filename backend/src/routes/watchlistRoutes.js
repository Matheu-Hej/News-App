import express from "express";
import { addToWatchlist } from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

//! Sets the middleware to every request
//router.use(authMiddleware); 

router.post("/", authMiddleware, addToWatchlist);

export default router