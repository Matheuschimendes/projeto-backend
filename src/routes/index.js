const { Router } = require("express");

const router = Router();

router.use("/user", require("./user.routes"));
router.use("/category", require("./category.routes"));
router.use("/product", require("./product.routes"));

module.exports = router;