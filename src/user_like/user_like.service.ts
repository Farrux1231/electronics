import { Injectable } from '@nestjs/common';
import { CreateUserLikeDto } from './dto/create-user_like.dto';
import { UpdateUserLikeDto } from './dto/update-user_like.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserLikeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserLikeDto: CreateUserLikeDto) {
    const { productId, userId } = createUserLikeDto;

    const userLike = await this.prisma.user_like.create({
      data: { productId, userId },
    });

    await this.prisma.product.update({
      where: { id: productId },
      data: { likes: { increment: 1 } },
    });

    return userLike;
  }

  async findAll() {
    return await this.prisma.user_like.findMany();
  }

  async remove(id: number) {
    const userLike = await this.prisma.user_like.findUnique({
      where: { id },
    });


    await this.prisma.user_like.delete({
      where: { id },
    });

    await this.prisma.product.update({
      where: { id: userLike!.productId },
      data: { likes: { decrement: 1 } },
    });

    return { message: `UserLike with ID ${id} removed successfully` };
  }
}
