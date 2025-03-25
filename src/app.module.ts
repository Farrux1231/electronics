import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionModule } from './region/region.module';
import { ColorModule } from './color/color.module';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ComentModule } from './coment/coment.module';
import { UserLikeModule } from './user_like/user_like.module';
import { OrderModule } from './order/order.module';
import { WebInfoModule } from './web-info/web-info.module';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './mail/mail.module';
import { NotificationGateway } from './notification/notification.gateway';

@Module({
  imports: [RegionModule, ColorModule, UserModule, ChatModule, 
  ProductModule, CategoryModule, ComentModule, UserLikeModule, 
  OrderModule, WebInfoModule, PrismaModule, MailModule],
  controllers: [AppController],
  providers: [AppService, NotificationGateway],
})
export class AppModule {}
