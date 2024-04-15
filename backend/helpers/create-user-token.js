const jwt = require("jsonwebtoken");

const createuserToken = async (user, req, res) => {
   // create token
   const token = jwt.sign(
      {
         name: user.name,
         email: user.email,
         id: user._id,
      },
      process.env.JWT_SECRET
   );

   // return token
   res.status(200).json({
      message: "Você está autenticado",
      token: token,
      userId: user._id,
   });
};

module.exports = createuserToken;
