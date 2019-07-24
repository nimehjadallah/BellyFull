const router = require("express").Router();
const foodRoutes = require("./food");
const organizationRoutes = require("./organization");

//food routes
router.use("/food", foodRoutes);

//non-profit orgaization registration info routes
router.use("/organization", organizationRoutes);

module.exports = router;