import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoryEntity } from './story.entity';
import { CreateStoryDto, UpdateStoryDto } from './story.dto';

@Injectable()
export class StoriesService {
  constructor(
    @InjectRepository(StoryEntity)
    private readonly stories_repository: Repository<StoryEntity>,
  ) {}

  async createNewStory(data: CreateStoryDto): Promise<StoryEntity> {
    const new_story = this.stories_repository.create(data);
    await this.stories_repository.save(new_story);
    return new_story;
  }

  async getStories(): Promise<StoryEntity[]> {
    const stories = await this.stories_repository.find();
    return stories;
  }

  async getStoryById(id: number): Promise<StoryEntity> {
    const story = await this.stories_repository.findOne(id);
    return story;
  }

  async changeStoryById(
    id: number,
    values: UpdateStoryDto,
  ): Promise<StoryEntity> {
    const story = await this.getStoryById(id);
    Object.assign(story, values);
    await this.stories_repository.save(story);
    return story;
  }
}
