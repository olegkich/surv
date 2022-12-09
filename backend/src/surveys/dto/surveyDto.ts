import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
} from 'class-validator';

export class CreateSurveyDto {
  @IsNotEmpty()
  name: string;

  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(15)
  @Type(() => QuestionType)
  questions: QuestionType[];

  @IsNumber()
  user_id: number;
}

export class FindAllSurveyDto {
  survey_name?: string;
  user_name?: string;
}

export class QuestionType {
  question: string;
  options: string[];
}

export class ReturnSurveysDto {
  survey_name: string;
  survey_id: number;
  user_id: number;
}
