const router = require("express").Router();
const bellyFullController = require("../../controllers/bellyFullController");

//matches with /api/food
router.route("/")
.get(bellyFullController.findAll)
.post(bellyFullController.create);

//matches with "/api/food/:id"
router
.route("/:id")
.get(bellyFullController.findById)
.put(bellyFullController.update)

module.exports = router;