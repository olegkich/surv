import { Request, Response } from "express";
import UserService from "./UserService";
import jwt_decode from "jwt-decode";
import { token } from "../../types";

export default {
  createUser: async (req, res) => {
    const service = await UserService.createUser(req.body);
    res.status(service.status).send();
  },
  login: async (req, res) => {
    const service = await UserService.login(req.body);
    if (service.data) {
      res.status(service.status).json({ accessToken: service.data });
      return;
    }
    res
      .status(service.status)
      .message("wrong credentials or user does not exist");
  },
  getUserSurveys: async (req, res) => {
    console.log("yes");
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const decode: token = jwt_decode(token);

    const service = await UserService.getUserSurveys({
      user_name: decode.name,
    });

    res.status(service.status).json(service.data);
  },
};
