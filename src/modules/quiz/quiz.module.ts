import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { Questions } from './question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Questions])],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
