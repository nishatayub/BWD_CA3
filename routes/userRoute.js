const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController.js")

router.get("/getUser", userControllers.getUser);
router.post("/addUser", userControllers.addUser);
router.put("/updateUser/:id", userControllers.updateUser);
router.put("/deleteUser", userControllers.deleteUser);

module.exports = router;