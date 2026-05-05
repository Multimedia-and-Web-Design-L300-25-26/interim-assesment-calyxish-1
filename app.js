const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");

const app = express();

const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";

app.use(morgan("dev"));
app.use(
	cors({
		origin: corsOrigin,
		credentials: true,
	})
);
app.use(cookieParser());
app.use(express.json());

app.get("/health", (req, res) => {
	res.status(200).json({ status: "ok" });
});

module.exports = app;
