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
import { SurveyDto } from './dto/surveyDto';
import { User } from 'src/shared/user-auth.decorator';
import { JwtUserGuard } from 'src/users/auth.guard';

@Controller('surveys')
export class SurveysController {
  constructor(private readonly surveysService: SurveysService) {}

  @UseGuards(JwtUserGuard)
  @Post()
  create(@Body() surveyDto: SurveyDto, @User() user: any) {
    surveyDto.user_id = user.id;
    return this.surveysService.create(surveyDto);
  }

  @Get()
  findAll() {
    return this.surveysService.findAll();
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
