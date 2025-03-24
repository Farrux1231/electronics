import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegionService {
  constructor(private prisma: PrismaService) {}

  async create(createRegionDto: CreateRegionDto) {
    try {
      console.log(createRegionDto);
    
    const region = await this.prisma.region.create({
      data: 
        createRegionDto,
    });
    return region;
    } catch (error) {
      console.log(error.message);
      
    }
  }

  async findAll() {
    const regions = await this.prisma.region.findMany();
    return regions;
  }

  async findOne(id: number) {
    const region = await this.prisma.region.findUnique({
      where: { id },
    });

    if (!region) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }

    return region;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const region = await this.prisma.region.findUnique({
      where: { id },
    });

    if (!region) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }

    const updatedRegion = await this.prisma.region.update({
      where: { id },
      data: updateRegionDto,
    });

    return updatedRegion;
  }

  async remove(id: number) {
    const region = await this.prisma.region.findUnique({
      where: { id },
    });

    if (!region) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }

    await this.prisma.region.delete({
      where: { id },
    });

    return { message: `Region with ID ${id} has been deleted` };
  }
}

