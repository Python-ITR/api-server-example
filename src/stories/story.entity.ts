import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'stories',
})
export class StoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 200,
  })
  title: string;
  @Column({
    type: 'varchar',
    length: 300,
  })
  short_description: string;
  @Column({
    type: 'text',
  })
  body: string;
  @Column({
    type: 'float',
  })
  lat: number;
  @Column({
    type: 'float',
  })
  lng: number;
}

export default StoryEntity;
