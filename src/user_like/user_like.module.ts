import { Module } from '@nestjs/common';
import { UserLikeService } from './user_like.service';
import { UserLikeController } from './user_like.controller';

@Module({
  controllers: [UserLikeController],
  providers: [UserLikeService],
})
export class UserLikeModule {}
