import { IsNumber } from 'class-validator';

export class JwtPayload {
  @IsNumber()
  id: number;
}
