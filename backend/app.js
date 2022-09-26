const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const client = require("./services/client");
const routers = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("api/users", routers.userRouter);

client.connect(() => {
    console.log("Database connected");
});

app.use((req, res, next) => {
    res.status(404).json({ status: 'failed', code: 404, message: 'Not found' });
});

app.use((err, req, res, next) => {
    const { status = 500, message } = err;
    res.status(status).json({ status: 'failed', code: status, message });
});

module.exports = app;