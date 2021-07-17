import { Router } from "express";
import UserController from "./UserController";

const userRouter = Router();

userRouter.route("/signup").post(UserController.createUser);

userRouter.route("/login").post(UserController.login);

userRouter.route("/surveys").get(UserController.getUserSurveys);

export default userRouter;
