const User = require("../models/User");
const bcrypt = require("bcrypt");
const createUserToken = require("../helpers/create-user-token");

module.exports = class UserController {
   static async register(req, res) {
      const { name, email, phone, password, confirmpassword } = req.body;

      // validations
      if (!name) {
         res.status(422).json({ message: "O nome é obrigatório" });
         return;
      }
      if (!email) {
         res.status(422).json({ message: "O email é obrigatório" });
         return;
      }
      if (!phone) {
         res.status(422).json({ message: "O telefone é obrigatório" });
         return;
      }
      if (!password) {
         res.status(422).json({ message: "A senha é obrigatória" });
         return;
      }
      if (!confirmpassword) {
         res.status(422).json({
            message: "A confirmação de senha é obrigatória",
         });
         return;
      }
      if (password !== confirmpassword) {
         res.status(422).json({
            message: "A senha e a confirmação de senha devem ser iguais!",
         });
         return;
      }

      //check if user exists
      const userExists = await User.findOne({ email: email });

      if (userExists) {
         res.status(422).json({
            message: "Usuário já cadastrado, utilize outro email!",
         });
         return;
      }

      // create a password
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      // create a user
      const user = new User({
         name,
         email,
         phone,
         password: passwordHash,
      });

      try {
         const newUser = await user.save();
         await createUserToken(newUser, req, res);
         return;
      } catch (error) {
         res.status(500).json({ message: error });
      }
   }

   static async login(req, res) {
      const { email, password } = req.body;

      if (!email) {
         res.status(422).json({ message: "O email é obrigatório" });
         return;
      }
      if (!password) {
         res.status(422).json({ message: "A senha é obrigatória" });
         return;
      }
      const user = await User.findOne({ email: email });

      if (!user) {
         res.status(422).json({
            message: "Usuário não encontrado!",
         });
         return;
      }

      //check if password match with db password

      const checkpassword = await bcrypt.compare(password, user.password);

      if (!checkpassword) {
         res.status(422).json({
            message: "Senha inválida!",
         });
         return;
      }

      await createUserToken(user, req, res);
   }

   static async checkUser(req, res) {
      let currentUser;

      console.log(req.headers.authorization);

      if (req.headers.authorization) {
      } else {
         currentUser = null;
      }

      res.status(200).send(currentUser);
   }
};
