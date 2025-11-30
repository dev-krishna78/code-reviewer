require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = require("./src/app");  // tumhara main app.js

// CORS FIX for Vercel → Render
const corsOptions = {
  origin: ["https://code-reviewer-three-weld.vercel.app"], // apna frontend url yaha dalna
  methods: ["GET", "POST"],
  credentials: true,
};

const expressServer = express();
expressServer.use(cors(corsOptions));
expressServer.use(express.json());
expressServer.use("/", app);

// IMPORTANT: Render automatic PORT deta hai
const PORT = process.env.PORT || 3000;

expressServer.listen(PORT, () => {
  console.log(`✔ Server is running on port ${PORT}`);
});