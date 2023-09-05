import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
const port = process.env.PORT || 5500;
app.use(
  cors({
    origin: [process.env.PUBLIC_URL],
    methods: ["GET", "PUT", "patch", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
