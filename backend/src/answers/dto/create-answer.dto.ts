import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
} from 'class-validator';

export class CreateAnswerDto {
  @IsNumber()
  user_id: number;

  @IsNumber()
  survey_id: number;

  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(15)
  @Type(() => AnswerType)
  answers: AnswerType[];
}

class AnswerType {
  question_id: number;
  option_id: number;
}
