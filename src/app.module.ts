import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consumo } from './consumo/consumo.entity';
import { ConsumoService } from './consumo/consumo.service';
import { ConsumoController } from './consumo/consumo.controller';
import { AlertasService } from './consumo/alertas.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Consumo],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Consumo]),
  ],
  providers: [ConsumoService, AlertasService],
  controllers: [ConsumoController],
})
export class AppModule { }