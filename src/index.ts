import express from "express";
import houseRoute from "./routes/house.routes";
import userRoute from "./routes/user.route";
import hintRoute from "./routes/hint.routes";
const app = express();
app.use(express.json());

app.use("/houses", houseRoute);
app.use("/user", userRoute);
app.use("/hint", hintRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
