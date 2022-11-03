import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsAlphanumeric } from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric() 
  name: string;

  // @ApiProperty({required: false})
  // age?: number;
}

 