import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { LoggerModule } from 'nestjs-pino';
import { TypeOrmModule } from '@nestjs/typeorm';
import SqliteConfig from './database/sqlite.config';
import LoggerConfig from './logger/logger.config';

@Module({
  imports: [
    LoggerModule.forRoot(LoggerConfig),
    TypeOrmModule.forRoot(SqliteConfig),
    UserModule,
  ],
})
export class AppModule {}
