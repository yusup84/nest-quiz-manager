import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from './quiz.entity';
  
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get()
  getAll() {
    return this.quizService.getAllQuiz();
  }

  @Post()
  @UsePipes(ValidationPipe) // validation secara per controller
  async create(@Body() createQuizDto: CreateQuizDto): Promise<Quiz> {
    return await this.quizService.create(createQuizDto);
  }
}
