import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
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

    // Método para obter os dois últimos meses de consumo de um usuário
    async obterUltimosDoisMeses(usuarioId: number): Promise<Consumo[]> {
        return this.consumoRepository.find({
            where: { usuarioId },
            order: { dataLeitura: 'DESC' },
            take: 2,
        });
    }
}