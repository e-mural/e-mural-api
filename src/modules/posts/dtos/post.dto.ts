import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly status: string;

  @ApiProperty()
  readonly author: string;

  @ApiProperty()
  readonly content: string;

  @ApiProperty()
  readonly address: string;

  @ApiProperty()
  readonly contact: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;
}
