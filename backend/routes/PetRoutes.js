const router = require("express").Router();
const PetController = require("../controllers/PetController");

//middleware
const verifyToken = require("../helpers/verify-user-token");

router.post("/create", verifyToken, PetController.createPet);

module.exports = router;
