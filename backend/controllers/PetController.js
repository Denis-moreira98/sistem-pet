const Pet = require("../models/Pet");

//helpers
const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");

module.exports = class PetController {
   //create a pet
   static async createPet(req, res) {
      const { name, age, weight, color } = req.body;

      const images = req.files;

      const available = true;

      // upload images

      //validations
      if (!name) {
         res.status(422).json({ message: "O nome é obrigatório!" });
         return;
      }
      if (!age) {
         res.status(422).json({ message: "A idade é obrigatória!" });
         return;
      }
      if (!weight) {
         res.status(422).json({ message: "O peso é obrigatório!" });
         return;
      }
      if (!color) {
         res.status(422).json({ message: "A cor é obrigatória!" });
         return;
      }
      if (images.length === 0) {
         res.status(422).json({ message: "A imagem é obrigatória!" });
         return;
      }

      // get pet owner
      const token = getToken(req);
      const user = await getUserByToken(token);

      // create a pet
      const pet = new Pet({
         name,
         age,
         weight,
         color,
         available,
         images: [],
         user: {
            _id: user._id,
            name: user.name,
            image: user.image,
            phone: user.phone,
         },
      });

      images.map((images) => {
         pet.images.push(images.filename);
      });

      try {
         const newPet = await pet.save();
         res.status(201).json({
            message: "Pet cadastrado com sucessoo!",
            newPet,
         });
      } catch (err) {
         res.status(500).json({ message: err });
      }
   }

   static async getAll(req, res) {
      try {
         const pets = await Pet.find().sort("-createdAt");

         res.status(200).json({ pets: pets });
      } catch (err) {
         res.status(404).json({ message: err });
      }
   }
};
