import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @ApiOperation({
    summary: 'Submit answers from a survey',
  })
  @ApiResponse({ status: 201 })
  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answersService.create(createAnswerDto);
  }

  @ApiOperation({ summary: 'returns answers by survey id.' })
  @ApiResponse({ type: CreateAnswerDto })
  @Get()
  findAll(@Param('survey_id') survey_id: number) {
    return this.answersService.findAllBySurvey(survey_id);
  }

  @ApiOperation({ summary: 'idk, removes stuff (TODO)' })
  @Delete(':id')
  remove(
    @Param('user_id') user_id: number,
    @Param('survey_id') survey_id: number,
  ) {
    return this.answersService.remove(user_id, survey_id);
  }
}
