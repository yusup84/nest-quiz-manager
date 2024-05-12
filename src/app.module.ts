import { Module } from '@nestjs/common';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { dataSourceOptions } from 'db/data-source';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
