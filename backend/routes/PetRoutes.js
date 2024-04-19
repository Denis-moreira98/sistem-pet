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
router.get("/mypets", verifyToken, PetController.getAllUserPets);
router.get("/myadoptions", verifyToken, PetController.getAlluserAdoptions);
router.get("/:id", PetController.getPetById);
router.delete("/:id", verifyToken, PetController.removePetById);
router.patch(
   "/:id",
   verifyToken,
   imageUpload.array("images"),
   PetController.updatePet
);
router.patch("/schedule/:id", verifyToken, PetController.schedule);

module.exports = router;
