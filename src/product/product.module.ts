import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Module({
  imports:[NotificationGateway],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
