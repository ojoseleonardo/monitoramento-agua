import { Injectable } from '@nestjs/common';
import { ConsumoService } from './consumo.service';

@Injectable()
export class AlertasService {
    constructor(private readonly consumoService: ConsumoService) { }

    async verificarAlertas(usuarioId: number) {
        const consumos = await this.consumoService.obterUltimosDoisMeses(usuarioId);

        if (consumos.length < 2) return { alerta: false, mensagem: 'Dados insuficientes' };

        const [ultimoMes, mesAnterior] = consumos;

        if (ultimoMes.quantidade > mesAnterior.quantidade) {
            return { alerta: true, mensagem: 'Consumo elevado em relação ao mês anterior' };
        }

        return { alerta: false };
    }
}