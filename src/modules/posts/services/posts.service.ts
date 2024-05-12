import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { PostDto } from '../dtos/post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<PostDto[] | null> {
    const posts = await this.prisma.post.findMany();
    return posts.map((item) => {
      const element: PostDto = {
        createdAt: this.convertUTCDateToLocalDate(
          new Date(item.createdAt),
        ).toLocaleString('pt-BR'),
        ...item,
      };
      return element;
    });
  }

  async add(item: PostDto): Promise<PostDto | null> {
    const post = await this.prisma.post.create({
      data: {
        ...item,
      },
    });
    const result: PostDto = { ...post };
    return result;
  }

  private convertUTCDateToLocalDate(date: Date) {
    const newDate = new Date(
      date.getTime() + date.getTimezoneOffset() * 60 * 1000,
    );

    const offset = date.getTimezoneOffset() / 60;
    const hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
  }
}
