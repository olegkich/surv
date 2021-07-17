import * as express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import AuthenticateToken from "./middleware/authenticateToken";
import surveyRouter from "./Modules/Surveys/SurveyRoutes";
import userRouter from "./Modules/Users/UserRoutes";
import answerRouter from "./Modules/Answers/AnswerRoutes";

const app = express();
const port = "4004";

// middleware
app.use(express.json());

// routes
app.use("/users", userRouter);
app.use("/surveys", AuthenticateToken, surveyRouter);
app.use("/answers", AuthenticateToken, answerRouter);

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "freetime",
  database: "surv",
  entities: [__dirname + "/entity/*.ts"],
  synchronize: true,
  logging: false,
})
  .then(() => {
    app.listen(port, () => {
      console.log("listening on", port);
    });
  })
  .catch((error) => console.log(error));
