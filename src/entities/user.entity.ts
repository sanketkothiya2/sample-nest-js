import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class User {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
}