import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCategoryUseCase } from '@fc/micro-videos/category/application';
import { Category } from "@fc/micro-videos/category/domain";


@Controller()
export class AppController {


  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    let category = new Category({ name: "Movie" });
    return this.appService.getHello();
  }
}
