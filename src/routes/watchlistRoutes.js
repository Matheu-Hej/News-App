import express from "express";
import { addToWatchlist, removeFromWatchlist, updateWatchlistItem } from "../controllers/watchlistController.js"; // prettier-ignore
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { addToWatchlistSchema } from "../validators/watchlistValidators.js";

const router = express.Router();

router.use(authMiddleware); //! Sets the auth middleware to every route

router.post("/", validateRequest(addToWatchlistSchema), addToWatchlist);
// {{baseUrl}}/watchlist/{movieId}
router.delete("/:id", validateRequest, removeFromWatchlist);
router.put("/:id", updateWatchlistItem);

export default router;
