const express = require("express");
const {
  getNotess,
  createNotes,
  getNotesById,
  updateNotesbyID,
  deleteNotesbyID,
  updateShareNotesbyID,
  shareNotes,
} = require("../controllers/NotesControllers");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotess);
router
  .route("/:id")
  .get(protect, getNotesById)
  .put(protect, updateNotesbyID)
  .delete(protect, deleteNotesbyID);
router.route("/create").post(protect, createNotes);
router.route("/share/:id").get(shareNotes).put(protect, updateShareNotesbyID);
module.exports = router;
