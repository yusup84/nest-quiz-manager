import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'question can not empty' })
  @Length(3, 255)
  question: string;


}
