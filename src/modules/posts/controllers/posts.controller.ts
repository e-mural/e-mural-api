import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PostsService } from '../services/posts.service';
import { PostDto } from '../dtos/post.dto';
import { HttpStatusCode } from 'axios';

@ApiTags('Posts')
@Controller({ path: 'posts', version: '1' })
export class PostsController {
  constructor(private readonly service: PostsService) {}

  @Get()
  @ApiOperation({
    summary: 'get all posts.',
    description: 'Get all posts of the mural.',
  })
  @ApiOkResponse({
    type: [PostDto],
    description: 'All posts were successfully retrieved.',
  })
  async getAll(): Promise<PostDto[]> {
    return this.service.getAll();
  }

  @Post()
  @HttpCode(HttpStatusCode.Created)
  //#region API Documentation
  @ApiOperation({
    summary: 'Add a post.',
    description: 'Add a new post to the mural.',
  })
  @ApiBody({
    type: PostDto,
    description: `Data required to add a new post ["author", "title", "content", "status", "address", "contact"]\n
      - author: User's name;
      - title: Title of the post;
      - content: content of the post;
      - status: status of the situation reported in the post;
      - address: Address of what is being reported in the post.
      - contact: User's contact (phone number. pattern: +55 (11) 99999-9999);
      `,
  })
  @ApiCreatedResponse({
    type: PostDto,
    description: 'The post has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  //#endregion
  async signup(@Body() dto: PostDto): Promise<PostDto> {
    return this.service.add(dto);
  }
}
