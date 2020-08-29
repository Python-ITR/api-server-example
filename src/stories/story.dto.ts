import { Min, IsDefined } from 'class-validator';

export class CreateStoryDto {
  @IsDefined()
  title: string;
  @IsDefined()
  short_description: string;
  @IsDefined()
  body: string;
  @IsDefined()
  lat: number;
  @IsDefined()
  lng: number;
}

export class UpdateStoryDto {
  title: string;
  short_description: string;
  body: string;
  lat: number;
  lng: number;
}
