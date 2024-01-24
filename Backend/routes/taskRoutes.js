const express = require("express");
const {
  getTasks,
  createTask,
  getTaskById,
  updateTaskbyID,
  deleteTaskbyID,
  updateShareTaskbyID,
  shareTask,
} = require("../controllers/taskControllers");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getTasks);
router
  .route("/:id")
  .get(protect, getTaskById)
  .put(protect, updateTaskbyID)
  .delete(protect, deleteTaskbyID);
router.route("/create").post(protect, createTask);
router.route("/share/:id").get(shareTask).put(protect, updateShareTaskbyID);
module.exports = router;
