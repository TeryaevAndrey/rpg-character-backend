import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import parametersRoute from "./routes/parameters.route.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/parameters", parametersRoute);
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        app.listen(process.env.PORT, () => {
            console.log("server started");
        });
    }
    catch (err) {
        console.log("Server Error");
        process.exit(1);
    }
};
startServer();
