import { hash, compare } from "bcrypt";
import { Request } from "express";
import { Connection, getRepository } from "typeorm";
import { Users } from "../../entity/Users";
import { sign } from "jsonwebtoken";
import {
  HTTP_ACCEPTED,
  HTTP_CREATED,
  HTTP_FORBIDDEN,
  HTTP_UNPROCESSABLE_ENTITY,
} from "../../const";
import { serviceResponse } from "../../types";
import { STATUS_CODES } from "http";
import { Surveys } from "../../entity/Surveys";

require("dotenv").config();

export default {
  createUser: async (data): Promise<serviceResponse> => {
    const hashedPassword = await hash(data.password, 10);

    const userRepository = getRepository(Users);

    const userExists = await userRepository.findOne({ user_name: data.name });
    if (userExists) {
      return { status: HTTP_UNPROCESSABLE_ENTITY };
    }
    await userRepository.insert({
      user_name: data.name,
      password: hashedPassword,
    });
    return { status: HTTP_CREATED };
  },
  login: async (data): Promise<serviceResponse> => {
    const userRepository = getRepository(Users);
    const user: Users = await userRepository.findOne({ user_name: data.name });

    if (user) {
      const authenticate = await compare(data.password, user.password);
      if (authenticate) {
        const payload = { name: user.user_name, password: user.password };
        const accessToken: string = sign(
          payload,
          process.env.ACCESS_TOKEN_SECRET
        );

        return {
          data: accessToken,
          status: HTTP_ACCEPTED,
        };
      }
      return {
        status: HTTP_UNPROCESSABLE_ENTITY,
      };
    }
    return {
      status: HTTP_FORBIDDEN,
    };
  },
  getUserSurveys: async (data): Promise<serviceResponse> => {
    const user_name = data.user_name;

    const surveyRepository = getRepository(Surveys);
    const surveys = await surveyRepository.find({
      select: ["id", "survey_name"],
      where: {
        user_name,
      },
    });
    return { status: HTTP_ACCEPTED, data: surveys };
  },
};
