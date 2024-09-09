import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerByID, postPlayer, updatePlayer } from "./controllers/players-controller";
import { getClubs } from "./controllers/clubs-controller";

const router = Router()

router.get("/players", getPlayer)
router.get("/players/:id", getPlayerByID)
router.post("/players", postPlayer)
router.delete("/players/:id", deletePlayer)
router.patch("/players/:id", updatePlayer)

router.get("/clubs", getClubs)

export default router
