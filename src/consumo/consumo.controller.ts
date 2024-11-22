import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ConsumoService } from './consumo.service';
import { Consumo } from './consumo.entity';
import { AlertasService } from './alertas.service';

@Controller('consumo')
export class ConsumoController {
    constructor(private readonly consumoService: ConsumoService,
        private readonly alertasService: AlertasService,) { }

    @Post()
    async registrarConsumo(@Body() consumo: Consumo) {
        return this.consumoService.registrarConsumo(consumo);
    }

    @Get('historico')
    async obterHistorico(
        @Query('usuarioId') usuarioId: number,
        @Query('inicio') inicio: string,
        @Query('fim') fim: string,
    ) {

        // Converte as strings de data para objetos Date
        const dataInicio = new Date(inicio);
        let dataFim = new Date(fim);

        // Ajusta a dataFim para o final do dia (23:59:59.999)
        dataFim.setHours(23, 59, 59, 999);

        return this.consumoService.obterHistorico(usuarioId, new Date(dataInicio), new Date(dataFim));
    }

    @Get('alertas')
    async obterAlertas(@Query('usuarioId') usuarioId: number) {
        console.log('Requisição para alertas recebida para o usuário ID:', usuarioId);
        return this.alertasService.verificarAlertas(usuarioId);
    }
}