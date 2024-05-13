import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Questions } from './question.entity';
import { CreateQuestionDto } from '../dto/create-question.dto';


@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Questions)
    private readonly questionRepository: Repository<Questions>
  ){}

  async createQuestion(createQuestionDto: CreateQuestionDto): Promise<Questions> {
    const question = this.questionRepository.create(createQuestionDto)
    return await this.questionRepository.save(question)
  }
}
