const { Router } = require("express");
const ProductController = require("../controllers/ProductController");
const authMiddleware = require("../middleware/auth.middleware");

const router = Router();

router.get("/search", authMiddleware, ProductController.index);
router.get("/:id", authMiddleware, ProductController.show);
router.post("/", authMiddleware, ProductController.store);
router.put("/:id", authMiddleware, ProductController.update);
router.delete("/:id", authMiddleware, ProductController.delete);

module.exports = router;