const { Router } = require("express");
const CategoryController = require("../controllers/CategoryController");
const authMiddleware = require("../middleware/auth.middleware");

const router = Router();

router.get("/search", authMiddleware, CategoryController.index);
router.get("/:id", authMiddleware, CategoryController.show);
router.post("/", authMiddleware, CategoryController.store);
router.put("/:id", authMiddleware, CategoryController.update);
router.delete("/:id", authMiddleware, CategoryController.delete);

module.exports = router;