const router = require("express").Router();
const PetController = require("../controllers/PetController");

//middleware
const verifyToken = require("../helpers/verify-user-token");
const { imageUpload } = require("../helpers/image-upload");

router.post(
   "/create",
   verifyToken,
   imageUpload.array("images"),
   PetController.createPet
);
router.get("/", PetController.getAll);

module.exports = router;
