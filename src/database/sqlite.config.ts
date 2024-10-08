import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const SqliteConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: join(__dirname, '../..', 'database', 'sqlite.db'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default SqliteConfig;
