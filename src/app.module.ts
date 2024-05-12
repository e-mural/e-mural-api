import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './modules/health/health.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [HealthModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
