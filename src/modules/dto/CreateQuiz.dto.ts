import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'title can not empty' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty({ message: 'description can not empty' })
  @Length(3)
  description: string;
}
