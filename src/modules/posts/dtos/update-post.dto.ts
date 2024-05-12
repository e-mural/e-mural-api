import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAccountRequestDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
}
