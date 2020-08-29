import * as path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoriesModule } from './stories/stories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoryEntity } from './stories/story.entity';

console.log(path.join(__dirname, './**/*.entity.ts'));

@Module({
  imports: [
    StoriesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: path.join(__dirname, '../db.sql'),
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
