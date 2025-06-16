import express from "express";
import houseRoute from "./routes/house.routes";
import userRoute from "./routes/user.route";
import hintRoute from "./routes/hint.routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use("/houses", houseRoute);
app.use("/user", userRoute);
app.use("/hint", hintRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(process.env.FRONTEND_URL);
});
