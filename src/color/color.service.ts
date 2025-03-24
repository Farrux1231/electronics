import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createColorDto: CreateColorDto) {
    const color = await this.prisma.color.create({
      data: createColorDto,
    });
    return color;
  }

  async findAll() {
    const colors = await this.prisma.color.findMany();
    return colors;
  }

  async findOne(id: number) {
    const color = await this.prisma.color.findUnique({
      where: { id },
    });

    if (!color) {
      throw new NotFoundException(`Color with ID ${id} not found`);
    }

    return color;
  }

  async update(id: number, updateColorDto: UpdateColorDto) {
    const existingColor = await this.prisma.color.findUnique({
      where: { id },
    });

    if (!existingColor) {
      throw new NotFoundException(`Color with ID ${id} not found`);
    }

    const updatedColor = await this.prisma.color.update({
      where: { id },
      data: updateColorDto,
    });

    return updatedColor;
  }

  async remove(id: number) {
    const existingColor = await this.prisma.color.findUnique({
      where: { id },
    });

    if (!existingColor) {
      throw new NotFoundException(`Color with ID ${id} not found`);
    }

    await this.prisma.color.delete({
      where: { id },
    });

    return { message: `Color with ID ${id} removed successfully` };
  }
}
