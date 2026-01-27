import express from "express";
import { addToWatchlist, removeFromWatchlist, updateWatchlistItem } from "../controllers/watchlistController.js"; // prettier-ignore
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware); //! Sets the auth middleware to every route

router.post("/", addToWatchlist);
router.delete("/:id", removeFromWatchlist);
router.put("/:id", updateWatchlistItem);

export default router;
