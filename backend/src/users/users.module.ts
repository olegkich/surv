import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  exports: [JwtModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
