require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = require("./src/app");

const server = express();

// CORS FIX
server.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

server.use(express.json());

// Link routes
server.use("/", app);

// PORT
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});