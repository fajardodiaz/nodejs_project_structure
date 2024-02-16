import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";


const port = 8000;
const app = express();


// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));


// Custom Middlewares


// Dotenv config
dotenv.config();


// run the server
app.listen(port, () => {});
