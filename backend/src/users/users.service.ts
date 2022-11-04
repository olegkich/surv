import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

import { Op } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private jwtService: JwtService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const doesUserExist = await this.userRepository.findOne({
      where: {
        [Op.or]: [{ email: createUserDto.email }, { name: createUserDto.name }],
      },
    });

    if (doesUserExist) {
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    }

    const salt = await bcrypt.genSalt();
    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);

    const user = await this.userRepository.create(createUserDto);
    const token = this.generateJwt(user);

    return token;
  }

  async login(createUserDto: CreateUserDto) {
    const user: User = await this.userRepository.findOne({
      where: {
        [Op.or]: [{ email: createUserDto.email }, { name: createUserDto.name }],
      },
    });

    if (!user) {
      throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
    }

    const isValidPassword = await bcrypt.compare(
      createUserDto.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new HttpException('Incorrect password', HttpStatus.BAD_REQUEST);
    }

    const token = this.generateJwt(user);

    return token;
  }

  generateJwt(user: User) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return this.jwtService.sign(payload, { secret: process.env.SECRET });
  }
}
