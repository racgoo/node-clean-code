import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateReqDto } from './dto/request/user.create.req.dto';
import { UserUpdateReqDto } from './dto/request/user.update.req.dto';
import { InfoUserResDto } from './dto/response/user.infores.dto';

//입력값도 dto로 받고
//서비스는 항상 리턴값을 entitiy가 아닌 dto로 전달
//entity 보호 및 controller에서 데이터 가공하는 기능 제외

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserReqDto: UserCreateReqDto) {
    const user = this.userRepository.create(createUserReqDto);
    return await this.userRepository.save(user);
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users.map(InfoUserResDto.from);
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return InfoUserResDto.from(user);
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return InfoUserResDto.from(user);
  }

  async findByName(name: string) {
    const user = await this.userRepository.findOne({ where: { name } });
    return InfoUserResDto.from(user);
  }

  async update(id: number, userUpdateReqDto: UserUpdateReqDto) {
    await this.userRepository.update(id, userUpdateReqDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
