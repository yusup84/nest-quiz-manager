import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>
  ){}

  async create(createQuizDto: CreateQuizDto): Promise<Quiz>{
    const quiz = this.quizRepository.create(createQuizDto)
    return await this.quizRepository.save(quiz)
  }

  getAllQuiz() {
    return [1, 2, 3, 4, 'A', 'B'];
  }
}
