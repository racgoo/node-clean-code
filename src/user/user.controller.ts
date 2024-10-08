import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';

import { InfoUserResDto } from './dto/response/user.infores.dto';
import { UserCreateReqDto } from './dto/request/user.create.req.dto';
import { UserUpdateReqDto } from './dto/request/user.update.req.dto';

//인증 및 서비스 호출만 해야함
//만약 서비스 호출로 받은게 많으면 컴포지션만 하자 { a: A, b: B  깉이 조합}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userCreateReqDto: UserCreateReqDto) {
    const user = await this.userService.create(userCreateReqDto);
    return {
      user: InfoUserResDto.from(user),
    };
  }

  @Get()
  async findAll() {
    return {
      users: await this.userService.findAll(),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(+id);
    return { user };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() userUpdateReqDto: UserUpdateReqDto,
  ) {
    const user = await this.userService.update(+id, userUpdateReqDto);
    return { user };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.userService.remove(+id);
    return;
  }
}
