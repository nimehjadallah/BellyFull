const router = require("express").Router();
const bellyFullOrganizationController = require("../../controllers/bellyFullOrganizationController");

router.route("/")
  .get(bellyFullOrganizationController.findAll)
  .post(bellyFullOrganizationController.create);

router.route("/:id")
  .get(bellyFullOrganizationController.findById)
  .put(bellyFullOrganizationController.update)

module.exports = router;