import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findByEmail', () => {
    it('should return a user by email', async () => {
      const user = await service.findByEmail('test@example.com');
      expect(user).toBeDefined();
    });
  });

  describe('findByName', () => {
    it('should return a user by name', async () => {
      const user = await service.findByName('John Doe');
      expect(user).toBeDefined();
    });
  });
});
