const express = require("express");
const cors = require("cors");

const app = express();

// config JSON response
app.use(express.json());

// solve CORS request
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Public folder for images
app.use(express.static("public"));

//  Routes

app.listen(5000, () => console.log("SERVE ONLINE!"));

// teste