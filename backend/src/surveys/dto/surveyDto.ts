export class SurveyDto {
  name: string;
  questions: IQuestion[];
  user_id?: number;
}

export interface IQuestion {
  question: string;
  answers: string[];
}
