import { Module } from '@nestjs/common';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  imports: [QuizModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
