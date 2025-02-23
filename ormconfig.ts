import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DB_URL || 'postgres://user:pass@localhost:5432/linkpulse',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false, // Set to false in production, use migrations
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
};
