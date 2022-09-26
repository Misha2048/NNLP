const {Router} = require("express");
const {UserController} = require("../controllers");
const {ctrlWrapper} =  require("../middleware");

const router = Router();

router.get("/", ctrlWrapper(UserController.getUserList));
router.get("/:id", ctrlWrapper(UserController.getUser));
router.post("/", ctrlWrapper(UserController.createUser));
router.put("/:id", ctrlWrapper(UserController.updateUser));
router.delete("/:id,", ctrlWrapper(UserController.deleteUser));

module.exports = router;