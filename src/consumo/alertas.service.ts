import { Injectable } from '@nestjs/common';
import { ConsumoService } from './consumo.service';

@Injectable()
export class AlertasService {
    constructor(private readonly consumoService: ConsumoService) { }

    async verificarAlertas(usuarioId: number) {
        // Obter os dois últimos meses de consumo
        const consumos = await this.consumoService.obterUltimosDoisMeses(usuarioId);

        // Verificar se temos dados suficientes
        if (consumos.length < 2) {
            return { alerta: false, mensagem: 'Dados insuficientes para gerar alerta.' };
        }

        const [ultimoMes, mesAnterior] = consumos;
        console.log('Último mês:', ultimoMes);
        console.log('Mês anterior:', mesAnterior);

        // Comparar os consumos dos dois meses
        if (ultimoMes.quantidade > mesAnterior.quantidade) {
            console.log('Alerta: Consumo elevado em relação ao mês anterior');
            return { alerta: true, mensagem: 'Consumo elevado em relação ao mês anterior.' };
        }
        console.log('Sem alerta');
        return { alerta: false, mensagem: 'Consumo dentro do esperado.' };
    }
}
