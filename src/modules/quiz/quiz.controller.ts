import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get()
  getAll() {
    return this.quizService.getAllQuiz();
  }

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe) // validation secara per controller
  create(@Body() quizData: CreateQuizDto) {
    return { data: quizData };
  }
}
