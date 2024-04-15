const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

// DOTENV
dotenv.config();

// config JSON response
app.use(express.json());

// solve CORS request
app.use(cors({ credentials: true, origin: process.env.BASE_URL }));

// Public folder for images
app.use(express.static("public"));

//  Routes
const UserRoutes = require("./routes/UserRoutes");

app.use("/users", UserRoutes);

app.listen(5000, () => console.log("SERVE ONLINE!"));
