const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.get("/all", controller.getAll);
router.post("/", controller.createUser);
router.delete("/:id", controller.deleteUserById);
router.patch("/:id", controller.updateUserById);

module.exports = router;
