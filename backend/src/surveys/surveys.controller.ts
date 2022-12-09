import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SurveysService } from './surveys.service';
import {
  CreateSurveyDto,
  FindAllSurveyDto,
  ReturnSurveysDto,
} from './dto/surveyDto';
import { User } from 'src/shared/user-auth.decorator';
import { JwtUserGuard } from 'src/users/auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Surveys')
@Controller('surveys')
export class SurveysController {
  constructor(private readonly surveysService: SurveysService) {}

  @ApiOperation({
    summary: 'Create a new survey',
    description: `excpects survey in the following form: ${JSON.stringify(
      CreateSurveyDto,
    )}`,
  })
  @ApiResponse({ status: 201 })
  @UseGuards(JwtUserGuard)
  @Post()
  create(@Body() createSurveyDto: CreateSurveyDto, @User() user: any) {
    createSurveyDto.user_id = user.id;
    return this.surveysService.create(createSurveyDto);
  }

  @ApiOperation({ summary: 'returns all surveys with their basic data' })
  @ApiResponse({ status: 200, type: ReturnSurveysDto })
  @Get()
  findAll(@Body() findAllSurveyDto: FindAllSurveyDto) {
    return this.surveysService.findAll(findAllSurveyDto);
  }

  @ApiOperation({ summary: 'get a whole survey by id.' })
  @ApiResponse({ status: 200, type: CreateSurveyDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveysService.findOne(+id);
  }

  @ApiOperation({ summary: 'delete a survey by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveysService.remove(+id);
  }
}
