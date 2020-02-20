import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'chines',
  database: 'task',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
