import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostRequestDto {
  @ApiProperty()
  @IsString()
  readonly name: string;
}
