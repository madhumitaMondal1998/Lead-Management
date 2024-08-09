const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const leadRoutes = require("./routes/leadRoutes");
const authRoutes = require("./routes/authRouters"); // Add this line

require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", leadRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
