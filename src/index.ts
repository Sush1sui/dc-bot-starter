import "dotenv/config";
import express from "express";
import "./bot";
const PORT = process.env.PORT || 6969;

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
