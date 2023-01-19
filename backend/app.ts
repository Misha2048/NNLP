import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import { AuthRouter, CourseRouter, LiteratureRouter, UserRouter } from "./routes";
import { client } from "./services/client";
dotenv.config();

export const app = express();

const port = process.env.PORT;

if (process.env.ENVIRONMENT == "dev") app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/users", UserRouter);
app.use("/courses", CourseRouter);
app.use("/literature", LiteratureRouter);
app.use("/auth", AuthRouter);

client.connect(err => {
    app.listen(port, () => {
        console.log(`Running on port ${port}`);
    });
});