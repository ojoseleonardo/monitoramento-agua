import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, MoreThanOrEqual } from 'typeorm';
import { Consumo } from './consumo.entity';

@Injectable()
export class ConsumoService {
    constructor(
        @InjectRepository(Consumo)
        private consumoRepository: Repository<Consumo>,
    ) { }

    // Método para registrar consumo
    async registrarConsumo(consumo: Consumo): Promise<Consumo> {
        return this.consumoRepository.save(consumo);
    }

    // Método para obter histórico de consumo em um intervalo de tempo
    async obterHistorico(usuarioId: number, inicio: Date, fim: Date): Promise<Consumo[]> {
        return this.consumoRepository.find({
            where: {
                usuarioId,
                dataLeitura: Between(inicio, fim),  // Usando Between para especificar o intervalo de datas
            },
        });
    }

    // Função para obter os consumos dos dois últimos meses
    async obterUltimosDoisMeses(usuarioId: number) {
        const now = new Date();
        const inicioMesPassado = new Date(now);
        inicioMesPassado.setMonth(now.getMonth() - 1); // Um mês atrás

        const inicioDoisMeses = new Date(now);
        inicioDoisMeses.setMonth(now.getMonth() - 2); // Dois meses atrás

        console.log('Data início dois meses:', inicioDoisMeses);
        console.log('Data início um mês:', inicioMesPassado);

        // Verifique se o intervalo entre os dois meses está correto
        return await this.consumoRepository.find({
            where: {
                usuarioId: usuarioId,
                dataLeitura: Between(inicioDoisMeses, inicioMesPassado),
            },
        });
    }
}