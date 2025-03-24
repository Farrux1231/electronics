import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebInfoService } from './web-info.service';
import { CreateWebInfoDto } from './dto/create-web-info.dto';
import { UpdateWebInfoDto } from './dto/update-web-info.dto';

@Controller('web-info')
export class WebInfoController {
  constructor(private readonly webInfoService: WebInfoService) {}

  @Post()
  create(@Body() createWebInfoDto: CreateWebInfoDto) {
    return this.webInfoService.create(createWebInfoDto);
  }

  @Get()
  findAll() {
    return this.webInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebInfoDto: UpdateWebInfoDto) {
    return this.webInfoService.update(+id, updateWebInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webInfoService.remove(+id);
  }
}
