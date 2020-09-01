import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { StoriesController } from './stories.controller';
import { StoriesService } from './stories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoryEntity } from './story.entity';
import { CorsMiddleware } from '../common/cors.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([StoryEntity])],
  controllers: [StoriesController],
  providers: [StoriesService],
})
export class StoriesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes(StoriesController);
  }
}
