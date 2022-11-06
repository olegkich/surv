export class CreateSurveyDto {
  name: string;
  questions: IQuestion[];
  user_id?: number;
}

export class FindAllSurveyDto {
  survey_name?: string;
  user_name?: string;
}

export interface IQuestion {
  question: string;
  answers: string[];
}
