import { Injectable } from '@nestjs/common';
import { CreateWebInfoDto } from './dto/create-web-info.dto';
import { UpdateWebInfoDto } from './dto/update-web-info.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WebInfoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createWebInfoDto: CreateWebInfoDto) {
    const info = await this.prisma.webInfo.create({ data: createWebInfoDto });
    return info;
  }

  async findAll() {
    const infos = await this.prisma.webInfo.findMany();
    return infos;
  }

  async findOne(id: number) {
    const info = await this.prisma.webInfo.findUnique({ where: { id } });
    if (!info) {
      throw new Error(`WebInfo with ID ${id} not found`);
    }
    return info;
  }

  async update(id: number, updateWebInfoDto: UpdateWebInfoDto) {
    const updatedInfo = await this.prisma.webInfo.update({
      where: { id },
      data: updateWebInfoDto,
    });
    return updatedInfo;
  }

  async remove(id: number) {
    const deletedInfo = await this.prisma.webInfo.delete({ where: { id } });
    return deletedInfo;
  }
}
