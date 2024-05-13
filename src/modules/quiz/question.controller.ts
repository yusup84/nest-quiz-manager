import { Body, Controller, Post } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { QuestionService } from "./question.service";
import { Questions } from "./question.entity";

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService){}
  @Post()
  // @UsePipes(ValidationPipe)
  async saveQuestion(@Body() createQuestion: CreateQuestionDto): Promise<Questions> {
    return await this.questionService.createQuestion(createQuestion);
  }
}