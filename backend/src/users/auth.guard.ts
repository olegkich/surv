import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtUserGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();

      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'bearer' || !token) {
        throw new UnauthorizedException({ message: 'user is not authorized' });
      }

      const user = this.jwtService.verify(token, {
        secret: process.env.SECRET,
      });
      req.user = user;

      return true;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException({
        message: 'user is not authorized error',
      });
    }
  }
}
