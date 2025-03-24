import { Module } from '@nestjs/common';
import { WebInfoService } from './web-info.service';
import { WebInfoController } from './web-info.controller';

@Module({
  controllers: [WebInfoController],
  providers: [WebInfoService],
})
export class WebInfoModule {}
