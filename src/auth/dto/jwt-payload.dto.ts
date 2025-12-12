import { IsString } from "class-validator";

export class JwtPayloadDto {
  @IsString()
  sub: string;
  @IsString()
  name: string;
}