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
import { CreateSurveyDto, FindAllSurveyDto } from './dto/surveyDto';
import { User } from 'src/shared/user-auth.decorator';
import { JwtUserGuard } from 'src/users/auth.guard';

@Controller('surveys')
export class SurveysController {
  constructor(private readonly surveysService: SurveysService) {}

  @UseGuards(JwtUserGuard)
  @Post()
  create(@Body() createSurveyDto: CreateSurveyDto, @User() user: any) {
    createSurveyDto.user_id = user.id;
    return this.surveysService.create(createSurveyDto);
  }

  @Get()
  findAll(@Body() findAllSurveyDto: FindAllSurveyDto) {
    return this.surveysService.findAll(findAllSurveyDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveysService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveysService.remove(+id);
  }
}
