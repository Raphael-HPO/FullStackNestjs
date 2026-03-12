import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { plainToInstance } from 'class-transformer';
import { userResponse } from './dto/user-response.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.prismaService.user.create({
      data: createUserDto
    });
    return plainToInstance(userResponse, user, {
      excludeExtraneousValues: true,
    })
  }

  async findAll() {
    return await this.prismaService.user.findMany()
  }

  async findOne(id: number) {
    return await this.prismaService.user.findUnique({
      where: { id }
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: { id },
      data: { ...updateUserDto }
    })

  }

  async remove(id: number) {
    return await this.prismaService.user.delete({
      where: { id }
    })
  }
}
